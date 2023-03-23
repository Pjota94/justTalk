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
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
  
 `;
