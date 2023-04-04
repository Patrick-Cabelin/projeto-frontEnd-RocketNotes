import { FiPlus,FiX } from 'react-icons/fi'
import { Container} from './style'

export function NoteItem({value, onClick, isNew,...rest}){

    return(
        <Container isNew={isNew} {...rest}>
            <input type="text" value={value} readOnly={!isNew}/>

            <button type='button' onClick={onClick} className= {isNew? 'button-delete': 'button-add'}>

                {isNew? <FiPlus/>: <FiX/>}
            </button>
        </Container>
    )
}