import React from "react";
import { Remarkable } from "remarkable";
import { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import styled from "styled-components";

const EditorContainer = styled.div`
  width: 110%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 7rem;
  padding: 2rem;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    margin: 0;
    padding: 7rem;
    margin-bottom: 4rem;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 20rem;
  margin: 1rem 2rem;
  padding: 1rem;
  @media only screen and (min-width: 992px) {
    width: 95%;
    min-height: 80vh;
    //background-color: rgb(0, 8, 20);
    margin: 1rem;
    margin-right: 0;
    width: 100%;
  }
`;
const RContainer = styled.div`
  width: 100%;
  min-height: 20rem;
  margin: 4rem 2rem;
  padding: 1rem;
  border-top-right-radius: 3.4rem;
  border-bottom-right-radius:3.4rem;
  @media only screen and (min-width: 992px) {
    width: 95%;
    min-height: 80vh;
    margin: 1rem;
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
    //background-color: rgb(0, 29,58);
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
  min-height: 100%;
  resize: none;
  padding: 0.8rem 1.5rem;
  font-size: 1.7rem;
  font-family: 'Inter';
  //background-color: rgb(0, 53, 102);
  @media only screen and (min-width: 992px) {
    font-size: 2rem;
    //background-color: rgb(0, 53, 102);
  }
`;
const Button = styled.div`
  width: 12rem;
  padding: 1.4rem; //2.2rem;
  display: inline-block;
  margin-left: 3rem;
  text-align: center;
  border-radius: 1rem;
  text-decoration: none;
  background-color: rgb(0, 8, 20);
  font-size: 1.4rem;
  font-weight:400;
  color: white;
  text-transform: uppercase;
  @media only screen and (min-width: 992px) {
    width: 18rem;
    margin: 1rem;
    font-size: 1.7rem;
    //: translate(55rem, 0);
  }
`;
const Nav = styled.nav`
  margin: 1rem;
  height: 3rem;
  margin-top: 4rem;
  margin-bottom: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: rgb(0, 8, 20);
    text-align: center;
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 800;
    margin-right:5rem;
  }

  @media only screen and (min-width: 992px) {
    justify-content: space-between;
    height: 5rem;
    
    margin-bottom: 1rem;
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
        <Button onClick={download}>download result</Button>
      </Nav>
      <EditorContainer>
        <Container>
          <Title>Markdown</Title>
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></TextArea>
        </Container>
        <RContainer>
          <Title>Result</Title>
          <ResultArea
            dangerouslySetInnerHTML={{ __html: md.render(text) }}
            id="divToPrint"
          ></ResultArea>
        </RContainer>
      </EditorContainer>
    </>
  );
}

export default MarkdownText;
