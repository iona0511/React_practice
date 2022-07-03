import React,{useState} from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label:"the color is blue",
    value: "blue"
  },
  {
    label:"the color is pink",
    value: "pink"
  },
  {
    label:"the color is red",
    value: "red"
  }
]

const App = () => {

  const[selected,setSelected] = useState(options[0]);
  const[showDropdown,setShowDropdown]=useState(true);

  return (
    <div>
        <button
          onClick={()=>{setShowDropdown(!showDropdown)}}
        >toggle dropdown</button>

      {showDropdown ?<Dropdown 
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
      />: null}
    </div>
  );
}; 



export default App;
