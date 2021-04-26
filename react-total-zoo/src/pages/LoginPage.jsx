
import React from 'react'; 
import Header from '../components/Header';
import Customer from '../components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//관리자 페이지!!

function alldata() {
    var customer = []
    fetch("http://localhost:3001/alltable",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
        }).then((res)=>res.json())
        .then((json)=>{
            for(var i =0; i<json.length; i++){
                customer.push(json[i]);
            }
        })
        return customer;
    }
const LoginPage=({match})=>{
    var animal = [];
    alert('어서 오십시오\t'+match.params.name+ ' 님');
    alert("before"+animal.length);
    animal = alldata();
    alert("after"+animal.length);
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