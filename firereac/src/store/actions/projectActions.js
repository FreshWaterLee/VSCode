export const createProject = (project) =>{
    return (dispatch,getState, {getFirebase,getFirestore})=>{
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({// db 이름 .add 함수는 추가하는 함수
        ...project,
        authorFirstName:'Green',
        authorLastName:'Energy',
        authorId:12345,
        createAt: new Date()
    }).then(()=>{
        dispatch({type:'CREATE_PROJECT'});
    }).catch(err=>{
        dispatch({type:'CREATE_PROJECT_ERROR',err});
    })}
};

