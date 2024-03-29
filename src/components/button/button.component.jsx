import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

/*
default, google, inverted
*/
export const BUTTON_TYPE_CLASSES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
//   [BUTTON_TYPE_CLASSES.base]: BaseButton,
//   [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//   [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
// }[buttonType])

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => buttonType
export const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton{...otherProps}>{children}</CustomButton>
  );
};

export default Button;
