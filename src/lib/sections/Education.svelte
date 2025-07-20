<script>
	let { data } = $props();
</script>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
	<div class="w-100">
		<h2 class="mb-5">{data.header}</h2>

		{#each data.items as item}
			<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
				<div class="resume-content">
					<h3 class="mb-0">{item.header}</h3>
					<div class="subheading mb-3">{item.subheader}</div>
					<div>{item.description}</div>
				</div>
				<div class="resume-date text-md-right">
					<span class="badge badge-date">{item.timespan}</span>
				</div>
			</div>
		{/each}
	</div>
</section>
