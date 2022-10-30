import styled from "styled-components";
const ContentsImg = (props) => {
  return <ContentsImgs src={props.src} alt={props.alt}></ContentsImgs>;
};
export default ContentsImg;
const ContentsImgs = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 10px;
`;
