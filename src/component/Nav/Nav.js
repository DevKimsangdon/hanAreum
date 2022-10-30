import styled from "styled-components";
import Link from "next/link";
import Icon from "../Icon/Icon";
const Nav = () => {
  return (
    <NavContainer>
      <Icon
        src="/asset/images/banner/farm.png"
        href="/"
        title="농장체험"
        alt="농장체험"
      />
      <Icon
        src="/asset/images/banner/product.png"
        href="/"
        title="사과 수확 과정"
        alt="사과 수확 과정"
      />
      <Icon
        src="/asset/images/banner/location.png"
        href="/"
        title="오시는 길"
        alt="오시는 길"
      />
      <Icon
        src="/asset/images/banner/cart.png"
        href="/"
        title="주문하기"
        alt="주문하기"
      />
    </NavContainer>
  );
};
export default Nav;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  width: 100vw;
  height: 100px;
  margin-top: 50px;
  @media all and (max-width: 769px) {
    display: none;
  }
`;
