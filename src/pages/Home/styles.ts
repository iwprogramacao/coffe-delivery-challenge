import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.5rem;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;

  background: url("/background-title.png");

  > div {
    display: flex;
    align-items: center;
  }
`;

export const MainInfoContainer = styled.div`
  width: 100%;
  height: 32rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  > div > div {
    display: grid;
    grid-template-columns: 233px 296px;
    column-gap: 2.5rem;
    row-gap: 1.25rem;
  }
  > div > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 4.125rem;
  }

  img {
    margin-left: 10px;
    height: 360px;
  }
`;

export const MenuGrid = styled.div`
  width: 100%;
  padding: 2rem;

  h2 {
    width: 100%;
    font-family: "Baloo 2", sans-serif;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 3rem;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;
