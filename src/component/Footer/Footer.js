import styled from "styled-components";
import Link from "next/link";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>한아름 농장</FooterContents>
      <SocialLink></SocialLink>
    </FooterContainer>
  );
};
export default Footer;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  width: 100vw;
  height: 400px;
  margin-top: 50px;
  background-color: black;
  color: white;
`;

const FooterContents = styled.p``;
