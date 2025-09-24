import { KEY_LOCALSTORAGE_CLEAR_DATE, KEY_LOCALSTORAGE_FESTIVAL_FLG, KEY_LOCALSTORAGE_FESTIVAL_LIST, KEY_LOCALSTORAGE_FESTIVAL_PAGE, KEY_LOCALSTORAGE_STAY_FLG, KEY_LOCALSTORAGE_STAY_LIST, KEY_LOCALSTORAGE_STAY_PAGE } from "../configs/keys.js";

export const localStorageUtil = {
  // 책임 중심적 설계 시 코드 작성 방법

  clearLocalstorage: () => {
    localStorage.clear();
  },
  
  /**
   * 로컬 스토리지에 페스티벌 리스트 저장
   * @param {[]} festivalList
   */
  setFestivalList: (data) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FESTIVAL_LIST, JSON.stringify(data));
  },

  /**
   * 로컬 스토리지에 페스티벌 리스트 반환
   * @returns {[]} festivalList
   */
  getFestivalList: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_FESTIVAL_LIST));
  },

  /**
   * 로컬 스토리지에 페스티벌 페이지 번호 저장
   * @param {number} pageNo
   */
  setFestivalPage: (pageNo) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FESTIVAL_PAGE, pageNo.toString());
  },
  
  /**
   * 로컬 스토리지의 페스티벌 페이지 번호 반환
   * @returns {number} 페이지 번호
  */
  getFestivalPage: () => {
   return parseInt(localStorage.getItem(KEY_LOCALSTORAGE_FESTIVAL_PAGE));
  },
  
  /**
   * 로컬 스토리지의 페스티벌 스크롤 플래그 저장
   * @param {boolean} flg 
   */
  setFestivalScrollFlg: (flg) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FESTIVAL_FLG, flg.toString());
  },
  
  /**
   * 로컬 스토리지의 페스티벌 스크롤 플래그 반환
   * @returns {boolean} flg
   */
  getFestivalScrollFlg: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_FESTIVAL_FLG));
  },

  /**
   * 로컬 스토리지에 로컬 스토리지 클리어 날짜 저장
   * @param {string} dateYMD 
   */
  setClearDate: (dateYMD) => {
    localStorage.setItem(KEY_LOCALSTORAGE_CLEAR_DATE, dateYMD);
  },

  /**
   * 로컬 스토리지의 로컬 스토리지 클리어 날짜 반환
   * @returns {string | null}
   */
  getClearDate: () => {
    return localStorage.getItem(KEY_LOCALSTORAGE_CLEAR_DATE);
  },

    /**
   * 로컬 스토리지에 스테이(숙박) 리스트 저장
   * @param {[]} stayList
   */
  setStayList: (data) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_LIST, JSON.stringify(data));
  },

  /**
   * 로컬 스토리지에 페스티벌 리스트 반환
   * @returns {[]} festivalList
   */
  getStayList: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_STAY_LIST));
  },

  /**
   * 로컬 스토리지에 스테이(숙박) 페이지 번호 저장
   * @param {number} pageNo
   */
  setStayPage: (pageNo) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_PAGE, pageNo.toString());
  },
  
  /**
   * 로컬 스토리지의 스테이(숙박) 페이지 번호 반환
   * @returns {number} 페이지 번호
  */
  getStayPage: () => {
   return parseInt(localStorage.getItem(KEY_LOCALSTORAGE_STAY_PAGE));
  },

  /**
   * 로컬 스토리지의 스테이(숙박) 스크롤 플래그 저장
   * @param {boolean} flg 
   */
  setStayScrollFlg: (flg) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_FLG, flg.toString());
  },
  
  /**
   * 로컬 스토리지의 스테이(숙박) 스크롤 플래그 반환
   * @returns {boolean} flg
   */
  getStayScrollFlg: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_STAY_FLG));
  },

  // 역할 중심적 설계 시 코드 작성 방법
  // setLocalStorage: (key, data) => {
  //   localStorage.setItem(key, JSON.stringify(data));
  // },

  // getLocalStroage: (key) => {
  //   return localStorage.getItem(key);
  // },
}