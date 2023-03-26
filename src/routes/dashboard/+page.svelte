
<script>
    import Navbar from "../../lib/components/navbar.svelte";
    import Footer from  "../../lib/components/footer.svelte";
</script>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<div class="min-h-screen px-4">
    <Navbar/>
    <h1
				class="pl-20 py-10 basis-1/6 text-5xl   font-extrabold text-start  "
			>
				Projects
			</h1>
    <div class="px-10">
    <div class=" p-8 flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-200 card bg-base-300 rounded-box place-items-center px-4">
            <div class="card w-100 bg-base-65 shadow-xl">
                <figure><img src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Pyhton Project" class="w-44 py-4" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Docker</h2>
                  <div class="card-actions justify-end">
                    <a  href="/projects/docker/2"><button class="btn btn-primary">Try Now</button></a>
                  </div>
                </div>
              </div>
        </div> 
    
        <div class="grid mx-4 flex-grow h-200 card bg-base-300 rounded-box place-items-center ">
            <div class="card  bg-base-65 shadow-xl">
                <figure><img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" alt="Pyhton Project" class="w-44 py-4" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Git</h2>
                  
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Try Now</button>
                  </div>
                </div>
              </div>
        </div>
        <div class="grid flex-grow h-200 card bg-base-300 rounded-box place-items-center py-8">
            <div class="card w-50 bg-base-65 shadow-xl">
                <figure><img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" alt="Blockchain Project" class="w-44"/></figure>
                <div class="card-body">
                  <h2 class="card-title">Bash</h2>
                  <p></p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Try Now</button>
                  </div>
                </div>
              </div>
        </div>
    </div>
  </div>
    <div class="pt-40">
    <Footer class="sticky pt-10"/></div>
</div>    

</html>
