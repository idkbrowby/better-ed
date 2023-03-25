<script>
    import Navbar from "$lib/components/navbar.svelte";
    import Problem from "$lib/components/problem.svelte";
    let description = "Wow what an epic and succesfully functioning project 10/10"
</script>


<Navbar />
<Problem class="my-10" id={0} title="Example" description={description} totalMilestones={5} />