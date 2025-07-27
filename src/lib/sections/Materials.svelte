<script>
    let { data } = $props();
</script>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="materials">
    <div class="w-100">
        {#each data.paragraphs as p}
            {#if p.header}
                <h2 class="mt-4 mb-4">{@html p.header}</h2>
            {/if}
            {#if p.subheader}
                <p>{@html p.subheader}</p>
            {/if}
            <ul>
                {#each p.list as list_item}
                    <li>
                        {@html list_item}
                    </li>
                {/each}
            </ul>
            {#if p.footer}
                <p>{@html p.footer}</p>
            {/if}
        {/each}
    </div>
</section>
