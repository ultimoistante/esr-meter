<script>
	let { data } = $props();
</script>

<section class="mt-3">
	<img src="assets/images/cover.jpg" width="100%" class="object-fit-cover" alt="" />
</section>

<!-- <header class="object-fit-fill" style="background-image: url('assets/images/cover.jpg');">
	<div class="overlay"></div>
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-10 mx-auto">
				<div class="site-heading">
					<h1>Clean Blog</h1>
					<span class="subheading">Blog Theme by Start Bootstrap</span>
				</div>
			</div>
		</div>
	</div>
</header> -->
<!-- <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="info">
	<div class="w-100">
		<h1 class="mb-0">
			{data.name}
			<span class="text-primary">{data.surname}</span>
		</h1>
		<div class="subheading mb-5">
			{data.location} · {data.phone} ·
			<a href="mailto:{data.email}">{data.email}</a>
		</div>
		<div class="social-icons">
			{#each data.links as link}
				<a href={link.href} target="_new">
					<i class={link.iconClass}></i>
				</a>
			{/each}
		</div>
		<br />
		<br />
		<p>
			{#each data.files as file}
				<a href={file.href} target="_new" class="btn btn-info" role="button">{file.caption}</a>
			{/each}
		</p>
	</div>
</section> -->
