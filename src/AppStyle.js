import styled from "styled-components";

export const Body = styled.div`
  width:auto;
  padding: 20px 0px;
`

export const Main = styled.div`
  /* width: 100%; */
  height: 400px;
  padding: 20px 150px;
  margin-top: 80px;

  display: flex;
  justify-content: space-between; 
`

export const Section = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;

  .content{
    font-size:1.75rem;
    letter-spacing: 0.25rem;
  }

  .content h2{
    margin: 10px 0px;
  }

  .btn-group{
    display: flex;
    gap: 30px;
  }
`

export const Figure = styled.figure`
  width: 45%;
  height: 400px;
  display: flex;
  justify-content: flex-end;

  img{
    max-width: 500px;
    height: 100%;
  }
`


