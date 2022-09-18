import { ButtonStyle } from "./styles";

export const Button = ({color, bgColor, children})=> 
  <ButtonStyle color={color} bgColor={bgColor}>{children}</ButtonStyle>