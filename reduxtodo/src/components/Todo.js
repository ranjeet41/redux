import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../Action/index';
import './Todo.css';
const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <h2>Add Your Task</h2>
                    <figure>
                        <div className='addItems'>
                            <input type='text' placeholder='Add Item..' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                            <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                        </div>
                    </figure>
                </div>
                <div className='showItem'>
                    {
                        list.map((elem) => {
                            return (
                                <div className='eachItem' key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <i className='fa fa-trash add-btn' title='delete'
                                     onClick={() => dispatch(deleteTodo(elem.id))}></i> </div>
                            )
                        })

                    }
                </div>
                <div>
                    <button className='btn btn-danger' onClick={() =>dispatch(removeTodo())}>Remove All</button>
                </div>
            </div>
        </>
    )
}
export default Todo