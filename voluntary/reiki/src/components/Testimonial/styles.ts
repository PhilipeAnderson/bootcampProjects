import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin: 70px auto;
  padding: 40px;
  background-color: #474747;

  section {
    max-width: 1080px;
    margin: 0 auto;

    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;


      img {
        width: 270px;
        margin-top: 20px;
        padding: 10px 10px;
        border-radius: 50%;
      }

      div {
        width: 400px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;

        h3 {
          margin-bottom: 50px;
        }
      }
    }
  }
`;