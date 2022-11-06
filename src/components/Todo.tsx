import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/TodoSlice'

export const Todo = () => {
  const dispatch=useDispatch()
    const [value,setValue]=useState<string>('')
    const changeVal=(e:React.ChangeEvent<HTMLInputElement>)=>{
         setValue(e.target.value)
    }
    const createTodo=()=>{
          if(value){
            const date=new Date
            dispatch(addTodo({id:date.getMilliseconds(),
                                title:value,
                                 complete:false}))
                                 setValue('')
          }
          
    }
  return (
    <div className='mb-5'>
        <label className="form-label fw-bold fs-1 text-primary">Todo List</label>
    <div className="d-flex">
    <input type="text" onChange={changeVal} value={value} className="form-control w-50" placeholder='add todo'/>
     <button onClick={createTodo} className='btn btn-primary'>add</button>
    </div>
    </div>
    
  )
}
