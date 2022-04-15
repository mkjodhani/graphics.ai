import { ref, push, set } from "firebase/database";
import { database } from "../config";

// Create a new post reference with an auto-generated id
export const updateUserToFirebase = ({email, displayName, photoURL, lastLoginAt}) => {
    const userList = ref(database, 'users');
    const newUser = push(userList);
    console.log("firebase update");
    return set(newUser, {
        email, displayName, photoURL, lastLoginAt
    })
}