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
     colorOne: '',
     colorTwo: 'linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174,1)71%)',
     colorThree: '',
     colorFour: '',
     colorFive: '',
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