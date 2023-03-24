import { async } from "@firebase/util";
import { writable } from "svelte/store";
import {createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updatePassword,} from "firebase/auth";
import { auth } from "../lib/firebase/firebase.client";

export const authStore = writable({
    isLoading:true,
    currentUser:null
})

export const authHandlers={
    signup : async (email,password) =>{
        await createUserWithEmailAndPassword(auth,email,password);
    },
    logout: async ()=>{
        await signOut(auth);
    },
    resetPassword: async(email) => {
        await sendPasswordResetEmail(auth,email);
    },
    updatePassword: async (password) => {
        await updatePassword(auth,password);
    }

}