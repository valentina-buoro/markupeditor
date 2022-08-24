import React from "react";
import { Remarkable } from "remarkable";
import { useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid black;
`;
const Title = styled.div`
  font-size: 22px;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 17px;
`;
const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;
const Button = styled.button`
 position: absolute;
 top: 40px;
 left: 40px;
`
const md = new Remarkable()
function MarkdownText() {
  const [text, setText] = useState();
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
      <Button> Download </Button>
    </>
  );
}

export default MarkdownText;
