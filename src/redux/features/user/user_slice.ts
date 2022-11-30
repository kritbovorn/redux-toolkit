import { createSlice } from "@reduxjs/toolkit";

interface User {
    id: string;
    name: string;
};

const initialState: User[] = [
    {id: '0', name: 'Dude Lebowski'},
    {id: '1', name: 'Neil Young'},
    {id: '2', name: 'Dave Gray'}
];
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state: {users: User[]}) => state.users;

export default userSlice.reducer;