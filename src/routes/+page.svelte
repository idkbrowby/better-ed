<script>
    import Navbar from "../lib/components/navbar.svelte";
    import Footer from "../lib/components/footer.svelte";
    let frontpage="../../landingpage.png";
    let theme;
    // let theme = localStorage.getItem('data-theme');
    // const changeThemeToDark = () => {
    //     document.documentElement.setAttribute("data-theme", "night") // set theme to dark
    //     localStorage.setItem("data-theme", "night") // save theme to local storage
    // }

    // const changeThemeToLight = () => {
    //     document.documentElement.setAttribute("data-theme", "pastel") // set theme light
    //     localStorage.setItem("data-theme", 'pastel') // save theme to local storage
    // }

</script>
<body data-theme={theme}>
    
    <Navbar bind:theme={theme}/>
    <!-- <main>
        <div class="flex ">
            <div class="p-8 w-1/2 text-xl">
                <h1
                    class="py-10 basis-1/6 text-5xl   font-extrabold text-start  "
                >
                    Welcome !!
                </h1>
                <h2>
                    Prepare for a career in tech by learning by building projects. 
                    Global Campus will help you get the practical industry knowledge you need by giving you access to industry tools, events, learning resources and a growing student community.
                </h2>
            </div>
            <img src={frontpage} alt="peoplelearing" class="w-3/4">
    
        </div>
    </main> -->
    <div class="hero min-h-screen" style="background-image: url({frontpage});">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
</body>
<Footer/>