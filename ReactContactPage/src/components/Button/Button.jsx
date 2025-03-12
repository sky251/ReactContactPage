import styles from "./Button.module.css";

export const Button = (props) => {
  const { isOutline, icon, text, ...rest } = props;
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};
