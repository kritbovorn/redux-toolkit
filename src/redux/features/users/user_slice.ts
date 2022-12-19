import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiUrl } from "../../../enum/enum_api";
import { RootState } from "../../app/store";

const USER_URL = ApiUrl.users;

export type UserState = {
    id: string,
    name: string,
}

const initialState: UserState[] = [];

export const fetchedUsers = createAsyncThunk('users/fetchedUsers',async () => {
    const response = await axios.get(USER_URL);
    return response.data;
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchedUsers.fulfilled, (state, action) => {
                return action.payload;
            })
    },
})

export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;