import { Typography, makeStyles, Button, } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
import { height } from "@mui/system";
import React from 'react'
import Section1 from "./Section1";
import Section2 from "./Section2";
// import styled from 'styled-components'

const useStyles = makeStyles(() => ({
    heading: {
        paddingTop: "10vw",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex : "5",
        height : "100vh",

    },
    Title: {
        fontSize: "4vw",
        lineHeight: "1.5",
        fontWeight: "900",
        letterSpacing: "0em",
        textTransform: "uppercase",
        backgroundClip: "text",

    },
    mainpg: {
            // backgroundColor: "brown"
    }
}));



function Home() {
    const { heading, Title, mainpg } = useStyles();
    return (
        <>
        <div className={heading}>
            <div >
                <img src="https://godinabox.co/images/god1-p-500.png" alt="" style={{width: "25vw"}} />
            </div>
            <Typography className={Title}>
                <h1 >
                    ChatBot
                </h1>
            </Typography>
            
        </div>
        <Section1 />
        <Section2 />
        
        </>
    )
}

export default Home

