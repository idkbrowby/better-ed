<script>
    import { onMount } from "svelte";
    import { auth } from "../lib/firebase/firebase.client";
    import { authStore } from "../stores/authStore";
    import "$lib/app.css";
    onMount(()=>{
        const unsubcribe = auth.onAuthStateChanged((user)=>{
            console.log(user);
            authStore.update((curr) => {
                return {...curr,isLoading:false,currentUser:user};
            });
        });
    });
</script>
<slot/> 