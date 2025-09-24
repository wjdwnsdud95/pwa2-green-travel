import { useDispatch, useSelector } from 'react-redux';
import './StayList.css';
import { useEffect } from 'react';
import { setScrollEventFlg } from '../../store/slices/staySlice.js';
import { stayIndex } from '../../store/thunks/stayThunk.js';
import { useNavigate } from 'react-router-dom';

function StayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stayList = useSelector(state => state.stay.list);
  const scrollEventFlg = useSelector(state => state.stay.scrollEventFlg);

  useEffect(() => {
    window.addEventListener('scroll', addNextPage);

    if(stayList.length === 0) {
      dispatch(stayIndex());
    }
  
    return () => {
      window.removeEventListener('scroll', addNextPage);
    }
  }, []);

  // 다음 페이지 가져오기
  function addNextPage() {

    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 Y축 총 길이
    const winHeight = window.innerHeight; // 윈도우의 Y축 총 길이
    const nowHeight = window.scrollY; // 현재 스크롤의 Y축 위치
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치

    if(viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(stayIndex());
    }

  }

  // 상세 페이지로 이동
  function redirectShow(item) {
    // dispatch(setFestivalInfo(item));
    navigate(`/stays/${item.contentid}`);
  }

  return (
    <>
      <p className='stay-sub-title'>-숙박 정보 리스트-</p>
      <div className="stay-container">
        {
          // 초기값을 무엇을 주냐에 따라 아래의 코드 셋팅이 달라질 수 있다.
          // festibalList && festibalList.map(item => {
          stayList.map(item => {
            return (
            <div className="stay-card" onClick={() => { redirectShow(item) }} key={item.contentid + item.createdtime}>
              <div className="stay-card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
              <p className="stay-card-title">{item.title}</p>
              <p className="stay-crad-address">{item.addr1}</p>
            </div>
            );
          })
        }
      </div>
        {/* <button type="button" className="card-NextPage-Button" onClick={addNextPage}>더 보기</button> */}
    </>
  )
}

export default StayList;