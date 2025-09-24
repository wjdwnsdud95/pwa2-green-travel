import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPage } from '../store/slices/selectpageSlice';
import './SelectPageMain.css';

function SelectPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 페이지 이동과 Redux 상태 변경을 함께 처리하는 함수
  const handleNavigate = (path, pageName) => {
    dispatch(setPage(pageName)); // Redux 상태 변경
    navigate(path); // 해당 경로로 페이지를 이동
  };

  return (
    <div className="selectpage-container">
      <h1 className="selectpage-title">찾는 정보가 있으신가요?</h1>
      <div className="selectpage-button">
        <button type="button" className="selectpage-button festivel" onClick={() => handleNavigate('/festivals', 'festivals')}>축제 정보 보러가기</button>
        <button type="button" className="selectpage-button stay" onClick={() => handleNavigate('/stays', 'stays')}>숙박 정보 보러가기</button>
      </div>
    </div>
  )
}

export default SelectPage;