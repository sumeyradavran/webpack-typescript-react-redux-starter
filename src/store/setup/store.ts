import { combineReducers, configureStore } from '@reduxjs/toolkit'
import dummy from 'store/slices/dummy'
import dummyApi from 'services/dummy'
// TODO change the reducers

const combinedReducer = combineReducers({
  dummy,
  [dummyApi.reducerPath]: dummyApi.reducer,
})

export const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.REACT_APP_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
