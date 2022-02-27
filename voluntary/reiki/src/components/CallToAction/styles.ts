import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin: 70px auto 0 auto;
  padding: 40px;
  background-image: url('/assets/handsReiki.JPG');


  section {
    max-width: 1080px;
    margin: 0 auto;

    article {
      padding: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      
      header {
        text-align: center;
        margin-bottom: 50px;

        h1 {
          font-size: 2rem;
          font-weight: bold;
        }
        
        p {
          font-size: 1.2rem;
          font-weight: bold;
        }
      }

      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        i {
          font-size: 40px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
  }
`;