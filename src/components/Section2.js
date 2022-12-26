import React from 'react'
import { Typography, makeStyles, Button, } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    section2: {
        display: "flex",
        flexDirection: "column",
        // paddingTop: "4",
        justifyContent: "center",
        alignItems: "center",
        height : "850px",
        backgroundColor: "red",
    },
    channelog: {
        fontSize: "2em",
        lineHeight: "1.5",
        fontWeight: "900",
        letterSpacing: "0em",
        textTransform: "uppercase",
        backgroundClip: "text",
        // color: "white",
    },
    cinfo: {
        marginTop : "2vw",
        fontSize: "1em",
        lineHeight: "1.5",
        fontWeight: "900",
        letterSpacing: "0em",
        width: "550px",
        backgroundColor: "blue",
        padding: "50px",
        paddingLeft: "100px",
        paddingRight: "100px",
        // borderRadius: "10px",
        borderBottomLeftRadius: "50%",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "10%",
        borderTopLeftRadius: "10%",
    },
    insideinfo: {
        paddingTop: "10%",
        paddingBottom: "10%",
        fontSize: "1.2em",
    },
    "@media (max-width: 634px)":{
        cinfo: {
            width: "350px",
            padding: "30px",
            borderBottomLeftRadius: "1px",
            borderTopRightRadius: "1px",
            borderBottomRightRadius: "1px",
            borderTopLeftRadius: "1px",
           

        }
    }
}));

export default function () {
    const { section2, channelog, cinfo, insideinfo } = useStyles();
    return (
        <div>
            <div className={section2}>
                <div className={channelog}>
                    Changelog
                </div>
                <div className={cinfo}>
                    
                    <div className={insideinfo}>
                        v0.62 Conversation context thread auto-reset after 10min+ elapsed time without conversation

                    </div >
                    <div  className={insideinfo}>
                        v0.61 Switched to OpenAI davinci003 model API + ChatGPT context mode to ensure authentication safety
                    </div>
                    <div  className={insideinfo}>
                        v0.6 Chromium headless browser now scales properly with individual accounts system

                    </div>
                </div>
            </div>
        </div>
    )
}
