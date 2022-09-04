import React from 'react'
import MarkdownText from './components/MarkdownText'

import './index.css'
import styled from 'styled-components'

const AppContainer = styled.div`
width:90%;
height:100%;
display:flex;
flex-direction: column;

`



function App() {
  return (
    <AppContainer>
      
      <MarkdownText/>
      
      
      
    </AppContainer>
  )
}

export default App