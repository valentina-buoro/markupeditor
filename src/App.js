import React from 'react'
import MarkdownText from './components/MarkdownText'

import './index.css'
import styled from 'styled-components'

const AppContainer = styled.div`
width:100%;
height:100%;
display:flex;
`

const EditorContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 1rem 2rem;
padding: 2rem;

`

function App() {
  return (
    <AppContainer>
      <EditorContainer>
      <MarkdownText/>
      
      </EditorContainer>
      
    </AppContainer>
  )
}

export default App