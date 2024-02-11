import Navbar from "../Navbar/Navbar";
import image_about from "../assets/image-about.jpg";
Navbar;
const About = () => {
  return (
    <div className="about-container">
      <Navbar logo={"about"} />
      <div className="about-img">
        <img src={image_about} />
      </div>
      <div className="about">
        Welcome to <span>Tahseen's Image Editing Hub,</span> where creativity
        meets precision! At <a href="/">Edit & Craft</a>, we specialize in
        transforming ordinary images into extraordinary works of art. With a
        keen eye for detail and a passion for innovation, we offer a wide range
        of editing services tailored to meet your unique needs. Whether you're
        looking to enhance photographs, retouch portraits, or create stunning
        visual effects, our skilled team is dedicated to bringing your vision to
        life. From basic adjustments to complex edits, we strive for excellence
        in every project we undertake.
      </div>
    </div>
  );
};
export default About;
