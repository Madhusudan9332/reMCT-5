import MyContext from "./MyContext";
import { useState } from "react";


function MyState(props){
    const [mode,setMode] = useState("light");
    
    const toggleMode = ()=>{
        if(mode === "light"){
            setMode("dark");
            document.body.style.backgroundColor = "grey";
        }
        else{
            setMode("light");
            document.body.style.backgroundColor = "white"; 
        }
    }

    return(
        <MyContext.Provider value={{mode,toggleMode}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState;

