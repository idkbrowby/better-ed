<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { python } from "@codemirror/lang-python";
    import { oneDark } from "@codemirror/theme-one-dark";

    export let id;
    export let title;
    export let description;
    // export let sampleCases;
    export let totalMilestones;

    let code = `import os
import subprocess

def main():
    if os.sys.argv[1] == "run":
        run()
    else:
        print("Invalid command.")

def run():
    cmd = subprocess.Popen(os.sys.argv[2:], stdout=subprocess.PIPE)
    output, error = cmd.communicate()
    if error:
        print(error.decode())
    else:
        print(output.decode())

if __name__ == "__main__":
    main()
    `
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
    <div class="flex  justify-evenly align-middle py-10">
        <div class="flex flex-col w-1/3 ">
          <h1 class="font-bold text-5xl"> {title}</h1>
          <p class="my-10 text-xl">
            {@html description}
          </p>

        </div>
        <div class="w-1/3 min-h-40  ">
        <CodeMirror bind:value={code} lang={python()} theme={oneDark} />
        <button class="btn btn-block bottom-0">Submit</button>
    </div>
    </div>
</div>



