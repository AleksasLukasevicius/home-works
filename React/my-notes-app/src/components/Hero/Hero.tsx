import "./Hero.css";

const Hero = (props: any) => {
  return (
    <div className={props.color}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Hero;
