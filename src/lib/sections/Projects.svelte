<script>
	import { onMount } from "svelte";
	import GLightbox from "glightbox";
	//
	let { data } = $props();
	//
	onMount(() => {
		// instance of GLightbox component (https://github.com/biati-digital/glightbox)
		const lightbox = GLightbox({
			touchNavigation: true,
			loop: true,
			autoplayVideos: true,
		});
	});
</script>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
	<div class="w-100">
		<h2 class="mb-5">{data.header}</h2>
		<!--  -->
		{#each data.items as item}
			<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
				<div class="resume-content">
					<h3 class="mb-0">{item.title}</h3>
					<div class="subheading mb-3">[ {item.customer} ]</div>
					<p>{@html item.description}</p>
					<p>
						{#each item.tags as tag}
							<span class="badge bg-info me-1">{tag}</span>
						{/each}
					</p>
					<div class="image-set">
						{#each item.media.images as image}
							<a href={image.src} class="glightbox thumbnail-container" data-gallery={item.title}>
								<img src={image.src} alt={image.alt} class="thumbnail" />
							</a>
						{/each}
					</div>
				</div>
				<div class="resume-date text-end">
					<span class="badge badge-date">{item.timespan}</span>
					<p><span class="badge bg-warning text-bg-info"><i>{item.company}</i></span></p>
				</div>
			</div>
			<hr class="mb-4" />
		{/each}
	</div>
</section>
