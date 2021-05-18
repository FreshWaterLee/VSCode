import React, { Component} from 'react'
import store from '../store';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import "../App.css"

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
        var post = {"id":document.getElementById('id').value,"pw":document.getElementById('password').value};
        console.log(post);
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
                this.send_list();
            }
            else{
            }
        })
    }
    go_main=()=>{
        this.props.history.push("/");
    }
    Jasin=()=>{
        alert("마!! 자신있나!!??");
    }
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        const {classes} = this.props;
        return(
            <>
            <Grid container component="main" height="100%">
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    <h2 class = "loginText">NaZoo Park Admin</h2>
                </Typography>
                <img class = "loginImage" src = '/images/Jasin/Jasin.jpg' onClick ={this.Jasin} />
                <form className={classes.form} noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="id"
                    label="Admin ID"
                    name="email"
                    autoComplete="id"
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
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.check_login}
                    >
                    Sign In
                    </Button>
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.go_main}
                    >
                    BACK
                    </Button>
                    <Box mt={5}>
                    </Box>
                </form>

                </div>
            </Grid>
            </Grid>
            </>
    );
    }
}
export default withStyles(clas)(test);