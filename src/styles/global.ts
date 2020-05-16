import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0
}

body{
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font: 16px Roboto, sans-serif;
}

#root{
  max-width: 850px;
  width:100%;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #C4C4C4;
  border-radius: 0 0 10px 10px
}

button{
  cursor: pointer;
}
`;
