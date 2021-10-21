import { ReactComponent as Logo } from '../../images/1.svg'
import styled from 'styled-components'

export const IntroContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 30px 0 30px;
  max-width: 1070px;
  z-index: 30;

  @media screen and (max-width: 375px) {
    margin: 0 25px 0 25px;
    justify-content: flex-start;
  }
`

export const LogoImg = styled(Logo)`
  //обводка телефона #1F2833
  fill: red;
  z-index: 35;
  width: 200px;
  position: relative;
  flex: 1;
  flex-basis: 40%;
`
export const IntroContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 30px 0 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 0 0 0;
  }
`

export const IntroH1 = styled.p`
  font-size: 2.5rem;
  display: flex;
  justify-self: center;
  text-align: center;
  z-index: 32;
  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`

export const IntroTextArea = styled.div`
  height: 40vh;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`

export const IntroP1 = styled.p`
  width: 100%;
  display: flex;
  text-align: left;
  font-size: 1.5rem;
  flex: 1;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.5rem;
  }
`

export const IntroP2 = styled.p`
  display: flex;
  font-size: 1.4rem;
  text-align: left;
  flex: 1;
  letter-spacing: 2px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex: 2;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  display: flex;
`

export const Container = styled.div`
  margin: auto;
  max-width: 1070px;
`
