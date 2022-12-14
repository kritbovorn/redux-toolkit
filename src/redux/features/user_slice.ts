import { createSlice } from "@reduxjs/toolkit";

type UserState = {
    id: string,
    name: string
}

const initialState: UserState[] = [
    {id: '1', name: 'Kritbovorn'},
    {id: '2', name: 'Sitticbai'}
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default userSlice.reducer;