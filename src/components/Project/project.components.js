import styled from 'styled-components'

export const Link = styled.h3`
  font-size: 1.3rem;
  position: absolute;
  margin: 0;
  padding: 0;
  width: 45%;
  text-align: left;
  margin-left: 20px;
  word-wrap: break-word;
  white-space: pre-line;
  text-align: justify;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`
export const Header = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.35rem;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`

export const Desc = styled.span`
  font-size: 1rem;
  white-space: pre-line;
`
