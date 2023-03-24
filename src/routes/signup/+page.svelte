<script>
    let pass;
    let confpass;
    let agreedTnC=false;
</script>
<div data-theme="night" class="min-h-screen  flex p-12 justify-center">
	<div class="flex items-center justify-center">
		<div class=" h-full p-10 w-full rounded-xl rounded-l-2xl flex-col justify-center">
			<h1
				class="py-10 basis-1/6 text-5xl   font-extrabold text-start  "
			>
				Signup
			</h1>
			<form method="POST">
				<div class="py-2">
					<label for="Emailid" class="block mb-2 text-sm font-medium   "
						>Email Id</label
					>
					<input
						type="text"
						name="email"
						id="Emailid"
						class=" border   text-sm rounded-lg  block w-full p-2.5 "
						placeholder="abcd@xyz.com"
						required
					/>
				</div>
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
				<div class="py-2">
					<label for="password" class="block mb-2 text-sm font-medium    "
						>Confirm Password</label
					>
					<input
						type="password"
						id="password"
						class=" border     text-sm rounded-lg     block w-full p-2.5 "
						bind:value={confpass}
						placeholder="Password"
						required
					/>
				</div>

				<div class="flex items-start mb-6 pt-4">
					<div class="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							bind:checked={agreedTnC}
							class="w-4 h-4  rounded border "
							required
						/>
					</div>
					<label
						for="remember"
						class="ml-2 text-sm   font-medium"
						>I agree with the <a
							href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							class=" hover:underline">terms and conditions</a
						>.</label
					>
				</div>
				{#if pass != confpass}
					<div class="pb-2">
						<h1 class="text-mono font-semibold">Passwords Do Not Match!!</h1>
					</div>
					<button
						type="submit"
						disabled
						class="  btn"
						>Submit</button
					>
				{:else}
					<button
						type="submit"
						disabled={!agreedTnC}
						class="btn "
						>Submit</button
					>
				{/if}
				<p class="py-2">Already a User? <a class="" href="/login">Login Here</a>
				</p>
			</form>
		</div>
	</div>
</div>
