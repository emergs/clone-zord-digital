import logoGoogle from "../../assets/images/logo-google.png";
import logoAirbnb from "../../assets/images/logo-airbnb.jpg";
import logoStripe from "../../assets/images/logo-stripe.png";
import logoUber from "../../assets/images/logo-uber.png";
import logoSlack from "../../assets/images/logo-slack.png";

const Banner = ()=>{
  return(
    <ul>
      <li><img src={logoGoogle} alt="logo" /></li>
      <li><img src={logoAirbnb} alt="logo" /></li>
      <li><img src={logoStripe} alt="logo" /></li>
      <li><img src={logoUber} alt="logo" /></li>
      <li><img src={logoSlack} alt="logo" /></li>
    </ul>
  )
}
export default Banner;