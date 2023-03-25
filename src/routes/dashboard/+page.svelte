
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

<body>
    <Navbar/>
    <div class=" p-8 flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-200 card bg-base-300 rounded-box place-items-center p-4">
            <div class="card w-50 bg-base-65 shadow-xl">
                <figure><img src="https://img.freepik.com/free-icon/snakes_318-368381.jpg" alt="Pyhton Project" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Project-1</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <a  href="/prokecy"><button class="btn btn-primary">Try Now</button></a>
                  </div>
                </div>
              </div>
        </div> 
    
        <div class="grid m-4 flex-grow h-200 card bg-base-300 rounded-box place-items-center p-8">
            <div class="card w-50 bg-base-65 shadow-xl">
                <figure><img src="https://cdn-icons-png.flaticon.com/512/643/643283.png?w=740&t=st=1679717052~exp=1679717652~hmac=db05d58adb1e77198d4657b8c269713699d5b20ba139552a26e3f373318c8ce1" alt="Pyhton Project" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Project-2</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Try Now</button>
                  </div>
                </div>
              </div>
        </div>
        <div class="grid flex-grow h-200 card bg-base-300 rounded-box place-items-center p-8">
            <div class="card w-50 bg-base-65 shadow-xl">
                <figure><img src="https://img.freepik.com/free-icon/snakes_318-368381.jpg" alt="Pyhton Project" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Project-3</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Try Now</button>
                  </div>
                </div>
              </div>
        </div>
    </div>
        
    
</body>

</html>
<Footer/>
