import React from "react";

import {
  IntroContainer,
  LogoImg,
  IntroH1,
  IntroContent,
  IntroP1,
  IntroTextArea,
} from "./intro.elements";

const Intro = () => {
  return (
    <>
      <IntroContainer>
        <IntroContent>
          <IntroTextArea>
            <IntroH1>Hello! My name is Sergey</IntroH1>
            <IntroP1>Hello! My name is Sergey</IntroP1>
          </IntroTextArea>
          /<LogoImg />
        </IntroContent>
      </IntroContainer>
    </>
  );
};

export default Intro;
