import styled from "styled-components";
import Link from "next/link";
import Icon from "../Icon/Icon";
import ContentsImg from "./ContentsImg";
const Contents = () => {
  return (
    <ContentsContainer>
      <Wrapper>
        <Title>왜 청송 사과인가요?</Title>
        <ContentsWrapper>
          <ContentsImg src="/asset/images/farm/farm.jpeg" />
          <P>
            우리나라에서 사과로 유명한 지역은 <br></br>
            청송, 충주, 의성, 안동, 영주 등이 있어요!<br></br>그 중 저희 한아름
            농장이 위치해 있는 <strong>청송</strong>이 가장 사과 맛이 좋아요.
            <br></br>
            청송은 전체 면적의 82%가 산간지역으로 이루어져있어요. <br></br>이
            말은 깨끗한 물과 맑은 공기가 많은 지역이라는 것이죠. <br></br>
            <strong>그리고 중요한 점!</strong> <br></br>
            청송은 산간지역으로 해발 250m 이상에 위치해 있어 <br></br>
            서늘하고 일교차가 큰 환경으로<br></br>
            사과를 재배하기 최적의 장소라고 할 수 있어요.
          </P>
        </ContentsWrapper>
        <Title>왜 청송 사과인가요?</Title>
        <ContentsWrapper>
          <ContentsImg src="/asset/images/farm/farm.jpeg" />
          <P>
            우리나라에서 사과로 유명한 지역은 <br></br>
            청송, 충주, 의성, 안동, 영주 등이 있어요!<br></br>그 중 저희 한아름
            농장이 위치해 있는 <strong>청송</strong>이 가장 사과 맛이 좋아요.
            <br></br>
            청송은 전체 면적의 82%가 산간지역으로 이루어져있어요. <br></br>이
            말은 깨끗한 물과 맑은 공기가 많은 지역이라는 것이죠. <br></br>
            <strong>그리고 중요한 점!</strong> <br></br>
            청송은 산간지역으로 해발 250m 이상에 위치해 있어 <br></br>
            서늘하고 일교차가 큰 환경으로<br></br>
            사과를 재배하기 최적의 장소라고 할 수 있어요.
          </P>
        </ContentsWrapper>
        <Title>왜 청송 사과인가요?</Title>
        <ContentsWrapper>
          <ContentsImg src="/asset/images/farm/farm.jpeg" />
          <P>
            우리나라에서 사과로 유명한 지역은 <br></br>
            청송, 충주, 의성, 안동, 영주 등이 있어요!<br></br>그 중 저희 한아름
            농장이 위치해 있는 <strong>청송</strong>이 가장 사과 맛이 좋아요.
            <br></br>
            청송은 전체 면적의 82%가 산간지역으로 이루어져있어요. <br></br>이
            말은 깨끗한 물과 맑은 공기가 많은 지역이라는 것이죠. <br></br>
            <strong>그리고 중요한 점!</strong> <br></br>
            청송은 산간지역으로 해발 250m 이상에 위치해 있어 <br></br>
            서늘하고 일교차가 큰 환경으로<br></br>
            사과를 재배하기 최적의 장소라고 할 수 있어요.
          </P>
        </ContentsWrapper>
      </Wrapper>
    </ContentsContainer>
  );
};
export default Contents;
const ContentsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  width: 100vw;
  margin-top: 50px;
`;
const Wrapper = styled.article`
  box-sizing: border-box;
  width: 1000px;
  padding: 30px;
`;
const Title = styled.p`
  margin-bottom: 20px;
  text-align: left;
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    background-color: #fecdc0;
    width: 20px;
    height: 26px;
    margin-right: 10px;
    z-index: 10;
  }
`;
const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;
const P = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  strong {
    color: red;
    font-weight: 700;
    font-size: 18px;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;
