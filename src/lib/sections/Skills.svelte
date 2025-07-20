<script>
	let { data } = $props();
</script>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
	<div class="w-100">
		<h2 class="mb-5">{data.header}</h2>
		<!--  -->
		{#each data.summary.sections as summarySection}
			<div class="subheading mb-3">{summarySection.header}</div>
			<ul class="list-inline dev-icons">
				{#each summarySection.icons as icon}
					<li class="list-inline-item">
						<img src={icon.src} alt={icon.name} data-toggle="tooltip" title={icon.name} />
					</li>
				{/each}
			</ul>
		{/each}
		<!--  -->
		<br />
		{#each data.sections as section}
			<div class="subheading mb-1">{section.name}</div>
			<ul>
				{#each section.details as detail}
					<li>{detail}</li>
				{/each}
			</ul>
		{/each}
	</div>
</section>
