import { UserList } from "../constants";

export const login2 = (returnData2, username, password) => {const foundUser = returnData2.find(user => user.username === username)
    if(foundUser) {
        if (foundUser.password === password) {   
            return{ success: true, message: 'Login successful'};
        } else {
            return { success: false, message: 'Incorrect password'};
        }
    }
        else{
            return{ success: false, message: 'Username not found'};
            
        }
        
        }