import styled from "styled-components";

export const ItemCardWrapper = styled.div`
  display: grid;
  margin-top: 30px;
  gap: 15px;
  width: 100%;

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) and (max-width: 999px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
