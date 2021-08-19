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
                О себе: интерес к computer science с рассказов Кевина Митника и
                Криса Касперски с 7 класса, закончил аспирантуру в МИСиС в 2020
                г., знаю английский на уровне B-2, стремлюсь к fullstack
                developer`у и в настоящее время изучаю React/JS/flutter.
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
