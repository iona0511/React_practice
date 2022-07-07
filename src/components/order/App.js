import React,{useState} from "react";
import Filterbutton from "./filterButton";
import Slideshow from "./slideshow";
import Card from "./Card";


const App =()=>{
    return(
        <div>
            <Slideshow/>
            <div style={{margin:'0 250px'}}>
                <div style={{display:'flex'}}>
                    <Filterbutton names="全部餐點"/>
                    <Filterbutton names="飲品系列"/>
                    <Filterbutton names="餐點系列"/>
                </div>  
                <h3>全部餐點</h3>    
                
                <div style={{display:'flex'}}>
                    <Card/><Card/><Card/>
                </div>  

 
            </div>
        </div>
      
    )
}

export default App;