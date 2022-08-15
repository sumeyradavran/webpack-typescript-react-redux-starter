import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store/setup/store'

// TODO change the slice

export const initialState: {
  dummyField?: string
} = {}

const dummyState = createSlice({
  name: 'dummyState',
  initialState,
  reducers: {
    dummyReducer: (state, { payload: dummyField }: PayloadAction<string>) => {
      state.dummyField = dummyField
    },
  },
})

export const { dummyReducer } = dummyState.actions

export default dummyState.reducer

export const selectDummyState = (state: RootState) => state.dummy.dummyField
