import { configureStore } from '@reduxjs/toolkit'
import formReducer, { FormState } from '@/lib/formSlice'


// Manual persistence via localStorage
function loadState(): { form: FormState } | undefined {
  try {
    const serialized = localStorage.getItem('formState')
    if (!serialized) return undefined
    return { form: JSON.parse(serialized) }
  } catch {
    return undefined
  }
}

function saveState(state: { form: FormState }) {
  try {
    const serialized = JSON.stringify(state.form)
    localStorage.setItem('formState', serialized)
  } catch {
    // ignore
  }
}

// Only load state from localStorage on the client
const isClient = typeof window !== 'undefined'
const preloaded = isClient ? loadState() : undefined

export const store = configureStore({
  reducer: { form: formReducer },
  preloadedState: preloaded
})

// Persist on every change
store.subscribe(() => {
  saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
