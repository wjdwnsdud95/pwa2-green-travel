import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <p className="main-sub-title">↓↓↓아래 이미지를 클릭하시면 <span className="title-color">리스트 선택 페이지</span>로 이동합니다.↓↓↓</p>
      <img className='main-title-Img' onClick={() => { navigate('/selectpage') }} src='/icons/main_img.png' alt="대문" />
    </>
  )
}

export default Main;