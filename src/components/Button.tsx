interface IProps {
  type: "primary" | "secondary";
  text: string;
  link?: string;
}

const Button = ({ type, text, link }: IProps) => {
  if (link) {
    return (
      <a href={link} className={`button button--${type}`}>
        <span className="button__text-wrapper">
          <span className="button__text" data-text={text}>
            {text}
          </span>
        </span>
      </a>
    );
  }
  return (
    <button className={`button button--${type}`}>
      <span className="button__text-wrapper">
        <span className="button__text" data-text={text}>
          {text}
        </span>
      </span>
    </button>
  );
};

export default Button;
