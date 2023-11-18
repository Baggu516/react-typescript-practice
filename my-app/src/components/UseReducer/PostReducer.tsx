// enum x{
//     "F_S",
//     "F_success",
// }
export type action1={
    type:string,
    payload?:string
}
export type state1={
    loading:boolean,
    error:boolean,
    post?:any
}

export const Initial_state={
    loading:false,
    post:"",
    error:false
}
export const PostReducer=(state:state1,action:action1)=>{

    switch(action.type){
        case "F_S":
            return {
                loading:true,
                post:"",
                error:false
            }
        case "F_success":
            return{
                ...state,
                post:action.payload,
                error:false,
                loading:false
            }
        case "E":
            return{
                error:true,
                loading:false,
            }  
        default:
            return state          
    }
}