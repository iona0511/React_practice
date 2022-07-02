import React,{useState} from "react";
                    // 這裡的selected & onSelectedChange 是App.js的參數
const Dropdown = ({options,selected,onSelectedChange})=>{
    const[open,setOpen]=useState(false);
    const renderedOptions = options.map((option)=>{
        if(option.value===selected.value){
            // return null 代表不render
            return null
        }
        return (
            <div key={option.value} 
            className="item"
            onClick={()=>{onSelectedChange(option)}}
            >{option.label}</div>
        );
    });


    return(
    <div className="ui form">
        <div className="field">
            <label className="label">select a color</label>
            <div onClick={()=>setOpen(!open)} 
            className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open?'visible transition':''}`}>{renderedOptions}</div>
            </div>
        </div>
    </div>
    )

};

export default Dropdown;
