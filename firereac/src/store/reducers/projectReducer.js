const initState = {
    projects:[
        {id: '1',title:'help me find peach',content: 'blah bibidi babidi boo~'},
        {id: '2',title:'collect all the stars',content: 'blah bibidi babidi boo~'},
        {id: '3',title:'egg hunt with yoshi',content: 'blah bibidi babidi boo~'},
    ]
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT' : 
            console.log('create projcet',action.project);
    }
    return state
}
export default projectReducer