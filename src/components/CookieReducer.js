export default function  cookieReducer(state={key:''}, action) {
    if(action.type=='COOKIE') {
        return {
            key: action.key
        }
    }
    return state
}