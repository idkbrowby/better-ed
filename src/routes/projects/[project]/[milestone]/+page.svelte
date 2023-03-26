<script>
    import Navbar from "$lib/components/navbar.svelte";
    import Problem from "$lib/components/problem.svelte";
    let description = "The docker run command is the command used to launch Docker containers. Once the container is running, you can interact with it or run commands within it.You can read more about the command here: <a href=https://docs.docker.com/language/golang/run-containers/>The Docker Docs<a><p class=my-2>We will be learning how to create the docker run command by first executing arbitrary commands that we pass in. Later we will pass in an image, but we will implement that in another milestone.<p>"
    export let data;
</script>

<div class="min-h-full">
<Navbar />
<Problem class="my-10" id={data.milestone} title="Implementing the run command." description={description} totalMilestones={8} />

</div>