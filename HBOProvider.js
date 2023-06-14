import React, {useContext, useState, } from 'react'
export const StateContext = React.createContext()

export function useStateContext(){
    return useContext(StateContext)
}

export default function HBOProvider({children}){
    const userImage = "https://randomuser.me/api/portraits/men/63.jpg"
    const [user, setUser] = useState('')

    function createUser(e){
        setUser(e.target.value)
        console.log(user)
    }

    return (
        <StateContext.Provider value = {{
            test : "test",
            user,
            userImage,
            setUser,
            createUser
        }}>
            {children}
        </StateContext.Provider>
    )
}