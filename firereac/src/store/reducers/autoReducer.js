const initState = {
  authError:null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
        return {
          ...state,
          authError:'Login failed',
        }
    case 'Login_Success':
      console.log('login success');
      return{
        ...state,
        authError:null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signOut Success');
      return state;
    default:
      return state;
  }
};

export default authReducer;