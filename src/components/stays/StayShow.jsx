import { useNavigate, useParams } from "react-router-dom";
import './StayShow.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setStayInfo } from "../../store/slices/stayShowSlice.js";

function StayShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stayInfo = useSelector(state => state.stayShow.stayInfo);
  const stayList = useSelector(state => state.stay.list);

  // 전체 리스트 정보 => festivalSlice.festivalList
  // 클릭한 카드의 정보를 특정할 수 있는 값 => 세그먼트 파라미터
  // 클릭한 카드의 정보 1개는 전체 리스트 정보에 있는 것 중 1개
  // show에서 info스테이트 저장할 값 => 클릭한 카드의 정보 1개
  // show에서 info스테이트 저장
  useEffect(() => {
    const item = stayList.find(item => params.id === item.contentid);
    dispatch(setStayInfo(item));
  }, []);

  function redirectBack() {
    navigate(-1);
  }

  return (
    <>
      {
        stayInfo.title &&
        <div className="stay-show-container">
          <button type="button" className="stay-show-button" onClick={redirectBack}>되돌아가기</button>
          <p className="stay-show-title">{stayInfo.title}</p>
          <p className="stay-show-tel">Tel: {stayInfo.tel}</p>
          <p className="stay-show-addr">{`${stayInfo.addr1} ${stayInfo.addr2}`}</p>
          <img className="stay-show-img" src={stayInfo.firstimage} alt={`${stayInfo.title}사진`} />
        </div>
      }
    </>
  )
}

export default StayShow;