
import { useState,useEffect } from "react";


const useScroll = (threshold=10)=>{

    const [isScroll,setIsScroll] = useState<boolean>(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window && window.scrollY > threshold){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }

        }

        window.addEventListener("scroll",handleScroll);

        return window.removeEventListener("scroll",handleScroll);

    },[threshold])

    return isScroll;

}

export default useScroll;