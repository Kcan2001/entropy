import * as React from "react";
import image from "../images/entropy.jpg";
import logo from "../images/entropy-logo.png";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

import { Layout, Button } from "antd";

const { Header, Content } = Layout;

const Image = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.2;
  filter: grayscale(0.5);
  display: none;

  @media only screen and (min-width: 760px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  position: relative;
  width: 80%;

  @media only screen and (min-width: 760px) {
    width: 25%;
  }
  margin-top: 50px;
  z-index: 2;
  top: 10%;
  border-radius: 50%;
`;

const LogoText = styled.h1`
  margin: 0;
  color: #fff;
  padding: 1px 6px;
  border: 2px solid white;
  border-radius: 50%;
  font-family: "Lato", georgia, serif;
  text-transform: uppercase;
`;

const LogoButton = styled(Button)`
  background: none;
  border: none;
  margin-left: 26px;
  cursor: pointer;
`;

const Para = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.7;
  font-family: "Lato", georgia, serif;
  text-align: center;
  margin-top: 125px;
`;

const Text = styled.p`
  color: white;
  font-weight: 400;
  font-size: 16px;
  width: 80%;
  @media only screen and (min-width: 760px) {
    width: 40%;
  }
  letter-spacing: 2px;
  line-height: 1.7;
  font-family: "Lato", georgia, serif;
  text-align: center;
  margin-top: 25px;
`;

// markup
const IndexPage = () => {
  const isNotMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      <Helmet>
        <meta name="icon" href="src/images/favicon.png" />
      </Helmet>
      <Layout>
        <Header
          style={{
            height: "60px",
            backgroundColor: "#070818",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoButton>
            <LogoText>E</LogoText>
          </LogoButton>
        </Header>
        <Content style={{ height: "100%" }}>
          <Container>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Logo src={logo} />
              <div style={{ position: "absolute" }}>
                <Image src={image} alt="background" />
                <div style={{ height: isNotMobile ? 0 : "200px" }} />
                <div
                  style={{
                    height: "50px",
                    width: "100%",
                    background: "#121640",
                    bottom: "10px",
                    position: "relative",
                  }}
                />
              </div>

              <Para>LA's new event experience</Para>
              <Text>
                <strong>​en·tro·py</strong>
                <br />
                <br />
                ​lack of order or predictability; gradual decline into disorder.
                ​LA is filled with "intentions" and "mindfulness", but sometimes
                you just want to party without restrictions or cares. This is
                our community. ​Whether its ice melting, salt and sugar
                dissolving, or coffee dispersed into water; entropy is the
                natural flow of life. While intentions, self love/organization,
                and hard work are important to keeping a healthy life;
                experiencing our natural states of freedom is also important.
                <br />
                <br />
                ​Welcome to the community.
              </Text>

              <div style={{ height: isNotMobile ? "300px" : "100px" }} />
            </div>

            <Para>What's next?</Para>

            <iframe
              src="https://lu.ma/embed-checkout/evt-yeAS24Lb6A3XlgP"
              width={isNotMobile ? "600" : "300"}
              height="1000"
              frameborder="0"
              style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Container>
        </Content>
      </Layout>
    </>
  );
};

export default IndexPage;
