import "../styles.css";
const movie='/hero.jpg'
const Hero = () => {
  return (
    <>
      <div className="hero">
        <img
          data-aos-delay="500"
          data-aos-easing="ease-in-sine"
          data-aos="zoom in"
          src={movie}
          alt="movies"
        />
        <h3 className="text-[50px] text-bold" data-aos="fade-up">Welcome to movie dive<p>Scroll down for more</p></h3>
      </div>
    </>
  );
};
export default Hero;
