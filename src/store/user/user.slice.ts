import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";
import { IInitialUserState, IUser } from "../../types/user.types";

const initialState: IInitialUserState = {
    isLoading: false,
    error: '',
    user: {} as IUser
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUserById.pending, state => {state.isLoading = true})
            .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isLoading = false;
                state.user = action.payload})
            .addCase(getUserById.rejected, (state, action:any) => {
                state.isLoading = false;
                state.error = action.payload.error
                state.user = {} as IUser
            })
    }
})