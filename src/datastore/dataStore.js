import { configureStore, createSlice} from "@reduxjs/toolkit";

const sliceManager = createSlice({
  name: "apiManager",
  initialState: {
    imageDataDump: [],
    pageNumber: 1,
    searchQuery:"",
    loader:true,
    error:false,
  },
  reducers: {
    fetchData(state, action) {
      state.imageDataDump = [...state.imageDataDump,...action.payload.imageDataDump]
      state.pageNumber = action.payload.pageNumber
      state.searchQuery = action.payload.searchQuery
      state.loader = false
    },
    clearImageDump(state){
            state.imageDataDump = []
    },
    notificationHandler(state,action){
        state.loader = action.payload.loadingState
        state.error = action.payload.errorState
    },
    fetchSearchQuery(state,action){
      state.searchQuery = action.payload.searchQuery
    }
  },
});



const store = configureStore({
  reducer: sliceManager.reducer,
});

export const actionSet = sliceManager.actions;
export default store;
