import React, { useState } from 'react';

// const toDoList = [
//     {
//     id: 1,
//     description: 'walk the dog'
// },
// {
//     id: 2,
//     description: 'cook dinner'
// },
// {
//     id: 3,
//     description: 'clean the floors'
// },
// {
//     id: 4,
//     description: 'cut the grass'
// }
// ];


// const headerDisplay = () => {
//     if(toDoList.length > 1){
//         return <p>You have {toDoList.length} things to do today</p>
//     } else if(toDoList.length = 1) {
//         return <p>You have {toDoList.length} thing to do today</p>
//     } else if(toDoList.length = 0) {
//         return <p>You have nothing to do today!</p>
//     }
// };

// const listItem = toDoList.map((item) => {
//     const {id, description} = item;
//     return <li key={id}><a>{item.description}</a></li>
// });




const ToDoList = () => {
    const [id, value] = useState('')
    const [addItem, setAddItem] = useState('');
    const [list, setList] = useState([]);
    const addListItem = (e) => {
        e.preventDefault();
        if(addItem.length > 0){
            const item = [ id, value ] 
            setList((item) => {
                return [...list, addItem];
            })
            console.log(item);
            setAddItem('');
        } else {
            alert('Please add a task')
        }
    }

    return (
        <div>
            <h1>Honey Do</h1>
            <h4>You may think you can just relax today, but you have {list.length} things to do...</h4>
            <h5>Better get started!</h5>
            {
                list.map((item) => {
                    return (
                        <div>
                        <p>{item}</p>
                        </div>
                    )
                })
            }
            <p>Oh, don't forget...</p>
            <label>Add a task : </label>
            <input type='text' value={addItem} onChange={(e) => setAddItem(e.target.value)}></input>
            <button type='submit' onClick={addListItem}>Add</button>
            
        </div>
    )
};
            
            
   
    
    
    

export default ToDoList;