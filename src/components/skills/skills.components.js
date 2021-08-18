import styled from "styled-components";

export const SkillsContainer = styled.div`
  max-width: 1070px;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 50px;
`;

export const TextArea = styled.span`
  align-items: center;
  text-align: center;
  font-size: 2rem;

  /* margin-left: 50px;

  &:first-of-type {
    margin-left: 0;
  } */

  transition: color 2s ease-in-out;
`;

export const SkillsInfo = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 50px;
  font-weight: bold;
`;

export const Container = styled.div`
  max-width: 1070px;
  margin: auto;
`;
