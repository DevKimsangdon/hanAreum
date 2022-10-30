import styled from "styled-components";
import Link from "next/link";
const Icon = (props) => {
  return (
    <Link href={props.href}>
      <IconImg src={props.src} alt={props.alt}></IconImg>
      <IconTitle>{props.title}</IconTitle>
    </Link>
  );
};
export default Icon;
const IconImg = styled.img`
  width: 100px;
  height: 100px;
`;

const IconTitle = styled.p`
  font-family: "GmarketSans";
  color: #ecbcbd;
  font-size: 16px;
  text-align: center;
`;
