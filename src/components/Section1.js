import { colors, makeStyles } from "@material-ui/core";
import Button from '@mui/joy/Button';
import React from 'react'
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';  
import zIndex from "@material-ui/core/styles/zIndex";
// import Button from '@mui/material/Button';  
const useStyles = makeStyles(() => ({
  container: {
    height: "37vw",
    margin: "0vw auto",
    width: "auto",
    paddingLeft: "1px",
    paddingRight: "11vw",
    position: "relative"
  },
  phone: {
    height: "100%",
    position: "relative",
    // left : "100px"
    paddingLeft: "10vw",
    zIndex : "1"

  },
  phoneimg: {
    height: "100%",
    display: "block",
    border: "1.334vw",
    borderRadius: "1.5vw",
   
  },
  notchContainer: {
    position: "absolute",
    top: "0",
    height: "100%"
  },
  notch: {
    width: "8vw",
    height: "1.8vw",
    margin: "0px  3.5vw",
    backgroundColor: "#111",
    borderBottomLeftRadius: "1.5vw",
    borderBottomRightRadius: "1.5vw"
  },
  bg: {
    position: "absolute",
    background: "brown",
    width: "100%",
    marginRight : "90vw",
    height: "100%",
    transform : "skewX(20deg)",
    paddingTop : "10px",
    paddingBottom : "10px",
    Overflow: "hidden",
    // height : "vw",
    zIndex : "1"
    
  },

  entire: {
    position: "relative",
    display: "flex",
    // flexDirection: "",
    justifyContent: "center",
    // alignItems: "center",
    
    width: "100%",
    height: "850px",
    background: "rgb(18,46,17)",
    
  },

  
  info: {
    zIndex: "4",
    color: "white",
    paddingLeft: "15vw",
    paddingRight: "15vw",
    fontSize: "20px",
  },
  total: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    

    background: "cyan",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "20px",
    cursor: "pointer",
    transform: "color 1s ease-in-out, background 3s ease-in-out",
    "&:hover": {
      background: "white",
      color: "rgb(18,46,17)",
      
    }

  },

  "@media (max-width: 1400px)": {
    phoneimg: {
      height: "43vw",
  }
  },
  "@media (max-width: 934px)": {
    entire: {
     
      
      height: "1100px",
    },
    total: {
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent:"flex-end",
    },
    phoneimg: {
      height: "70vw",
    },
    phone: {
      paddingTop: "10vw",
    },
    info: {
      paddingTop: "473px",
    },
    bg: {
      marginRight : "37vw",
    }
  }
}));




function Section() {
  const { container, phone, notchContainer, notch, phoneimg, bg, info, total, entire,button } = useStyles()


  return (
    <div className={entire}>
      <div className={bg}></div>

      <div className={total}>
        <div className={info}>
          Chat with GPT-3.5, also known as chatGPT, directly on Whatsapp. Just like texting your friends, you can now get help from a powerful AI on a range of topics, from wound care to cooking to philosophy. Simply message the bot and get instant access to God-level advice!
          <br />
          <br />
          <div>
            Single user plan at $6/mo.
          </div>
          <br />

          <div>
            <button className={button}>
              <Link to="/GetStarted" style={{textDecoration: "none"}}>
                Get Started
              </Link>
            </button>
          </div>
        </div>
        <div className={container}>

          <div className={phone}>
            
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1543663/cp-iphonex-1125x2436.png" alt="" className={phoneimg} />
          </div>
        </div>

      </div>

    </div>


  )
}

export default Section