import styled from "styled-components";

export const DeliveryContainer = styled.main`
  max-width: 74rem;
  padding: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  img {
    margin-left: auto;
    margin-top: auto;
  }
`;

export const TitleContent = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    color: ${(props) => props.theme["yellow-700"]};
  }
`;

export const DataDeliveryContainer = styled.div`
  border-radius: 6px 44px 6px 44px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #c47f17, #8047f8) border-box;

  border: 1px solid transparent;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoDeliveryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;
