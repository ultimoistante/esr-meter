<script>
    let { data } = $props();
</script>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="materials">
    <div class="w-100">
        {#each data.paragraphs as p}
            <h2 class="mt-4 mb-4">{p.header}</h2>
            <ul>
                {#each p.list as list_item}
                    <li>
                        {@html list_item}
                    </li>
                {/each}
            </ul>
        {/each}
        <br />
        <br />
        {#each data.notes as note}
            <p>{@html note}</p>
        {/each}
    </div>
</section>
