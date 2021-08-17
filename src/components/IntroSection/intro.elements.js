import { ReactComponent as Logo } from "../../images/logo.svg";
import styled from "styled-components";

export const IntroContainer = styled.div`
  height: 100%;
  display: flex;
  max-width: 1070px;
  z-index: 30;
  margin: auto;

  @media screen and (max-width: 768px) {
    margin: 0 25px 0 25px;
    justify-content: flex-start;
  }
`;

export const LogoImg = styled(Logo)`
  //обводка телефона #1F2833
  fill: red;
  z-index: 35;
  width: 500px;
  position: relative;
  right: -150px;
  @media screen and (max-width: 1024px) {
    width: 350px;
    right: 0;
  }
  @media screen and (max-height: 667px) {
    width: 250px;
    right: 0;
  }
`;
export const IntroContent = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 150px 100px 0px 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 0 0 0;
  }
`;

export const IntroP1 = styled.p`
  display: flex;
  margin: 0;
  font-size: 2rem;
  display: flex;
  z-index: 33;
`;

export const IntroH1 = styled.h1`
  margin: 0;
  font-size: 3rem;
  display: flex;
  z-index: 33;
`;

export const IntroTextArea = styled.p`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
