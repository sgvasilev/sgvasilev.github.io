import React from "react";

import {
  IntroContainer,
  LogoImg,
  IntroH1,
  IntroContent,
  IntroP1,
  IntroP2,
  TextContainer,
  ImageContainer,
  Container,
} from "./intro.elements";

const Intro = () => {
  return (
    <>
      <Container id="main">
        <IntroContainer>
          <IntroH1>Приветствую! Меня зовут Сергей</IntroH1>
          <IntroContent>
            <TextContainer>
              <IntroP1>
                Сайт: React + styled components + framer motion + javascript
              </IntroP1>
              <IntroP2>
                О себе: закончил МИСиС в 2020 г., на протяжении учебы/работы в
                институте много работал с данными/обработкой и визуализацией,
                где и хочу продолжить свое развитие.
              </IntroP2>
            </TextContainer>
            <ImageContainer>
              <LogoImg />
            </ImageContainer>
          </IntroContent>
        </IntroContainer>
      </Container>
    </>
  );
};

export default Intro;
