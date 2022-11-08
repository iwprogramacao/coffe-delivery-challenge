import styled from "styled-components";

export const CartPageContainer = styled.main`
  max-width: 74rem;
  padding: 2rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 640px 448px;
  gap: 2rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
  }
`;

export const DeliveryContainer = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 6px;
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

  input {
    border: none;
    border-radius: 4px;
    padding: 1rem;
    background-color: ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme["purple-500"]};
  }

  .cep {
    width: 200px;
    grid-column: 1/4;
  }

  .rua {
    width: 100%;
    grid-column: 1/4;
  }

  .complemento {
    width: 100%;
    grid-column: 2/4;
  }
`;

export const PaymentContainer = styled(DeliveryContainer)`
  div:first-child {
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaymentButton = styled.button`
  width: 11.25rem;
  height: 51px;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-400"]};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.75rem;
  gap: 0.75rem;
  color: ${(props) => props.theme["gray-700"]};
`;

export const CartWrapper = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme["gray-200"]};
`;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 1.625rem;
    }
  }

  button {
    margin-block: 1rem;
    padding: 1rem;
    border-radius: 6px;
    border: none;
    background-color: ${({ theme }) => theme["yellow-500"]};
    text-transform: uppercase;
    color: ${({ theme }) => theme["gray-100"]};
    font-weight: bold;
  }
`;
