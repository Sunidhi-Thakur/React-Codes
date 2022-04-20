import React, { useState } from 'react';
import './index.css';
import logo from './logo.svg';

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([])

  const addItem = () => {
    if (!newItem) {
      alert("Enter a task...");
      return;
    }

    const item = {
      key: Math.floor(Math.random() * 1000),
      value: newItem,
    }
    setItems(oldList => [...oldList, item]);
    setNewItem('');
  }

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.key !== id);
    setItems(newArray);
  }

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      addItem();
    }
  }

  return (
    <div className='flex flex-col justify-center items-center w-full lg:w-3/6 m-auto rounded-3xl lg:mt-52 p-10'>
      <img
        className='rounded-full w-20 h-20 mt-12 mb-8'
        src={logo}
        alt='logo'
      />
      <h1 className='text-3xl capitalize font-semibold mb-3 p-3 text-[#277BA5]'>My ToDo List</h1>
      <div className='flex justify-center items-center w-4/5'>
        <input
          type='text'
          value={newItem}
          placeholder='Enter task....'
          className='outline-none p-3 rounded-xl w-full'
          onChange={e => setNewItem(e.target.value)}
          onKeyDown={handleKey}
        />
        <button onClick={() => addItem()}
          className='pb-1 pt-0 px-3 rounded-xl m-3 text-white font-bold bg-[#277BA5] text-4xl'>+</button>
      </div>

      <ul className='w-full'>
        {items.map(item => {
          return (
            <div className='flex justify-center items-center w-full'>
              <li key={item.key} onClick={() => deleteItem(item.key)} className='w-3/6 bg-white rounded-lg p-2 text-[#277BA5] font-semibold text-lg hover:line-through hover:decoration-red-600 hover:decoration-4' >{item.value}</li>
              <button
                onClick={() => deleteItem(item.key)}
                className='pb-1 pt-0 px-3 rounded-xl m-3 text-white bg-[#F06174] text-lg font-semibold '
              >x</button>
            </div>

          )
        })}

      </ul>

    </div>
  )
}

export default App