import { Body, Figure, Main, Section } from "./AppStyle";
import { Button } from "./components/Button";
import Header from "./components/Header";
import imgMain from "./assets/images/imgMain.png";
import {FaPlay} from "react-icons/fa"
import Banner from "./components/Banner";
import Content from "./components/Content";

const App = ()=>{
  return(
    <Body>
      <Header/>
      <Main>
        <Section>
          <div className="content">
            <h2>Design Is A</h2> 
            <h2>Formal Response To</h2> 
            <h2>A Strategic Question</h2>
          </div>
          <div className="btn-group">
            <Button>Get Started</Button>
            <Button color="purple" bgColor="white">
              <FaPlay/>
              <span>Watch video</span>
            </Button>
          </div>
        </Section>
        <Figure>
          <img src={imgMain} alt="imagem principal" />
        </Figure>
      </Main>
      <Banner/>
      <Content/>
    </Body>
  )
}

export default App;