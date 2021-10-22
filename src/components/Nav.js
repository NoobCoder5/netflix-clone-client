import React,{useState,useEffect} from 'react'

const Nav = () => {
   
   const [show, setshow] = useState(false)
     useEffect(() => {
         window.addEventListener("scroll",function(){
             const scroll = Math.floor(window.scrollY)
           if(scroll > 300){
               setshow(true)
           }
           else{
               setshow(false)
           }
         })
         return () => {
             window.removeEventListener("scroll",null)
         }
     }, [])
    return (
        <>
            <div className={`nav ${show && "black"}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            </div>
        </>
    )
}

export default Nav
