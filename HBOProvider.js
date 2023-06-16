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

    const circleColors = {
     colorOne: 'linear-gradient(312deg,rgba(26,39,103)0%,rgba(48,20,94,1)45%,rgba(0,0,0,1)100%)',
     colorTwo: 'linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174,1)71%)',
     colorThree: 'linear-gradient(135deg,rgba(195,139,34,1)2%,rgba(15,33,181,1)71%)',
     colorFour: 'linear-gradient(135deg,rgba(40,195,34,1)27%,rgba(104,15,181,1)71%)',
     colorFive: 'linear-gradient(135deg,rgba(55,34,195,1)27%,rgba(181,15,74,1)71%)',
    }

function setBackground(e){
// console.log()

// console.log(e.target.closest('.create-user__colors').children)

}


    return (
        <StateContext.Provider value = {{
            test : "test",
            user,
            userImage,
            setUser,
            createUser,
            circleColors,
            setBackground
        }}>
            {children}
        </StateContext.Provider>
    )
}