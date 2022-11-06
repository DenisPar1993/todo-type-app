import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import todo from './slices/TodoSlice'


export const store=configureStore({
  reducer:{
     todo:todo
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>;