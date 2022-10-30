import styled from "styled-components";
import ContentsImg from "./ContentsImg";
const Contents = () => {
  return (
    <ContentsContainer>
      <Wrapper>
        <Title>왜 청송 사과인가요?</Title>
        <ContentsWrapper>
          <ContentsImg src="/asset/images/farm/farm.png" />
          <ContentTxt>
            <ContentTit>
              청송은 82%가 산으로 이루어진
              <br />
              물맑고, 공기 맑은 지역입니다.
            </ContentTit>
            <P>
              우리나라에서 사과로 유명한 지역은 <br></br>
              청송, 충주, 의성, 안동, 영주 등이 있어요!<br></br>그 중 저희
              한아름 농장이 위치해 있는 <strong>청송</strong>이 가장 사과 맛이
              좋아요.
              <br></br>
              청송은 전체 면적의 82%가 산간지역으로 이루어져있어요. <br></br>이
              말은 깨끗한 물과 맑은 공기가 많은 지역이라는 것이죠. <br></br>
              <br />
              <strong>그리고 중요한 점!</strong> <br></br>
              청송은 산간지역으로 해발 250m 이상에 위치해 있어 <br></br>
              서늘하고 일교차가 큰 환경으로<br></br>
              사과를 재배하기 최적의 장소라고 할 수 있어요.
              <br />
              <br />
              그래서 청송에서 자라 사과는 맑은 물과 공기를 먹고,
              <br />
              햇빛과 바람을 듬뿍 받고 자라서 높은 당도를 자랑하는 꿀사과로
              성장하게 됩니다.
              <br /> 이것이 바로 <strong>청송 꿀사과</strong>가 된 이유 랍니다.
            </P>
          </ContentTxt>
        </ContentsWrapper>
        <Title>왜 청송 사과인가요?</Title>
        <ContentsWrapper>
          <ContentsImg src="/asset/images/farm/farm.png" />
          <ContentTxt>
            <ContentTit>
              청송은 82%가 산으로 이루어진
              <br />
              물맑고, 공기 맑은 지역입니다.
            </ContentTit>
            <P>
              우리나라에서 사과로 유명한 지역은 <br></br>
              청송, 충주, 의성, 안동, 영주 등이 있어요!<br></br>그 중 저희
              한아름 농장이 위치해 있는 <strong>청송</strong>이 가장 사과 맛이
              좋아요.
              <br></br>
              청송은 전체 면적의 82%가 산간지역으로 이루어져있어요. <br></br>이
              말은 깨끗한 물과 맑은 공기가 많은 지역이라는 것이죠. <br></br>
              <br />
              <strong>그리고 중요한 점!</strong> <br></br>
              청송은 산간지역으로 해발 250m 이상에 위치해 있어 <br></br>
              서늘하고 일교차가 큰 환경으로<br></br>
              사과를 재배하기 최적의 장소라고 할 수 있어요.
              <br />
              <br />
              그래서 청송에서 자라 사과는 맑은 물과 공기를 먹고,
              <br />
              햇빛과 바람을 듬뿍 받고 자라서 높은 당도를 자랑하는 꿀사과로
              성장하게 됩니다.
              <br /> 이것이 바로 <strong>청송 꿀사과</strong>가 된 이유 랍니다.
            </P>
          </ContentTxt>
        </ContentsWrapper>
        <Title>왜 청송 사과인가요?</Title>
        <ContentsWrapper>
          <ContentsImg src="/asset/images/farm/farm.png" />
          <ContentTxt>
            <ContentTit>
              청송은 82%가 산으로 이루어진
              <br />
              물맑고, 공기 맑은 지역입니다.
            </ContentTit>
            <P>
              우리나라에서 사과로 유명한 지역은 <br></br>
              청송, 충주, 의성, 안동, 영주 등이 있어요!<br></br>그 중 저희
              한아름 농장이 위치해 있는 <strong>청송</strong>이 가장 사과 맛이
              좋아요.
              <br></br>
              청송은 전체 면적의 82%가 산간지역으로 이루어져있어요. <br></br>이
              말은 깨끗한 물과 맑은 공기가 많은 지역이라는 것이죠. <br></br>
              <br />
              <strong>그리고 중요한 점!</strong> <br></br>
              청송은 산간지역으로 해발 250m 이상에 위치해 있어 <br></br>
              서늘하고 일교차가 큰 환경으로<br></br>
              사과를 재배하기 최적의 장소라고 할 수 있어요.
              <br />
              <br />
              그래서 청송에서 자라 사과는 맑은 물과 공기를 먹고,
              <br />
              햇빛과 바람을 듬뿍 받고 자라서 높은 당도를 자랑하는 꿀사과로
              성장하게 됩니다.
              <br /> 이것이 바로 <strong>청송 꿀사과</strong>가 된 이유 랍니다.
            </P>
          </ContentTxt>
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
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;
  position: relative;
  font-family: "GmarketSans";
  &::before {
    content: "";
    display: inline-block;
    background-color: #fecdc0;
    width: 20px;
    height: 26px;
    margin-right: 10px;
    z-index: 10;
  }
  @media all and (max-width: 769px) {
    font-size: 20px;
    ::before {
      height: 20px;
      margin-right: 5px;
    }
  }
`;
const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  @media all and (max-width: 769px) {
    flex-direction: column;
  }
`;
const ContentTxt = styled.div`
  font-family: "GmarketSans";
  font-size: 24px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media all and (max-width: 769px) {
    align-items: start;
    margin-left: 0px;
  }
`;
const ContentTit = styled.p`
  font-family: "GmarketSans";
  line-height: 30px;
  width: 85%;
  position: relative;
  margin-left: 30px;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100px;
    height: 60px;
    top: -20px;
    left: -80px;
    background-image: url("/asset/images/apple/apple_hover.png");
    background-size: cover;
  }
  @media all and (max-width: 769px) {
    font-size: 16px;
    margin-left: 0;
    &::before {
      display: none;
    }
  }
`;
const P = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-left: 30px;
  strong {
    color: #ff6666;
    font-weight: 700;
    font-size: 20px;
    margin: 0 5px;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  @media all and (max-width: 769px) {
    margin-left: 0px;
  }
`;
