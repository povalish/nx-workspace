import { IButton } from "./Button.interface";

//
//

export const Button: React.FC<IButton> = ({ children, onPress }) => (
  <button type='button' onClick={onPress}>{children}</button>
)