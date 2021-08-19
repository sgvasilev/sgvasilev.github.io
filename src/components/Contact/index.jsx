import React from "react";
import {
  ContactContainer,
  ContactText,
  ContactInfo,
  ContactItem,
  ContactEmail,
} from "./contact.components";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactText>Контакты:</ContactText>
        <ContactEmail href="mailto:sendto.vasilevsg@gmail.com">
          sendto.vasilevsg@gmail.com
        </ContactEmail>
        <ContactInfo>
          <ContactItem
            href="https://github.com/sgvasilev"
            title="Github account"
          >
            <FaGithub size={50} />
          </ContactItem>
          <ContactItem href="./cv.pdf" download="" title="Скачать резюме">
            <FaEnvelope size={50} />
          </ContactItem>
        </ContactInfo>
      </ContactContainer>
    </>
  );
};

export default Contact;
