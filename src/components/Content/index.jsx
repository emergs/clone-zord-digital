import CardInfo from "../CardInfo";
import { CardsGroup, ContentStyle, DivParagraph, DivTitle } from "./style";
import { infoCards } from "../../data/infoCards"

const Content = ()=>{
  return(
    <ContentStyle>
      <div>
        <DivTitle>
          <span>what we do</span>
          <h2>We'r the engineer of you website</h2>
        </DivTitle>
        <DivParagraph>
          <p>it is time for a change. Our design team will help you plan and implement a full system redesign for better usability and scalability</p>
        </DivParagraph>
      </div>
      <CardsGroup>
        {
          infoCards.map((elem)=>{
            return <CardInfo 
              img={elem.img} 
              title={elem.title} 
              content={elem.content} 
              link={elem.link}
            />
          })
        }
      </CardsGroup>
    </ContentStyle>
  )
}

export default Content;