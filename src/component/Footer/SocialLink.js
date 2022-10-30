import styled from "styled-components";
import Link from "next/link";
const SocialLink = (props) => {
  return (
    <SocialLinkContainer>
      <SocialLinkIcon scr={props.src} alt={props.alt}></SocialLinkIcon>
    </SocialLinkContainer>
  );
};
export default SocialLink;
const SocialLinkContainer = styled.footer`
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
const SocialLinkIcon = styled.img`
  width: 60px;
  height: 60px;
`;
