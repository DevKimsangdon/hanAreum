import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <NotFoundCont>
      <Image
        src="/asset/images/apple/character.png"
        alt="404 캐릭터"
        width={400}
        height={400}
      ></Image>
      <Title>404 Not Found</Title>
      <P>페이지를 찾을 수 없습니다</P>
      <Link href="/">
        <P>홈페이지로 돌아가기</P>
      </Link>
    </NotFoundCont>
  );
};
export default NotFound;
const NotFoundCont = styled.section`
  width: 100vw;
  height: 100vh;
`;
const Title = styled.h1``;
const P = styled.p``;
