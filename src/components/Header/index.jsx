import { DivHeader, DivLogo, NavBar } from "./header";
import imgLogo from "../../assets/images/logo.svg";
import { Button } from "../Button";

const Header = ()=>{
  return(
    <DivHeader>
      <DivLogo>
        <img src={imgLogo} alt="logo" />
      </DivLogo>
      <NavBar>
        <ul>
          <li>Agengy</li>
          <li>Portfólio</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </NavBar>
      <Button>Sing Up</Button>
    </DivHeader>
  )
}

export default Header;