import Contents from "../component/contents/Contents";
import Footer from "../component/Footer/Footer";
import Banner from "../component/Header/Banner";
import Header from "../component/Header/Header";
import Nav from "../component/Nav/Nav";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Nav></Nav>
      <Contents></Contents>
      <Footer></Footer>
    </>
  );
}
