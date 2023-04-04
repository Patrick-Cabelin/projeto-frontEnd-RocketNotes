import  React  from 'react'
import  ReactDOM  from 'react-dom'
import  {ThemeProvider}  from 'styled-components'

import  GlobalStyle from './style/global'
import  theme  from './style/theme'
import { Routes } from './route'
import { AuthProvider } from './hooks/auth'

ReactDOM.render(
  <React.StrictMode>
   
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);