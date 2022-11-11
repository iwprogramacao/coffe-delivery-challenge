import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  background-color: ${(props) => props.theme["gray-300"]};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    margin-top: -1rem;
  }

  strong {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 1rem;
    padding: 1rem;

    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  > span {
    color: ${(props) => props.theme["gray-700"]};
    margin-top: 0.25rem;
    font-size: 1rem;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 800;
    margin-right: 0.5rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  button {
    border-radius: 6px;
    padding: 0.5rem;
    border: none;
    background-color: ${(props) => props.theme["purple-500"]};
    color: ${(props) => props.theme["gray-100"]};
    display: flex;
    align-items: center;
  }
`;

export const TagContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 14px;
    background-color: ${(props) => props.theme["yellow-300"]};
    color: ${(props) => props.theme["yellow-700"]};
    text-transform: uppercase;
    font-size: 0.675rem;
    font-weight: 700;
  }
`;

export const QuantityControllerContainer = styled.div`
  border-radius: 6px;
  height: 2.5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: ${(props) => props.theme["gray-500"]};

  button {
    line-height: 0;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme["purple-500"]};
  }
`;
