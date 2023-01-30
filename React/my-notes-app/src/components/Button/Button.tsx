import "./Button.css";

const Button = (props: any) => {
  return (
    <div className="button-wrapper">
      <button type="reset" className="Button">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
