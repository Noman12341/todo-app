import react, { useState } from 'react';
import './App.css';
import { FaCrosshairs, FaSpinner } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { addItemInList, removeItemInList, updateItemInList } from './reducer/todo-reducer'


function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo.todoItems)
  const [inputField, setInputField] = useState("");
  const [updateItem, setUpdateItem] = useState({ newItem: "", index: null })

  const handleAddItemInList = () => {
    if (inputField) {
      dispatch(addItemInList(inputField));
      setInputField("");
    }
    if (updateItem.newItem) {
      setUpdateItem({ newItem: "", index: null })
    }
  }
  const handleUpdateItem = () => {
    dispatch(updateItemInList({ item: updateItem.newItem, index: updateItem.index }));
    setUpdateItem({ newItem: "", index: null });
  }
  return (
    <div className="App">
      <div className="todo-container">
        <div className="todo-header">
          <h2>Todo List</h2>
        </div>
        <div className="todo-list-box">
          <input type="text" placeholder='Type text here' className="input-item" value={inputField} onChange={event => setInputField(event.target.value)} />
          {/* loop over */}
          {todoList.length > 0 ? (
            todoList.map((item, index) => (
              <div className="todo-info-box" key={index}>
                <div className='info-box'>
                  <label>{item}</label>
                </div>
                <span>
                  <button type='button' className='icon-btn' onClick={() => setUpdateItem({ newItem: item, index })}><FaSpinner /></button>
                  <button type='button' className='icon-btn' onClick={() => dispatch(removeItemInList(index))}><FaCrosshairs /></button>
                </span>
              </div>
            ))
          ) : (
            <h4>No Item is present in the list</h4>
          )}
          <button className='add-btn' onClick={handleAddItemInList}>Add new item</button>
        </div>
        {updateItem.newItem && (
          <div>
            <input type="text" placeholder='Type text here' className="input-item" value={updateItem.newItem} onChange={(e) => setUpdateItem({ ...updateItem, newItem: e.target.value })} />
            <button onClick={handleUpdateItem}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
