import { configureStore } from '@reduxjs/toolkit'
import gamefieldReduser from './redusers/gamefieldReduser'


export default configureStore({
  reducer: {
    gamefield: gamefieldReduser,
},
})