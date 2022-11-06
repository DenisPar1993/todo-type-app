import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delTodo } from '../store/slices/TodoSlice'
import { iTodo } from '../types'
interface iTodoItem{
    todo:iTodo
}

export const TodoItem:React.FC<iTodoItem> = ({todo}) => {
    const dispatch= useDispatch()
    const [check,setCheck]=useState(false)
    const changeCheck=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCheck(e.target.checked)
       
    }
    const deleteTodo=(e:React.MouseEvent<HTMLSpanElement>)=>{
        const id:number=+todo.id
      dispatch(delTodo(id))
    }
  return (
    <div className="form-check">
  <input className="form-check-input " type="checkbox" value="" onChange={changeCheck}/>
  <label className="form-check-label" style={{opacity:check?0.5:1}} >
    {todo.title}
  </label>
  <span onClick={deleteTodo} style={{cursor:'pointer'}}>  &#10060;</span>
</div>
  )
}
