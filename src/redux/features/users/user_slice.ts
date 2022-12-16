import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type UserState = {
    id: string,
    name: string,
}

const initialState: UserState[] = [
    {id: '0', name: 'Dude Lebowski'},
    {id: '1', name: 'Neil Young'},
    {id: '2', name: 'Dave Gray'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;