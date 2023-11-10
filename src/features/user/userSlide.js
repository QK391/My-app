import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authService } from "./userService";

export const registerUser = createAsyncThunk("auth/register",
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

export const loginUser = createAsyncThunk("auth/login",
    async (userData, thunkAPI) => {
        try {
            return await authService.login(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

const initialState = {
    user: "",
    isError: false,
    isSuccesss: false,
    isLoading: false,
    message: "",
}
export const authslice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccesss = true;
                state.createdUser = action.payload;
                if (state.isSuccesss === true) {
                    toast.info("User created successfully")
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccesss = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error)
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccesss = true;
                state.user = action.payload;
                if (state.isSuccesss === true) {
                    localStorage.setItem("token", action.payload.token);
                    toast.info("User login successfully")
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccesss = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error)
                }
            })
    }
});
export default authslice.register;