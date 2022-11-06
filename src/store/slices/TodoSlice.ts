import { createSlice, PayloadAction ,createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { iTodo } from "../../types";
import axios from "axios";
interface iInitial {
    todo:iTodo[];
    loading:boolean,
    error:boolean,
    counter:number
}

//https://jsonplaceholder.typicode.com/todos?userId=1
const  initialState:iInitial={
    todo:[{id:1,title:'title 123',complete:false}],
    loading:false,
    error:false,
    counter:0
}
export const fetchData= createAsyncThunk(
    'todo/fetchTodo',
    async function (_,thunkAPI){
        try {
            const respose = await axios.get<iTodo[]>('https://jsonplaceholder.typicode.com/todos?userId=1')
            return respose.data
        } catch (error) {
          return thunkAPI.rejectWithValue('Не удалось загрузить данные')  
        }
       
    }

)
const todoSlice=createSlice({
    name:'todo',
  initialState,
 reducers:{
    increment:(state:iInitial)=>{state.counter++},
    addTodo:(state:iInitial,action:PayloadAction<iTodo>)=>{
        state.todo.push(action.payload)   
    },
    delTodo:(state:iInitial,action:PayloadAction<number>)=>{
          const arr=state.todo.filter(item=>item.id!==action.payload)
          state.todo = arr
    }
 },
 extraReducers:(builder)=>{
    builder
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false
            state.todo=action.payload
        })
        .addCase(fetchData.pending,(state)=>{
            state.loading= true
        })
        .addCase(fetchData.rejected,(state)=>{
            state.loading=false
            state.error=true
           
        })
 }

})


export default todoSlice.reducer
export const {increment,addTodo,delTodo} = todoSlice.actions