import React from "react";
import { Remarkable } from "remarkable";
import { useState} from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20rem;
  margin: 2rem 4rem;
  padding: 1.3rem;

  @media only screen and (min-width:992px){
    width:75%;
  }
  
`;
const Title = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  padding: 0.8rem 0;
  border-bottom: 0.1rem solid black;
  text-align: center;
  font-family: monospace;
  font-weight: bold;
  color: rgb(255,195,0);

  @media only screen and (min-width:992px){
    font-size:3rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 1.7rem;
  border: none;
  background-color: white;
  padding: 0 1.5rem;
`;
const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1.7rem;
  border: 0.15rem solid black;
  border-radius: 0.5rem;
  background-color: rgb(0,53,102);
  padding: 0 1.5rem;
`;
const Button = styled.button`
  padding: 1rem 2.2rem;
  margin: 4rem 2rem;
  border-radius: 1rem;
  background-color: rgb(0,8,20);
  font-size: 1.5rem;
  color: white;
`
const md = new Remarkable()
function MarkdownText() {
  const [text, setText] = useState('');   
  return (
    <>
      <Container>
        <Title>Markdown</Title>
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></TextArea>
      </Container>
      <Container>
        <Title>Result</Title>
        <ResultArea dangerouslySetInnerHTML={{__html: md.render(text)}}>

        </ResultArea>
      </Container>
      <Button onClick={()=>setText(true)}> Download </Button>
    </>
  );
}

export default MarkdownText;
