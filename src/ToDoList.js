import React, { useState } from 'react';

const toDoList = [{
    id: 1,
    description: 'walk the dog'
},
{
    id: 2,
    description: 'cook dinner'
}
];

const toDoItem = toDoList.map((item) => {
    return <p>{item}</p>
})

const ToDoList = () => {
    return (
        <div>
            <h1>You have {toDoList.length} things to do</h1>
            {toDoList.map((item) => {
                const {id, description} = item;
                return <p key={id}>{description}</p>
            })}
            
        </div>
    )
};
            
            
   
    
    
    

export default ToDoList;