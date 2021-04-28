import { Link } from "react-router-dom";

function Header({location, history}) {
    return ( 
    <header className='header'> 
        <ul> 
            <li> 
                <Link to='/'>
                <button>홈</button> 
                </Link>
            </li>
            <li>
                <Link to= '/test'>
                <button>관리자</button>
                </Link>
                {/* <a href=''>프로필</a>  */}
            </li>
            <li>
                <Link to='/Zoo'>
                <button>동물원 입장</button>
                </Link>
            </li>
            
        </ul> 
    </header> 
    ); 
} 

export default Header;