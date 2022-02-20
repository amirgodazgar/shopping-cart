import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  height: 100%;

  img {
    max-width: 250px;
    max-height: 250px;
    min-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    padding: 1rem;
    margin: 0 auto;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
