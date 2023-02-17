const githubReducer =(state,action)=>{
    switch(action.type){
        case "SEARCH_USERS":
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case "SET_LOADING":
            return{
                ...state,
                loading:true
            }
   
        case  "CLEAR_RESULTS":
            return{
                ...state,
                clear:false,
                users:[]
            }
        case "SET_USER":
            return{
                ...state,
                user:action.payload
            }
        case "SET_ALERT":
            return{
                alert:{
                    msg:action.msg,
                    type:action.typec
                }
            }
        case "CLAER_ALERT":
            return {
                alert:null
            }
        default:
            return state
    }
}

export default githubReducer