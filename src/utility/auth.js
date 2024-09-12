import { UserList } from "../constants";

export const login = (username, password) => {const foundUser = UserList.find(user => user[0] === username)
    if(foundUser) {
        if (foundUser[1] === password) {   
            return{ success: true, message: 'Login successful'};
        } else {
            return { success: false, message: 'Incorrect password'};
        }
    }
        else{
            return{ success: false, message: 'Username not found'};
        }
        }