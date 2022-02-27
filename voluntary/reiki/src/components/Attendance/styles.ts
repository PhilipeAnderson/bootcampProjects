import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: -40px auto 0 auto;
  padding: 40px;

  section {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    div {
      max-width: 24%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;


      h4, p {
        text-align: center;
        margin-bottom: 16px;
        color: #000;
      }

      button {
        padding: 4px 12px;
        color: #fff;
        border: none;
        border-radius: 7px;
        background-color: #6bc2d3;
        cursor: pointer;
      }
    }
  }
`;