import styled from "styled-components";

export const ContentStyle = styled.div`
  height: 500px;
  padding:40px 150px;
  display: flex;
  flex-direction: column;

  div{
    display: flex;
    justify-content: space-between;
    height: 40%;
  }
`

export const DivTitle = styled.div`
  width: 40%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  span{
    text-transform: uppercase;
    color:var(--orange);
    font: bold 16px 'Arial';
    margin-bottom: 10px;
  }

  h2{
    font-size: 40px;
    text-transform:flex-start;
  }
`

export const DivParagraph = styled.div`
  width: 40%;
  margin-top: 50px;
  
  p{
    vertical-align: center;
  }
`

export const CardsGroup = styled.ul` 
  height: 65%;
  padding-top: 75px;

  display: flex;
`