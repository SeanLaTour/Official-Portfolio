import { Box, Button, Grid, HStack, Image, Input, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import PaperAndPenImage from "../../images/louiblackandwhite.png";
import BackgroundPhoto from "../../images/paintstrokebackgroundleft.webp";
import {
  PortfolioTextStandard,
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";
import emailjs from 'emailjs-com';
 
const Contact: React.FC = (props) => {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_7cznn7c', 'template_ck8cdf7', e.target, 'JwrnauuumQQCCEDkG')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }
  return (
    <Box
      backgroundImage={BackgroundPhoto}
      backgroundRepeat="no-repeat"
      backgroundPosition="-5rem"
      backgroundSize="auto 100%"
      height="100vh"
      paddingTop="6rem"
      paddingLeft="2rem"
    >
      <Box>
        <PortfolioTextTitle marginLeft="2rem" paddingTop="0rem" color="white">
          -Contact Me
        </PortfolioTextTitle>
          <form className="contact-form" onSubmit={sendEmail}>
            <Box marginTop="1rem" marginLeft="2rem" width="35%">
              <PortfolioTextStandard marginLeft="2rem" width="12rem" color="white">
                Name
              </PortfolioTextStandard>
              <Input focusBorderColor="white" color="white" type="text" name="from_name" />
              <PortfolioTextStandard marginLeft="2rem" width="12rem" color="white">
                Email
              </PortfolioTextStandard>
              <Input focusBorderColor="white" color="white" type="email" name="from_email" />
              <PortfolioTextStandard marginLeft="2rem" width="12rem" color="white">
                Subject
              </PortfolioTextStandard>
              <Input focusBorderColor="white" color="white" type="text" name="subject" />
              <PortfolioTextStandard marginLeft="2rem" width="12rem" color="white">
                Message
              </PortfolioTextStandard>
              <Textarea focusBorderColor="white" color="white" width="95%" name="html_message" />
              <Button fontFamily="Rocksalt" style={{backgroundColor: "rgb(0,0,0,0)", color: "white", marginTop: "1rem", borderWidth: "2px", borderColor: "white"}} type="submit" >Send</Button>
            </Box>
          </form>
          <PortfolioTextStandard marginTop="1rem" marginLeft="2rem" width="30%" color="white">
           * Every time you contact me I'll give my cat a treat ->
          </PortfolioTextStandard>
        </Box>
      <Image position="fixed" right="-10%" bottom="0" src={PaperAndPenImage} />
    </Box>
  );
};

export default Contact;
