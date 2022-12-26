import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Header from '../components/Header';


export default function GetStarted() {
  return (
    <>
    <Header />
    <CssVarsProvider >
      <main style={{paddingTop: "200px",backgroundColor:"#272932",paddingBottom:"362px"}}>
      
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">please enter your phone number.</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="9900990099"
            // pass down to FormLabel as children
            label="Phone Number"
          />
          
          <Button sx={{ mt: 1 /* margin top */ }}>Join</Button>
          
        </Sheet>
      </main>
    </CssVarsProvider>
    </>
  );
}
