<script>
	let { data } = $props();
</script>

<section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="work_experience">
	<div class="w-100">
		<h2 class="mb-5">{data.header}</h2>

		{#each data.items as item}
			<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
				<div class="resume-content">
					<h3 class="mb-0">{item.role}</h3>
					<div class="subheading mb-3">{item.company}</div>
					<p>{item.description}</p>
					<div>
						{#each item.tags as tag}
							<span class="badge text-bg-primary me-1">{tag}</span>
						{/each}
					</div>
				</div>
				<div class="resume-date text-md-right">
					<span class="badge badge-date">{item.timespan}</span>
				</div>
			</div>
		{/each}
	</div>
</section>
