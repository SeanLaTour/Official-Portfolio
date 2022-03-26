import { Box, Button, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import BackgroundImage from "../../images/blackandwhiteprofile.png";
import PaintSplashImage from "../../images/paintspray.png";
import {
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import Header from "../shared/header/header";

const LandingPage: React.FC = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const transitionPaint = useTransition(isVisible, {
    from: { x: -400, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -400, y: 0, opacity: 0 },
  });

  const transitionBackground = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { x: 400, y: 0, opacity: 0 },
  });

  const transitionText = useTransition(isVisible, {
    from: { x: 0, y: 900, opacity: 0 },
    enter: { x: 0, y: 200, opacity: 1 },
    leave: { x: 0, y: 900, opacity: 0 },
  });



  return (
    <>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <Box height="100vh" paddingTop="6rem" paddingLeft="2rem">
        {transitionPaint((style, item) =>
          item ? (
            <animated.div style={style} className="item">
              <Image
                zIndex="99"
                marginLeft="-2rem"
                backgroundSize="100% 100%"
                src={PaintSplashImage}
                width="60%"
                height="60%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              />
            </animated.div>
          ) : (
            ""
          )
        )}
        {transitionBackground((style, item) =>
          item ? (
            <animated.div style={style} className="item">
              {" "}
              <Image
                src={BackgroundImage}
                height="100%"
                position="fixed"
                right="0"
                bottom="0"
              />
            </animated.div>
          ) : (
            ""
          )
        )}

        {transitionText((style, item) =>
          item ? (
            <animated.div style={style} className="item">
              <PortfolioTextTitle position="fixed" bottom="8rem">
                Sean La Tourette
              </PortfolioTextTitle>
              <PortfolioTextSubTitle position="fixed" bottom="2rem">
                Web never looked this good.
              </PortfolioTextSubTitle>
            </animated.div>
          ) : (
            ""
          )
        )}
      </Box>
    </>
  );
};

export default LandingPage;
