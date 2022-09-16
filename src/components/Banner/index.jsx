import logoGoogle from "../../assets/images/logo-google.png";
import logoAirbnb from "../../assets/images/logo-airbnb.jpg";
import logoStripe from "../../assets/images/logo-stripe.png";
import logoUber from "../../assets/images/logo-uber.png";
import logoSlack from "../../assets/images/logo-slack.png";
import { List } from "./style";

const Banner = ()=>{
  return(
    <List>
      <li><a href="#"><img src={logoGoogle} alt="logo" /></a></li>
      <li><a href="#"><img src={logoAirbnb} alt="logo" /></a></li>
      <li><a href="#"><img src={logoStripe} alt="logo" /></a></li>
      <li><a href="#"><img src={logoUber} alt="logo" /></a></li>
      <li><a href="#"><img src={logoSlack} alt="logo" /></a></li>
    </List>
  )
}
export default Banner;