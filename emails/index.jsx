import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
 
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  
  export const EmailTemplate = ({
    UserName,
    Email,
    Time,
    Date,
    doctor,
    Note
  }) => (
    <Html>
      <Head />
      <Preview>
        Booking Notification!!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo.png`}
            width="200"
            height="150"
            alt="logo"
            style={logo}
          />
          <Text style={paragraph}>SUCCESS{UserName},</Text>
          
          <Text style={paragraph}>
           Your Appointment with {doctor} has booked on {Date} at {Time}. Visit the clinic on time as it may result to your schedule to expire.
          </Text>
         
          <Text style={paragraph}>
            Thankh You
            <br />
            Team MediMate
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Developed by MediMate
          </Text>
        </Container>
      </Body>
    </Html>
  );
  

  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center",
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  