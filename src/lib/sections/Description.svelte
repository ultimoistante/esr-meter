<script>
    let { data } = $props();
</script>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="description">
    <div class="w-100">
        <h2 class="mt-4 mb-4">{data.header}</h2>
        {#each data.images as image}
            <div class="">
                <img src={image.src} alt={image.text} />
                <p>{@html image.text}</p>
            </div>
        {/each}
    </div>
</section>
