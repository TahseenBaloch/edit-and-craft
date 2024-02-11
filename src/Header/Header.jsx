import bgvideo from "../assets/emilia_compressed.mp4";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <h1>Background Remover</h1>
          <h2>Erase image backgrounds for free</h2>
          <div className="bg-video">
            <video src={bgvideo} autoPlay muted></video>
          </div>
          <a href="./bg-remover">Remove Background</a>
        </div>
      </header>
      <section className="tools-section">
        <div className="tools">
          <h1>more tools are coming soon....</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Header;
