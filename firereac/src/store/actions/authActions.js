export const signIn = (credentials)=>{
    return(dispatch,getState,{getFirebase,})=>{
        const firebase =getFirebase();
        firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
        ).then(()=>{
            dispatch({type:'Login_Success'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err});
        });
    }
}

export const signOut = ()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) =>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            //authentication 유저 추가 
            newUser.email,
            newUser.password,
        ).then((resp)=>{
            // 유저 추가후 DB에 유저 정보 추가
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[0] // 유저 이미지
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err =>{
            dispatch({type:'SIGNUP_ERROR',err})
        })
    }
}