import { CardStyle } from "./style";

const CardInfo = ({img,title,content,link})=>{
  return(
    <CardStyle>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <a href={link}>view more</a>
    </CardStyle>
  )
}

export default CardInfo;