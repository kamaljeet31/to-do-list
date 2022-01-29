import React, { useState } from 'react'
import './todo.css'
import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from 'react-redux'
const Todo = () => {
  const [inputData, setInputData] = useState('')
  const dispatch = useDispatch
  return (
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className='addItems'>
          <input
            type='text'
            placeholder='Add Items..'
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <i
            className='fa fa-plus add-btn'
            onClick={() => dispatch(addTodo(inputData))}
          ></i>
        </div>
      </div>
      <h1>Redux</h1>
    </div>
  )
}

export default Todo
