<script>
    import Navbar from "../lib/components/navbar.svelte";
    let frontpage="../../landingpage.png";
    let theme;
</script>
<html lang="en" data-theme={theme}>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head><body data-theme={theme}>
    
    <Navbar bind:theme={theme}/>
    <main>
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
    </main>
</body>
    </html>