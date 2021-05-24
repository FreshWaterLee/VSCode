const initState = {}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT' : 
            console.log('create projcet success');
            return state;
        case 'CREATE_PROJECT_ERROR' : 
            console.log('create project Error');
            return state;
        default:
            return state
    }
}
export default projectReducer