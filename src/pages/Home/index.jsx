import { FiPlus, FiSearch } from 'react-icons/fi'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


import { Container, Content, Brand, Menu, NewNote, Search } from './style'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'

import { api } from '../../services/api'

export function Home(){
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    function handleTagsSelected(tagName){
        if(tagName === 'all') return setTagsSelected([])

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag=>tag !== tagName)
            return setTagsSelected(filteredTags)
        }
        
        setTagsSelected(prevState => [...prevState, tagName])
    }

    function handleDetail(id){
        navigate(`/details/${id}`)
    }

    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get('/tags')
            setTags(response.data)
        }
        fetchTags()
    },[])

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)

            setNotes(response.data)
        }

        fetchNotes()
    },[tagsSelected, search])

    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title= 'Todos'
                onClick={()=>{handleTagsSelected('all')}}
                isActive={tagsSelected.length === 0}
                /></li>
                {
                    tags && tags.map(tag =>
                         <li key={String(tag.id)}><ButtonText title={tag.name}
                         onClick={()=>{handleTagsSelected(tag.name)}}
                         isActive={tagsSelected.includes(tag.name)}
                         /></li>
                        )
                }
            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder='Pesquise sua nota'
                onChange = {e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title='Minhas notas'>
                    {
                        notes.map( note =>
                        <Note
                        key={String(note.id)}
                        data={note}
                        onClick={()=>{handleDetail(note.id)}}
                        />
                        )
                    }
                </Section>
            </Content>

            <NewNote to ='/new'>
                <FiPlus/>
                criar nota
            </NewNote>
        </Container>

    )
}