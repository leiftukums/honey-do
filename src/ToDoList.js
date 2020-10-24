import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
    const [id = uuidv4(), value] = useState('')
    const [addItem, setAddItem] = useState('');
    const [list, setList] = useState([]);
    const addListItem = (e) => {
        e.preventDefault();
        if(addItem.length > 0){
            const item = [ id, value ] 
            setList((item) => {
                return [...list, addItem];
            })
            console.log(addItem, ' id = ' ,uuidv4());
            setAddItem('');
        } else {
            alert('Please add a task')
        }
    };

    return (
        <div>
            <h1>Honey Do</h1>
            <h4>You may think you can just relax today, but you have {list.length} things to do...</h4>
            <h4>Better get started!</h4>
            <ul>
            {
                    list.map((item) => {
                        return (
                            <ul key={uuidv4()}>
                                <li>{item}</li>
                            </ul>
                        )
                    })
                }
            </ul>
                
            <p>Oh, don't forget...</p>
            <p></p>
            <label>Add a task : </label>
            <input type='text' value={addItem} onChange={(e) => setAddItem(e.target.value)}></input>
            <button type='submit' onClick={addListItem}>Add</button>
            
        </div>
    )
};
            
            
   
    
    
    

export default ToDoList;