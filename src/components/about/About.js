import React, { useState, useEffect } from "react";
import Style from "./About.module.scss";
import TerminalStyle from "./Terminal.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import classNames from "classnames";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  const iconClass = "fa fa-circle";

  const text =
    "Hello, I'm Matthew, Your next Software Engineer. I am a Full-Stack Engineer with a passion for growth, development, and innovation. I am currently accepting project opportunities, clients, or employment.";

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(text.slice(0, index));
      setIndex(() => index + 1);
    }, 30);

    return () => clearInterval(interval);
  }, [text, index]);

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Box
        component={"section"}
        className={classNames(TerminalStyle.terminal, TerminalStyle.shadowed)}
        width={{ xs: "80%", md: "50%" }}
        borderRadius={"0.5rem"}
        mb={"4rem"}
      >
        <Box
          sx={{ backgroundColor: "#8c8c8c" }}
          p={"0.5rem"}
          borderRadius={"0.5rem 0.5rem 0 0"}
          fontSize={"1rem"}
        >
          <i className={classNames(iconClass, TerminalStyle.red)} />
          <i className={classNames(iconClass, TerminalStyle.amber)} />
          <i className={classNames(iconClass, TerminalStyle.green)} />
        </Box>
        <Box
          py={{ xs: "1rem", md: "2rem" }}
          px={{ xs: "2rem", md: "3rem" }}
          borderRadius={"0 0 0.5rem 0.5rem"}
          sx={{ backgroundColor: "#27242f" }}
          fontSize={"1.5rem"}
          fontFamily={"Courier New, Courier, monospace"}
        >
          <>
            <p>
              <span style={{ color: info.baseColor }}>
                {firstName}
                {info.lastName.toLowerCase()} $
              </span>{" "}
              cat about{firstName}{" "}
            </p>
            <p>
              <span style={{ color: info.baseColor }}>
                about{firstName} <span className={Style.green}>(main)</span> ${" "}
              </span>
              {typedText}
            </p>
          </>
        </Box>
      </Box>
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
