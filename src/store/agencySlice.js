import {
  createSlice
} from "@reduxjs/toolkit";
import cards from "./cards";


const initialState = {
  cards,
  activeGroup: "Show All",
  activeCard: "",
  windowWidth: window.innerWidth,
}

export const agencySlice = createSlice({
  name: "agency",
  initialState,
  reducers: {
    changeActiveGroup: (state, action) => {
      state.activeGroup = action.payload
    },
    changeWindowWidth: (state, action) => {
      state.windowWidth = action.payload
    },
    changeActiveCard: (state, action) => {
      state.activeCard = action.payload
    },
    removeCard: (state, action) => {
      let index = state.cards.findIndex(p => p.id === action.payload);
      state.cards.splice(index, 1)
    },
    load: (state, action) => {
      let arr = [...state.cards];
      arr = arr.concat(action.payload)
      state.cards = arr;
    }
  }
})

export const {
  changeActiveGroup,
  changeWindowWidth,
  changeActiveCard,
  removeCard,
  load
} = agencySlice.actions

export default agencySlice.reducer