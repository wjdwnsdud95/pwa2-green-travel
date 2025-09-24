import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
  name: 'selectpage',
  
  initialState: {
    currntPage: '',
  },

  reducers: {
    // 페이지를 변경하는 액션
    setPage: (state, action) => {
      state.setPage = action.payload;
    }
  },

});

// 다른 컴포넌트에서 사용할 수 있도록 액션을 export 한다.
export const {
  setPage
} = selectSlice.actions;

export default selectSlice.reducer;