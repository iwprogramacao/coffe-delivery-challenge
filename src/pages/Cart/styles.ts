import styled from "styled-components";

export const CartPageContainer = styled.main`
  max-width: 75rem;
  padding: 2rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 640px 448px;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
  }
`;

export const DeliveryContainer = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme["gray-200"]};

  div:first-child {
    margin-bottom: 2rem;
    color: ${(props) => props.theme["yellow-700"]};
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;

    strong {
      color: ${(props) => props.theme["gray-800"]};
    }

    p {
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  column-gap: 12px;
  row-gap: 16px;

  label .cep {
    grid-column: 1/3;
  }
  .cep {
    grid-column: 1/3;
  }

  input {
    border: none;
    border-radius: 4px;
    padding: 1rem;
    background-color: ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme["purple-500"]};
  }
`;
