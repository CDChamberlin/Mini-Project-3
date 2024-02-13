'use client'

import { useUser } from "@/context/UserContext";

export default function Settings(){
    const user = useUser()
    console.log(`Setting ${currentUser}`)

    return(
        <h2>{`Welcome`}</h2>

    )
}