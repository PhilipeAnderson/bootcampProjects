import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  
  section {
    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      color: #000;
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
      display: block;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      

      aside {
        width: 33%;
        
        article {
          width: 70%;
          margin-bottom: 60px;
          text-align: center;

          h3 {
            color: #fff;
            border-radius: 5px;
            background-color: #6bc2d3;
            box-shadow: 0px 0px 10px #6bc2d3;
            margin-bottom: 10px;
          }

          p {
            color: #000;
          }
        }
      }
      
      img {
        width: 30%;
        margin-right: 40px;
      }
    }
  }
`;