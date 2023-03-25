<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { python } from "@codemirror/lang-python";
    import { oneDark } from "@codemirror/theme-one-dark";

    export let id;
    export let title;
    export let description;
    // export let sampleCases;
    export let totalMilestones;

    let code = `"""\nWelcome to the BetterEd Editor!\nWrite your solution in Python 3 here.\n"""`
    let steps = [...Array(totalMilestones).keys()];
</script>

<div class="flex flex-col min-w-full">
    <div class="flex justify-center py-10">
        <ul class="steps ">
            {#each steps as step}
                {#if step < id}
                    <li class="step step-primary"></li>
                {:else}
                    <li class="step"></li>
                {/if}
            {/each}
          </ul>
    </div>
    <div class="flex  justify-evenly align-middle py-10 ">
        <div class="flex flex-col">
            <h1 class="text-3xl font-extrabold">{title}</h1>
            <p>{description}</p>
        </div>
        <div class="w-1/3 min-h-40 border-2 border-white ">
        <CodeMirror bind:value={code} lang={python()} theme={oneDark} />
        <button class="btn btn-block">Submit</button>
    </div>
    </div>
</div>



