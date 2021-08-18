import React from "react";
import { ReactComponent as ReduxLogo } from "../../images/redux.svg";
import {
  SkillsContainer,
  TextArea,
  SkillsInfo,
  Container,
} from "./skills.components";
import {
  FaJs,
  FaGithub,
  FaReact,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaMailBulk,
} from "react-icons/fa";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: "1",
          text: "React",
          img: <FaReact />,
        },
        {
          id: "2",
          text: "Javascript",
          img: <FaJs />,
        },
        {
          id: "3",
          text: "Git",
          img: <FaGithub />,
        },
        {
          id: "4",
          text: "Linux",
          img: <FaLinux />,
        },

        {
          id: "5",
          text: "HTML",
          img: <FaHtml5 />,
        },
        {
          id: "6",
          text: "CSS",
          img: <FaCss3Alt />,
        },
        {
          id: "7",
          text: "Postman",
          img: <FaMailBulk />,
        },
        {
          id: "8",
          text: "Redux",
          img: <ReduxLogo size={10} />,
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Container id="skills">
        <SkillsInfo>Skills:</SkillsInfo>
        <SkillsContainer>
          {data.map(({ id, text, img }) => (
            <TextArea key={id}>
              {text} {img}
            </TextArea>
          ))}
        </SkillsContainer>
      </Container>
    );
  }
}

export default Skills;
