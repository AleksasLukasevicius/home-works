import "./Hero.css";

const Hero = (props: any) => {
  return (
    <div className={props.color}>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </div>
  );
};

export default Hero;
