import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);

    :hover {
      text-decoration: underline;
    }
  }
`;
export default Wrapper;
