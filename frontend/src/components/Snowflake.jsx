// Snowflake.js
import React from "react";
import { Box } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";

const snowfall = keyframes`
  to {
    transform: translateY(100vh);
  }
`;

const snowflakeStyle = css`
  position: absolute;
  top: -500px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
  overflow: hidden;

  background-image: radial-gradient(4px 4px at 100px 50px, #fff, transparent),
    radial-gradient(6px 6px at 200px 150px, #fff, transparent),
    radial-gradient(3px 3px at 300px 250px, #fff 50%, transparent),
    radial-gradient(4px 4px at 400px 350px, #fff 50%, transparent),
    radial-gradient(6px 6px at 500px 100px, #fff 50%, transparent),
    radial-gradient(3px 3px at 50px 200px, #fff 50%, transparent),
    radial-gradient(4px 4px at 150px 300px, #fff 50%, transparent),
    radial-gradient(6px 6px at 250px 400px, #fff 50%, transparent),
    radial-gradient(3px 3px at 350px 600px, #fff 50%, transparent);

  background-size: 650px 650px;
  animation: ${snowfall} 4s linear infinite;
  content: "";
`;

const Snowflake = () => {
  return <Box css={snowflakeStyle} />;
};

export default Snowflake;
