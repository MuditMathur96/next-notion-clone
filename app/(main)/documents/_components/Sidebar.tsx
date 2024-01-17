"use client"
import React, {  useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import {ChevronsLeft,ChevronsRight,Menu} from 'lucide-react';

type Props = {}

function Sidebar({}: Props) {

  const sideBarRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width:768px)');
  const [isCollapsed,setIsCollapsed] = useState<boolean>(false);

  useEffect(()=>{
    if(isMobile){
      sideBarRef.current?.style.setProperty("width",null)
      setIsCollapsed(true)
    }else{
      setIsCollapsed(false)
    }


  },[isMobile]);

  const handleMouseDown = useCallback((e:any)=>{
      e.preventDefault();
      e.stopPropagation();
      window.addEventListener("mousemove",handleMouseMove);
      window.addEventListener("mouseup",handleMouseUp);

  },[])
  const handleMouseMove = useCallback((e:MouseEvent)=>{
    let width = e.clientX;
    //console.log(width);

    if(width<240) width=240;
    if(width>400) width=400;

    if(sideBarRef){
      sideBarRef.current?.style.setProperty("width",`${width}px`)
      
    }



},[])
const handleMouseUp = useCallback(()=>{
  window.removeEventListener("mousemove",handleMouseMove);
  window.removeEventListener("mouseup",handleMouseUp);



},[])


  return (
    <aside
    ref={sideBarRef}
    className={`h-full bg-neutral-100 transition-[width]
            ${isCollapsed?"w-[0px] duration-300":"w-[240px] duration-300 p-2"} 
            ${isMobile?
              isCollapsed?"fixed w-[50px] duration-300":
              "fixed z-[99] w-screen duration-300":"relative"}
            group/sidebar`}
    
    >
      
      <div className={`${isCollapsed?"hidden":""}`}>
        Sidebar
      </div>
      
      
      
      <div 
      onClick={()=>{
        sideBarRef.current?.style.setProperty("width",null)
        setIsCollapsed(!isCollapsed)}}
      className='opacity-0 group-hover/sidebar:opacity-100
                  absolute top-2 right-0 z-[99] '>
        {isCollapsed?<ChevronsRight />:<ChevronsLeft />}

      </div>
     {isCollapsed && <div 
     onClick={()=>{
      sideBarRef.current?.style.setProperty("width",null)
      setIsCollapsed(!isCollapsed)}}
     className='p-2' role="button">
        <Menu />
      </div>}
      {!isCollapsed && <div 
      onMouseDown={handleMouseDown}
      className='opacity-0 group-hover/sidebar:opacity-100 
                    absolute top-2 right-0 w-[4px] h-full
                    bg-neutral-200 cursor-ew-resize z-[99]
                    ' />}
      
    </aside>
  )
}

export default Sidebar