'use client'
import { useUser } from "@/context/UserContext";
import { Button, ButtonGroup } from "@mui/material";

export default function Navbar({children}){
    const {currentUser} = useUser()
    return(
        <>
        <ButtonGroup size='medium' variant='contained'>
            <Button href="/">Home</Button>
            <Button href="/about">About</Button>
            {currentUser ? <Button href="#">Log Out</Button> : <Button href="/login">Log In</Button>}
        </ButtonGroup>
        {children}
        </>
    )
}