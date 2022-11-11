import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;

  > div {
    display: flex;
  }
`;

export const MainInfoContainer = styled.div`
  width: 36.75rem;
  margin-right: 3.5rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 4.125rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.875rem;
    margin-bottom: 0.5rem;

    span {
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${(props) => props.theme["purple-500"]};
      color: ${(props) => props.theme["gray-100"]};
    }

    > p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme["gray-700"]};
    }
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
