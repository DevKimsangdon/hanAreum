import styled from "styled-components";
import Link from "next/link";
const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage></BannerImage>
    </BannerContainer>
  );
};
export default Banner;
const BannerContainer = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  background: #fecdc0;
  justify-content: center;
  &::after {
    content: "HANAREUMFARM";
    display: inline-block;
    position: absolute;
    opacity: 0.4;
    color: white;
    font-size: 120px;
    width: 100vw;
    height: 100px;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-30%, -50%);
  }
`;
const BannerImage = styled.div`
  width: 500px;
  height: 250px;
  position: relative;
  z-index: 20;
  background-image: url("/asset/images/apple/banner_one_remove.png");
  background-size: cover;
  background-position: 0 -40px;
`;
const LinkButton = styled.button``;
