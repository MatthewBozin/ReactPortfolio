import React from "react";
import IconLink from "./IconLink";
import { Box, Card, Link } from "@mui/material";
import Style from "./Portfolio.module.scss";

function PortfolioBlock(props) {
  const { image, live, source, title, darkMode, imgStyle } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card
        variant="outlined"
        style={{
          backgroundColor: darkMode ? "#3f3f3f" : "#dfdfdf",
          color: darkMode ? "white" : "black",
          margin: "1rem",
        }}
      >
        <Link href={live} target={"_blank"} rel="noopener noreferrer">
          <Box
            component={"img"}
            src={image}
            alt={"mockup"}
            p={"2rem"}
            className={Style.hoverContainer}
            style={{
              aspectRatio: "3/2",
              filter: "drop-shadow(10px 10px 12.5px #000)",
              width: "100%",
              ...imgStyle,
            }}
          />
        </Link>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            paddingBottom: "1rem",
            marginTop: "-1rem",
          }}
        >
          {title}
        </h1>
      </Card>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"row"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live"} icon={"fa fa-safari"} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Repo"} icon={"fa fa-github"} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
