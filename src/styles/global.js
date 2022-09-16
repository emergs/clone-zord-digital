import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: Montserrat;
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap');
}

@font-face {
  font-family: CodePro ;
  src: url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;400;600&display=swap');
}


:root{
  --black:rgb(35, 34, 39);
  --white:rgb(255,255,255);
  --purple:rgb(132, 124, 251);
  --purple-clear:rgb(242, 238, 254);
  --orange:rgb(252, 136, 58);
  --orange-clear:rgb(255, 236, 219);
  --green:rgb(90, 213, 130);
  --green-clear:rgb(227, 249, 236); 
  --yellow:rgb(255, 189, 60);
  --yellow-clear:rgb(255, 245, 218);  
}

*{
  margin:0;
  padding: 0;
  list-style: none;
}

body{
  width: 100vw;
  height: 100vh;
  font-family: 'CodePro', sans-serif;
}

`
export default GlobalStyles;