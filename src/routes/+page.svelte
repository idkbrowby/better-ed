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
        <div class="hero min-h-screen " style="background-image: url({frontpage});">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md backdrop-blur-xl p-4 rounded-xl">
                <h1 class="mb-5 text-5xl font-bold text-primary">Welcome to our website!</h1>
                <p class="mb-5 font-semibold "> We are dedicated to helping you achieve success in your project development journey. Our website provides a unique interactive playground where users can learn and experiment with different development concepts in a fun and engaging way. We believe that learning should be a hands-on experience, which is why we have created an environment that allows you to practice and apply your knowledge in real-time. Our platform also helps you set milestones for your project development, ensuring that you stay on track and achieve your goals. Whether you're a beginner or an experienced developer, our website is the perfect resource to help you develop your skills and reach your full potential.</p>
                <a href="/dashboard"><button class="btn btn-primary" >Get Started</button></a>
            </div>
            </div>
        </div>
    </body>
<Footer/>