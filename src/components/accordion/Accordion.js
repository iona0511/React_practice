import React, {useState} from 'react';

const Accordion = ({ items }) => {
  // const things = useState(null);
  // const activeIndex = things[0];
  // const setActiveIndex = things[1];
  const [activeIndex, setActiveIndex] = useState(null);
  // activeIndex=piece of state     
  // setActiveIndex = function to change this piece of state
  // null=initial value for this piece of state 

  const onTitleClick = (index) => {
      setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {

    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}
    <h1>{activeIndex}</h1>
  </div>;
};

export default Accordion;
