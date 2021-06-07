import React from 'react';
import './DisplayList.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

 function DisplayList(props) {
     const items =props.items;
     const listItems = items.map(item =>{
         return <div className="displaystyle" key="item.key">
             <p>
                 <input type="text" 
                 id={item.text}
                 value={item.text}
                 onChange={(e)=>{
                     props.makeUpdate(e.target.value, item.key);
                 }} />
             <span>
                 <FontAwesomeIcon className="trashicon" icon="trash" onClick={()=>{props.dltTodo(item.key)}}/>
             </span>
             </p>
         </div>

     })
    return(
        <div>
            <FlipMove duration={400} easing="ease-in-out">
            {listItems}
            </FlipMove>
        </div>
    );
}
export default DisplayList;