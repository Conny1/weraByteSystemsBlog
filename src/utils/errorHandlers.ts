
export const loginError =( status:number )=>{
    
    let message =""
    switch (status) {
        case 404:
            message='Email with that account does not exist'            
            break;
        case 401:
            message = "Invalid email or password"
            break
        case 500:
            message ="Invalid error. Try Again."    
        default:
            break;
    }

    return message
}