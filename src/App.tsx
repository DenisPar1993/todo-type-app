import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Todo } from './components/Todo';
import { RootState, useAppDispatch } from './store/store';
import { useDispatch } from 'react-redux';
import { fetchData } from './store/slices/TodoSlice';
import { TodoItem } from './components/TodoItem';
//https://jsonplaceholder.typicode.com/todos?userId=1
function App() {
  
  const {todo,loading,error}=useSelector((state:RootState)=>state.todo)
  const dispatch = useAppDispatch()
 
  
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  if(loading){
    return  (
      <div className='container fw-bold fs-1 '>Loading...</div>
    )
  }
  if(error){
    return  (
      <div className='container fw-bold fs-1 '>Произошла ошибка</div>
    )
  }
  return (
    <div className='container'>
      <Todo />
      
    <div className=''>
    {todo.map(item=>{
        return(
          <TodoItem todo={item} key={item.id}/>
        )
    })}
    </div>
   
   
      
    </div>
  );
}

export default App;
