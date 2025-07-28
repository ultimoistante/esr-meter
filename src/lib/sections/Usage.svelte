<script>
    let { data } = $props();
</script>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="usage">
    <div class="w-100">
        <h2 class="pt-4 mb-4">{data.header}</h2>
        {#each data.steps as step}
            <h3>{@html step.header}</h3>
            <h5>{@html step.subheader}</h5>
            {#each step.images as image}
                <div class="pt-4 mb-4">
                    <img src={image.src} alt={image.text} width="100%" />
                    <p>{@html image.text}</p>
                </div>
            {/each}
        {/each}
    </div>
</section>
