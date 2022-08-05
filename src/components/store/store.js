import { configureStore } from '@reduxjs/toolkit'
import gamefildReduser from './redusers/gamefildReduser'


export default configureStore({
  reducer: {
    gamefild: gamefildReduser,
},
})