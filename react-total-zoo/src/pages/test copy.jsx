import React, { Component} from 'react'
import Header from '../components/Header'
import store from '../store';
import Footer from'../components/Footer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    spacing: 8,
  });
const clas ={
    root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    };
// const Container = styled.div`
//   margin-top: 20px;
//   padding: 20px;
// `;

// const Logo = styled.div`
//     position:relative;
//     margin-bottom:20px;
//     text-align:center;
//     left:30%;
//     width:40%;
//     height:40px;
//     font-size: 1.4rem;
//     letter-spacing: 4px;
//     background-color:${oc.teal[7]};
//     color: white;
//     font-family: 'Rajdhani';

// `;
// // color: ${oc.teal[7]};

// const Input = styled.input`
//   position: relative;
//   overflow: hidden;
//   left: 30%;
//   width: 40%;
//   height: 40px;
//   margin: 0 0 8px;
//   padding: 5px 39px 5px 11px;
//   border: solid 1px #dadada;
//   background: #fff;
//   box-sizing: border-box;
// `;

// const Button = styled.div`
//   font-size: 18px;
//   position:relative;
//   font-weight: 700;
//   line-height: 49px;
//   display: block;
//   left:30%;
//   width: 40%;
//   height: 49px;
//   margin: 16px 0 7px;
//   cursor: pointer;
//   text-align: center;
//   color: #fff;
//   border: none;
//   border-radius: 0;
//   background-color: #03c75a;
//   ${({ disabled }) =>
//     disabled &&
//     `
//     background-color: #efefef;
//   `}
// `;

class test extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
                id:"",
                pw:"",
                name:"",
                data:"",
                btnState:false,
        }
    }
    idChange=(e)=>{
        //id 입력 텍스트에 데이터가 입력되면 id 업데이트//
        this.setState({
            id : e.target.value,
        })
    }
    send_list=()=>{
        alert("목록?");
        fetch("http://localhost:3001/alltable",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
        }).then((res)=>res.json())
        .then((json)=>{
            this.setState({
                data : json.data,
            })
        }).then(()=>{
            store.dispatch({type:"loginS",name : this.state.name, data:this.state.data});
            this.props.history.push("/red_login");
        })
    }
    check_login=()=>{
        var post = {"id":this.state.id,"pw":document.getElementById('password').value};
        fetch("http://localhost:3001/Logincheck",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
            body : JSON.stringify(post),
        }).then((res)=>res.json()
        )
        .then((json)=>{
            this.setState({
                name: json.name,
            })
        }).then(()=>{
            if(this.state.name !=="None")
            {
                alert("로그인 완료!!"+this.state.name);
                this.send_list();
            }
            else{
                alert("아닌데? 아닌데?"+this.state.name);
            }
        })
    }
    go_main=()=>{
        this.props.history.push("/");
    }
    // LoginForm=()=>{
    //     return(
    //         <Container>
    //             <Logo>REACT ZOO</Logo>
    //             <Input id="id" name="id" placeholder="아이디를 입력해주세요" onChange={this.idChange}/>
    //             <br/>
    //             <Input
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 placeholder="비밀번호를 입력해주세요"
    //                 onchange={this.pwChange}
    //             />
    //             <Button onClick={this.check_login}>로그인</Button>
    //             <Button onClick={this.go_main}>돌아가기</Button>
    //         </Container>
    //     );        
    // }const useStyle = makeStyles((theme)=>({

    render(){
        const {classes} = this.props;
        return(
            <>
            <Header location = {this.props.location} history = {this.props.history}></Header>
            <Grid container component="main" height="100%">
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>      
                <form className={classes.form} noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid> 
                    <Box mt={5}>
                    </Box>
                </form>

                </div>
            </Grid>
            </Grid>
            <Footer></Footer>
            </>
    );
    }
}
export default withStyles(clas)(test);