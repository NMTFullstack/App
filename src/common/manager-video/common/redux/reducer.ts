import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false,
    listId: [],
    totalTime: 0,
    token: "",
    type: 1,
    from: 1,
};

export const ManagerVideoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        playVideos: (state, action) => {
            state.active = action.payload;
        },
        getListId: (state, action) => {
            state.listId = action.payload;
        },
        getTotalTime: (state, action) => {
            state.totalTime = action.payload;
        },
        setTokenGgResult: (state, action) => {
            state.token = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setFrom: (state, action) => {
            state.from = action.payload;
        },
    },
});

export const {
    playVideos,
    getListId,
    getTotalTime,
    setTokenGgResult,
    setType,
    setFrom,
} = ManagerVideoSlice.actions;
