import { createGlobalStyle } from "styled-components";
import background from "../assets/body.jpg";

export default createGlobalStyle`
 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    background: rgba(15, 104, 150, 0.13);
  }
  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
  
 `;
