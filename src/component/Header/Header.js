import styled from "styled-components";
import Link from "next/link";
const Header = () => {
  return (
    <HeaderContainer>
      <MenuWrap>
        <Link href="/">
          <LogoImg src="/asset/images/icons/logo.png" alt="test" />
        </Link>
        <MenuList>
          <Menu>
            <Link href="/">
              <LinkButton>홈페이지</LinkButton>
            </Link>
          </Menu>
          <Menu>
            <Link href="/product">
              <LinkButton>상품 소개</LinkButton>
            </Link>
          </Menu>
          <Menu>
            <Link href="/intro">
              <LinkButton>농장 소개</LinkButton>
            </Link>
          </Menu>
          <Menu>
            <Link href="/info">
              <LinkButton>구입 문의</LinkButton>
            </Link>
          </Menu>
        </MenuList>
      </MenuWrap>
    </HeaderContainer>
  );
};
export default Header;
const HeaderContainer = styled.section`
  width: 100%;
`;
const LogoImg = styled.img`
  width: 320px;
  margin-top: 40px;
`;
const MenuWrap = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
`;
const Menu = styled.li``;
const LinkButton = styled.button`
  position: relative;
  width: 200px;
  height: 100px;
  border: none;
  font-family: "GmarketSans";
  font-weight: 400;
  font-size: 22px;
  cursor: pointer;
  background: transparent;
  &:hover {
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 40px;
      height: 40px;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      background-image: url("/asset/images/apple/apple_hover.png");
      background-size: cover;
    }
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      width: 100px;
      height: 40px;
      bottom: 0;
      left: 50px;
      transform: translateY(-50%);
      background-image: url("/asset/images/apple/underline_hover.png");
      background-size: cover;
    }
  }
`;
