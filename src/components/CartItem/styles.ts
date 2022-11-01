import styled from "styled-components";

export const CartItemContainer = styled.main`
  display: flex;
  gap: 1.25rem;
  border-bottom: 2px solid ${(props) => props.theme["gray-300"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  strong {
    margin-left: auto;
  }
`;

export const QuantityControllerContainer = styled.div`
  button {
    background: none;
    border: none;
    line-height: 0;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const RemoveAndAddContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 0.5rem;
  width: 5rem;
  height: 2rem;
  background-color: ${(props) => props.theme["gray-400"]};
`;

export const RemoverButton = styled.button`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 0.5rem;
  width: 6rem;
  height: 2rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  background-color: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme["gray-700"]};
`;
