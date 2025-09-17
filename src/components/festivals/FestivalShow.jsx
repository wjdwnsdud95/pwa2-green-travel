import { useNavigate, useParams } from "react-router-dom";
import './FestivalShow.css';
import { useDispatch, useSelector } from "react-redux";
import { dateFormatter } from "../../utils/dateFormatter.js";
import { useEffect } from "react";
import { setFestivalInfo } from "../../store/slices/festivalShowSlice.js";

function FestivalShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo);
  const festivalList = useSelector(state => state.festival.list);

  // 전체 리스트 정보 => festivalSlice.festivalList
  // 클릭한 카드의 정보를 특정할 수 있는 값 => 세그먼트 파라미터
  // 클릭한 카드의 정보 1개는 전체 리스트 정보에 있는 것 중 1개
  // show에서 info스테이트 저장할 값 => 클릭한 카드의 정보 1개
  // show에서 info스테이트 저장
  useEffect(() => {
    const item = festivalList.find(item => params.id === item.contentid);
    dispatch(setFestivalInfo(item));
  }, []);

  function redirectBack() {
    navigate(-1);
  }

  return (
    <>
      {
        festivalInfo.title &&
        <div className="show-container">
          <button type="button" onClick={redirectBack}>되돌아가기</button>
          <p className="show-title">{festivalInfo.title}</p>
          <p className="show-period">{dateFormatter.withHypenYMD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHypenYMD(festivalInfo.eventenddate)}</p>
          <img className="show-img" src={festivalInfo.firstimage} alt={`${festivalInfo.title}사진`} />
          <p className="show-addr">{`${festivalInfo.addr1} ${festivalInfo.addr2}`}</p>
        </div>
      }
    </>
  )
}

export default FestivalShow;