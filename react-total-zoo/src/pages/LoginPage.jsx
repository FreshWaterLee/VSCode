
import React from 'react'; 
import Header from '../components/Header';

const LoginPage=({match})=>{
    console.log(match.params);
    alert('환영합니다'+match.params.name+ '관리자님!!');
    return (
    <>
    <Header/>
    <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form>
                <label>ID</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <br />
                {/* <button onClick={MovetoA}> */}
                <button>
                    Login
                </button>
            </form>
        </div>
        </>
    )
}

export default LoginPage;