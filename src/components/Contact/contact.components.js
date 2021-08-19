import styled from "styled-components";

export const ContactContainer = styled.div`
  padding-top: 50px;
  max-width: 1070px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const ContactText = styled.span`
  margin-top: 100px;
  display: flex;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const ContactInfo = styled.span`
  max-width: 500px;
  width: 80%;
  display: flex;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 100px;
  margin-bottom: 100px;

  justify-content: space-between;
  flex-direction: row;
`;
export const ContactItem = styled.a`
  display: flex;
  color: inherit;
  border: none;
  cursor: pointer;
`;

export const ContactEmail = styled.a`
  padding-top: 50px;
  text-decoration: none;
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
  transition: 0.3s color ease-in-out;

  &:hover {
    color: #45a29e;
    transition: 0.3s color ease-in-out;
  }
`;
