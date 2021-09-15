import * as React from "react";
import image from "../images/entropy.jpg";
import logo from "../images/entropy-logo.png";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Layout, Button } from "antd";

const { Header, Content } = Layout;

const Image = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.2;
  position: absolute;
  filter: grayscale(0.5);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  position: relative;
  width: "auto";
  height: 50%;
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

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta name="icon" href="../images/favicon.png" />
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
        <Content style={{ height: "100vh" }}>
          <Container>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image src={image} alt="background" />
              <Logo src={logo} />

              <Para>
                LA's new event experience
                <br /> - - - Coming soon - - -
              </Para>
            </div>
          </Container>
        </Content>
      </Layout>
    </>
  );
};

export default IndexPage;
