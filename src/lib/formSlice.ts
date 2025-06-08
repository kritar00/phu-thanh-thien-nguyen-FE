import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JSONSchema7 } from 'json-schema'

export interface FormState {
  schema: JSONSchema7
  data: Record<string, any>
}

const initialState: FormState = {
  schema: {},
  data: {}
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setSchema(state, action: PayloadAction<JSONSchema7>) {
      state.schema = action.payload
    },
    updateFormData(state, action: PayloadAction<Record<string, any>>) {
      state.data = action.payload
    },
    resetForm(state) {
      state.data = {}
    }
  }
})

export const { setSchema, updateFormData, resetForm } = formSlice.actions
export default formSlice.reducer
