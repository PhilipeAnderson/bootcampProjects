import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  main {
    max-width: 1080px;
    margin: -40px auto 0 auto;
    padding: 40px;

    h1, h2, h3, p {
      color: #000;
    }

    a {
      display: block;
      margin-top: 20px;
      padding: 7px 14px;
      border-radius: 7px;
      background-color: #5dc435;
      text-align: center;
    }
  }
`;