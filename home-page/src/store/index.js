import { configureStore, createSlice }  from '@reduxjs/toolkit'

const authenticationSlice  = createSlice({
    name : 'authentication',
    initialState : { isAuthenticate : false},
    reducers : {
        logedIn(state){
            state.isAuthenticate = true;
        },
        logedOut(state){
            state.isAuthenticate = false;
        }
    }
})


const store = configureStore({
    reducer :  {auth : authenticationSlice.reducer,
    }
})

export const authenticationActions = authenticationSlice.actions;
export default store
