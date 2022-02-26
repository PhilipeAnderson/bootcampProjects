import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  
  p {
    width: 60%;
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--white);
    margin-top: -100px;
  }

  img {
    margin-top: 100px;
    width: 20%;
  }

  @media(max-width:720px){
    P {
      margin-top: -30px;
    }
  }
`;