import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig.js";
import axios from "axios";
import { dateCalculater } from "../../utils/dateCalculater.js";
import { dateFormatter } from "../../utils/dateFormatter.js";

const festivalIndex = createAsyncThunk(
  'festivalSlice/festivalIndex',
  // arg(아규먼트): 외부 주입(첫 번째 파라미터)
  // thunkAPI: redux가 관련된 모든 것을 가지고 있음(두 번째 파라미터)
  // 위 파라미터는 고정된 순서이다.
  async (arg, thunkAPI) => {
    // state 접근 방법(접근하여 객체를 가져옴)
    const state = thunkAPI.getState();
    const pastDateYMD = dateFormatter.formatDateToYMD(dateCalculater.getPastDate((1000*60*60*24*30)));

    const url = `${axiosConfig.BASE_URL}/searchFestival2`;
    const config = {
      params: {
        serviceKey: axiosConfig.SERVICE_KEY,
        MobileOS: axiosConfig.MOBILE_OS,
        MobileApp: axiosConfig.MOBILE_APP,
        _type: axiosConfig.TYPE,
        arrange: axiosConfig.ARRANGE,
        numOfRows: axiosConfig.NUM_OF_ROWS,
        pageNo: state.festival.page + 1, // getState()로 객체를 가져왔기 때문에 page 지우고 이런 방식으로 page 접근
        eventStartDate: pastDateYMD, // 날짜가 동적으로 움직임
      }
    }

    const response = await axios.get(url, config);

    return response.data.response.body;
  }
);

export {
  festivalIndex,
};