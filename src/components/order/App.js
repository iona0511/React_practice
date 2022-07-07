import React from "react";
import Filterbutton from "./filterButton";
import Slideshow from "./slideshow";

const App =()=>{
    return(
        <div>
            <Slideshow/>
            <div style={{display:'flex'}}>
                <Filterbutton names="全部餐點"/>
                <Filterbutton names="飲品系列"/>
                <Filterbutton names="餐點系列"/>
            </div>  
            <h3>全部餐點</h3>        
        </div>
      
    )
}

export default App;