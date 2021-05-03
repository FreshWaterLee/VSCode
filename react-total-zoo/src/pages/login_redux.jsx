import React,{Component} from 'react'; 
import Header from '../components/Header';
import Customer from '../components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import store from '../store';
import Footer from '../components/Footer';
export default class login_redux extends Component{
    // state = {
    //     animal : store.getState().animal,
    //     name : store.getState().name,
    // } // 초기값
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({
                name:store.getState().name,
                animal : store.getState().animal,}
            );}.bind(this))
    }
    render()
    {
        var data = JSON.parse(this.state.animal); // JSON 문자열 데이터를 JSON 값으로 변경
    return(
        <>
        <Header location = {this.props}/>
            <div>
                <Table>
                <TableHead>
                <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>종류</TableCell>
                <TableCell>설명</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    data.map(data=>{
                    return (
                    <Customer id={data._id} name={data.name} path={data.path} kind = {data.kind} description={data.description}/>
                    )})
                }
                </TableBody>
                </Table>
                </div>
                <Footer/>
            </>
    )
    }
}