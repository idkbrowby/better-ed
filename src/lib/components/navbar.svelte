<script lang="ts">
	import { page } from '$app/stores';

	let menuactive = false;
	let signedin = $page.data.user != null;
	let username = $page.data.user ? $page.data.user.user.username : null;
  let darkmode = true;
  export let theme:string;
  
  function themeSwitcher(){
    darkmode =! darkmode;
    if (darkmode==true){
      theme="night";
    }
    else{
      theme="pastel";
    }
  }
  


	export async function deletecookie(){
		await fetch("/logout");
		window.location.reload();
	}
</script>
<nav class="w-full mx-auto  pl-3 pr-3 py-2 rounded-b-lg">
	<div class="flex justify-between items-center h-10 px-2 ease-in-out">
		<!-- Logo -->
		<div class=" flex space-x-4 items-center text-primary fill-accents transition duration-200">
			<button class="flex pr-2 transition duration-200">
				<a
					href="/"
					class="flex font-mono font-extremebold  items-center  transition duration-200 "
				>
        <svg fill={darkmode?"#ffffff":"#000000"} data-theme={theme} width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>book</title>
        <path d="M28.25 2c-0-0.69-0.56-1.25-1.25-1.25h-19.8c-0.028-0.001-0.061-0.001-0.093-0.001-1.817 0-3.297 1.443-3.357 3.246l-0 0.005v24.389c0.114 1.606 1.445 2.867 3.070 2.867 0.063 0 0.126-0.002 0.188-0.006l-0.009 0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-19.8c-0.024 0.002-0.051 0.004-0.079 0.004-0.441 0-0.807-0.325-0.871-0.749l-0.001-0.005v-1.223c0-0.090 0.266-0.361 0.746-0.361l20.004 0.057c0 0 0 0 0.001 0 0.515 0 0.956-0.311 1.148-0.756l0.003-0.008 0.007-0.034c0.056-0.132 0.089-0.286 0.092-0.447v-0.001l-0-0.002 0-0.002zM25.75 23.969l-14.5-0.041v-20.678h14.5zM6.25 24v-20c0.064-0.429 0.43-0.754 0.871-0.754 0.028 0 0.055 0.001 0.082 0.004l-0.003-0h1.55v20.671l-1.75-0.005c-0.267 0.002-0.525 0.033-0.774 0.089l0.024-0.005zM14 8.25h9c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-9c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0zM23 9.75h-9c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h9c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path>
        </svg>
					<!-- Name of Website -->
					<h1 class="px-2 font-bold text-3xl">BetterEd</h1>
				</a>
			</button>
		</div>
		{#if !signedin}
		<div class="flex items-center justify-evenly">
			<div class="flex h-full items-center py-1 justify-evenly">
			<!-- Login and signup -->
			<div class="hidden md:flex justify-between rounded-xl pl-1.5 py-4 space-x-4  font">
				<button
					class="transition duration-200  rounded-xl p-1   flex items-center"
					><a href="/login" class="font-mono  font-semibold pr-2">Login</a><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-5 h-5"
					>
						<path
							fill-rule="evenodd"
							d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
							clip-rule="evenodd"
						/>
						<path
							fill-rule="evenodd"
							d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<button
					class="bg-primary  hover:bg-opacity-75 transition duration-200 border-4 border-primary rounded-xl p-1  hover:text-primary  flex items-center"
					><a href="/signup" class=" font-mono  font-semibold ">Signup</a></button
				>
			</div>
		</div>
      <button class="btn btn-square mx-4" on:click={themeSwitcher}>
        {#if darkmode==true}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>        
        {/if}
        
      </button>
  </div>
		{:else}
			<!-- User Details -->
			<div
				class="hidden md:flex justify-between pl-4 rounded-xl space-x-5  font-medium hover:font-medium font-mono"
			>
				<button class="items-center font-semibold" id="User">
					<a href="/user/{$page.data.user.user.id}">{username}</a> 
				</button>
			</div>
			<div class="hidden md:flex justify-between pl-4 rounded-xl space-x-5  hover:font-medium font-mono font-semibold">
			<button on:click={deletecookie}>Logout</button>
			</div>
		{/if}
		<!-- Mobile logo and Site name -->
		<div class="md:hidden flex items-center">
			<button on:click={() => (menuactive = !menuactive)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="white"
					class="menu-button w-5 h-5 hover:fill-accents"
				>
					<path
						fill-rule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
	<!-- mobile menu -->
	{#if menuactive}
		{#if window.innerWidth < 768}
			<div class="mobile-menu flex-col py-2  md:hidden transition duration-200 ease-in-out">
				{#if !signedin}
					<!-- Login bar -->
					<div
						class=" px-2 pt-4 flex justify-between  font-semibold"
					>
						<button class="w-full"
							><a href="/login" class="font-mono bold flex justify-between items-center"
								>Login <svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-5 h-5"
								>
									<path
										fill-rule="evenodd"
										d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
										clip-rule="evenodd"
									/>
									<path
										fill-rule="evenodd"
										d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
										clip-rule="evenodd"
									/>
								</svg></a
							>
						</button>
					</div>
					<!-- Signup Bar -->
					<div class="px-2 py-2 w-full  font-semibold ">
						<button class=" w-full justify-start"
							><a href="/signup" class="flex justify-start font-mono  w-full">Signup</a
							></button
						>
					</div>
				{:else}
					<!-- User details -->
					<div
						class=" px-2 pt-4 flex justify-between "
					>
						<button class="w-full"
							><a href="/user/{$page.data.user.user.id}" class="font-mono font-bold flex justify-between items-center"
								>{username}</a
							></button
						>
					</div>
					<div class=" px-2 pt-4 flex  text-opacity-85">
						
							<button class="w-full font-mono font-bold flex justify-between items-center" on:click={deletecookie}>
								Logout
							</button>
						
					</div>
				{/if}
			</div>
		{:else}
			menuactive = !menuactive;
		{/if}
	{/if}
</nav>
<div class="h-1">

</div>
