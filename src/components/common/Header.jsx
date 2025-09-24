import { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [menuOpen, setmenuOpen] = useState(false); // 메뉴를 열고 닫는 상태 저장하는 변수 생성(처음 값은 메뉴 항목이 안보이게 false로 설정)
    const navigate = useNavigate(); // 버튼을 눌렀을 때 해당 화면으로 이동할 수 있게 해주는 hook 생성
    return (
      <>
        {/* 햄버거 버튼 */}
        <button type='button' className={`hamburger_button ${menuOpen ? 'open' : ''}`} onClick={() => setmenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`nav_menu ${menuOpen ? 'show' : ''}`}>
          <button className='menu_button' type="button" onClick={() => { navigate('/'); setmenuOpen(false) }}>메인</button>
          <button className='menu_button' type="button" onClick={() => { navigate('/festivals'); setmenuOpen(false) }}>축제</button>
          <button className='menu_button' type="button" onClick={() => { navigate('/stays'); setmenuOpen(false) }}>숙박</button>
        </div>
        <h1>관광 정보 서비스</h1>
      </>
    )
}

export default Header;