<script>
    let pass;
    let confpass;
    let agreedTnC=false;
	import Basicnavbar from "../../lib/components/basicnavbar.svelte";
</script>
<Basicnavbar/>
<div data-theme="night" class="min-h-screen  flex px-12 pb-12 justify-center">
	<div class="flex items-center justify-center">
		<div class=" h-full px-10 w-full rounded-xl rounded-l-2xl flex-col justify-center">
			<h1
				class="py-10 basis-1/6 text-5xl   font-extrabold text-start  "
			>
				Login
			</h1>
			<form method="POST">
				<div class="py-2">
					<label for="username" class="block mb-2 text-sm font-medium    "
						>Username</label
					>
					<input
						type="text"
						name="username"
						id="username"
						class=" border  text-sm rounded-lg     block w-full p-2.5 "
						placeholder=""
						required
					/>
				</div>
				<div class="py-2">
					<label for="password" class="block mb-2 text-sm font-medium    "
						>Password</label
					>
					<input
						type="password"
						name="password"
						id="password"
                        bind:value={pass}
						class=" border text-sm rounded-lg  block w-full p-2.5"
						
						placeholder="Password"
						required
					/>
                </div>

				<div class="flex items-start mb-6 pt-4">
					<div class="flex items-center h-5">
                        <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
					</div>
					<label
						for="remember"
						class="ml-2 text-sm   font-medium"
						><h1
							
							class=" hover:underline">Remember Me</h1
						></label
					>
				</div>
				<button
						type="submit"
						class="btn "
						>Submit</button
					>
				<p class="py-2">Not a User ? <a class="pl-1" href="/signup"> Sign Up Here </a>
				</p>
			</form>
		</div>
	</div>
</div>
