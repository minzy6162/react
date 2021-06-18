import { useState } from "react";
import ReactDOM from "react-dom";

function useTimer(initialTime =10){
    const[time, setTime] = useState(initialTime)
    const id = useRef(null)

    let resume = (){
        id.current = setInterval(()=>{
            setTime(time => time - 1)
        }, 1000)
    }
    let pause = () => {
        clearInterval(id.current)
    }
    if(time === 0){
        pause()
        resume = () => {}
        pause = () => {}
    }
}