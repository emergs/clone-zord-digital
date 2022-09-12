import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding:0 30px;
  height: 40px;
  border: none;
  border-radius:10px;
  background-color: var(--purple);
  color:${(props)=> props.color !== 'purple' ? '#ffffff' : 'rgb(132, 124, 251)'};
  background-color:${(props)=> props.color !== 'purple' ? 'rgb(132, 124, 251)' : '#ffffff'};

  span{
    padding-left: 15px;
  }
`