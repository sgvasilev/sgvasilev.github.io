import React from 'react'

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
} from './intro.elements'

const Intro = () => {
  return (
    <>
      <Container id='main'>
        <IntroContainer>
          <IntroH1>Welcome</IntroH1>
          <IntroContent>
            <TextContainer>
              <IntroP1>
                .This: React + styled components + framer motion + javascript
              </IntroP1>
              <IntroP2>
                About me: finished postgraduate studies in material science at
                NUST MISIS in 2020, currently searching job for frontend/backend
                developer.
              </IntroP2>
            </TextContainer>
            <ImageContainer>
              <LogoImg />
            </ImageContainer>
          </IntroContent>
        </IntroContainer>
      </Container>
    </>
  )
}

export default Intro
