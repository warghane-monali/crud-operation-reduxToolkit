import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue})=>{
    const response = await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
    })
    try{
        const result = await response.json()
        return result
    }catch(error){
        return rejectWithValue(error)
    }
}
)

// read action
export const readUser = createAsyncThunk("readUserData", async (args,{rejectWithValue}) =>{
    const response = await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud")
    try{
        const result = response.json()
        console.log("result",result)
        return result
    }catch(error){
        console.log("error",rejectWithValue(error))
        return rejectWithValue(error)
    }
})

// delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, {rejectWithValue})=>{
    const response = await fetch(`https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
    {method:"DELETE"})
    try{
        const result = await response.json()
        return result
    }catch(error){
        return rejectWithValue(error)
    }
}
)

export const userDetailSlice = createSlice({
    name:"useDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers: builder =>{
        builder
        .addCase(createUser.pending, (state, action) => {
            state.loading = true
        })
        .addCase(createUser.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload)
               // push method will create a new record, if we write state.users = action.payload then data will be replaced by new one
        })

        //read user
        .addCase(readUser.pending, (state, action) => {
            console.log('inside loading');
            state.loading = true
        })
        .addCase(readUser.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload;
            console.log("state.error",action.payload)
        })
        .addCase(readUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload
        })

        // delete user
        .addCase(deleteUser.pending, (state, action) => {
            console.log('inside loading');
            state.loading = true
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload;
            console.log("state.error",action.payload)
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            console.log("action.payload-------",action.payload.id)
            const {id} = action.payload
            if(id){
                state.users = state.users.filter((ele) => ele.id !== id)
            }
        });
    }     
})

// export const { setUserData } = userDetailSlice.actions;
export default userDetailSlice.reducer;
