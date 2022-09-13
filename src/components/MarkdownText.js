import React from "react";
import { Remarkable } from "remarkable";
import { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import styled from "styled-components";

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem auto;
  padding: 2rem;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    padding: 4rem;
    margin-bottom: 4rem;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 3rem 2rem;
  padding: 1rem;
  @media only screen and (min-width: 992px) {
    min-height: 100%;
    margin: 1rem;
    margin-right: 0;
    width: 100%;
  }
`;
const RContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 4rem 2rem;
  padding: 1rem;
  border-top-right-radius: 3.4rem;
  border-bottom-right-radius:3.4rem;
  @media only screen and (min-width: 992px) {
    width: 100%;
    min-height:100%;
    margin: 1rem;
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
  }
`;
const Title = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  margin-top:0;
  padding: 0.8rem 0;
  border-bottom: 0.1rem solid black;
  text-align: center;
 
  font-weight: 600;
  color: rgb(0, 8, 20);

  @media only screen and (min-width: 992px) {
    font-size: 3rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100%;
  font-size: 1.7rem;
  font-family: 'Inter';
  resize: none;
  padding: 0.8rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  color: white;
  background-color: rgb(0, 8, 20);
  @media only screen and (min-width: 992px) {
    font-size: 2rem;
    min-height: 60vh;
    border: none;
    outline: none;
  }
`;
const ResultArea = styled.div`

  width: 100%;
  height: 100%;
  resize: none;
  padding: 0.8rem 1.5rem;
  font-size: 1.7rem;
  font-family: 'Inter';
  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;
const Button = styled.div`
  width: 12rem;
  padding: 1rem;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 1rem;
  text-decoration: none;
  background-color: rgb(0, 8, 20);
  font-size: 1.4rem;
  font-weight:400;
  color: white;
  text-transform: uppercase;
  transform:translate(10rem);
  animation: buttonAnimation 2s ease-in;
  @media only screen and (min-width: 992px) {
    width: 18rem;
    font-size: 1.7rem;
    transform:translate(36rem, 2rem);}
`
const Nav = styled.nav`
  margin: 1rem 1rem;
  padding: 1rem;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @keyframes titleAnimation {
    0%{
        opacity: 0;
        transform: translateX(-120px);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes buttonAnimation {
    0%{
        opacity: 0;
        transform: translateX(200px);
    }
    100%{
      opacity: 1;
      transform: translateX(20px);
    }
  }
  h1 {
    color: rgb(0, 8, 20);
    text-align: center;
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 800;
    animation: titleAnimation 2s ease-out;
    //transform:translateY(-3rem);
  }

  @media only screen and (min-width: 992px) {
    justify-content: space-between;
    height: 4rem;
    margin: 2rem;
    h1{
      font-size:4rem;
    }
  }
`;
const md = new Remarkable();
function MarkdownText() {
  const [text, setText] = useState("");
  const download = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image.png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <Nav>
        <h1>Teenz Markdown</h1>
        <Button disable={!text} onClick={download}>download result</Button>
      </Nav>
      <EditorContainer>
        <Container>
          <Title>Type Here</Title>
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder= 'Type something...'
          ></TextArea>
        </Container>
        <RContainer>
          <Title>Result</Title>
          <ResultArea
            dangerouslySetInnerHTML={{ __html: md.render(text) }}
            id="divToPrint"
          >
          </ResultArea>
        </RContainer>
      </EditorContainer>
      
    </>
  );
}

export default MarkdownText;
