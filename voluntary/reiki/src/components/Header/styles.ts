import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 27rem;

  header {
    max-width: 1080px;
    height: 5rem;
    margin: 0 auto;
    border-bottom: 1px solid #474747;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    nav {
      padding: 20px;
      margin-top: 7px;
      
      a {
        margin-left: 40px
      }
    }

    section {
      padding: 20px;
      margin-top: 7px;

      i {
        font-size: 20px;
        margin-left: 20px;
      }
    }
  }
`;