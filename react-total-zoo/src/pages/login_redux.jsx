import React,{Component} from 'react'; 
import Customer from '../components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import store from '../store';
export default class login_redux extends Component{
    // state = {
    //     animal : store.getState().animal,
    //     name : store.getState().name,
    // } // 초기값
    constructor(props){
        super(props);
        this.state = {
            name : store.getState().name,
            animal : store.getState().animal,
        }
        store.subscribe(function(){
            this.setState({
                name:store.getState().name,
                animal : store.getState().animal,}
            );}.bind(this))
    }
    render()
    {
        console.log(this.state.animal[0].name);
        // var data = JSON.parse(this.state.animal); // JSON 문자열 데이터를 JSON 값으로 변경
        var data = this.state.animal; // JSON 문자열 데이터를 JSON 값으로 변경
        var kind = 'Animal';
        var men
        if(kind !==''){
        men = data.filter(function(data){return data.kind ===kind});}
        else{
            men = data;    
        }
        console.log(men);
    return(
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
    )
    }
}