import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import main from './main.scss';

const ToDoList = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const id = uuidv4();

    const addItem = event => {
        event.preventDefault();
        setItems([
            ...items,
            {
                id: id,
                name: itemName
            }
        ]);
        setItemName('')
    };

    const ItemDisplay = () => {
        return (
            <p>You have {items.length} job(s) to do today</p>
        )
    };

    const deleteItem = () => {
        return (
            items.id = ''
        )
        console.log('delete item')
    }

    return (
        <>
            <div className='header'>
                <h1>Honey-Do</h1>
                <h3>Saturdays are for... whatever she asks you for:</h3>
            </div>
            <div className='form-container'>
            <ItemDisplay className='itemDisplay'/>
                <ul className='list'>
                {items.map(item => (
                    <li className='listItem'key={item.id} >{item.name}
                    <button onClick={deleteItem}>done</button></li>
                ))}
                </ul>
            <form className='form'>
                <label>
                    <input 
                        name='item'
                        type='text'
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}
                    />
                </label>
                <button type='button' value='button' onClick={addItem}>Add</button>
            </form>
            </div>
            
            
            
        </>
    );
}
            
            
   
    
    
    

export default ToDoList;