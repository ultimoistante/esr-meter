<script>
	let { items } = $props();
	//
	import { currentLocale } from "../i18n.js";
	//
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
	<a class="navbar-brand js-scroll-trigger" href="#info">
		<!-- <span class="d-none d-lg-block">
			<img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/images/profile.jpg" alt="" />
		</span> -->
	</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav" id="navbar-nav">
			{#each items as item}
				<li class="nav-item">
					<a class={item.class} href={item.href}>{item.caption}</a>
				</li>
			{/each}
		</ul>
		<!--  -->
	</div>
	<!-- language selector -->
	<div class="btn-group mb-4" role="group" aria-label="language button group">
		<button
			type="button"
			class="btn btn-outline-primary pt-1 pb-2"
			data-toggle="tooltip"
			title="language: switch to italian"
			onclick={() => {
				$currentLocale = "it";
			}}><img class={$currentLocale != "it" ? "image-inactive" : ""} src="assets/images/flags/it.svg" alt="" width="18px" /></button
		>
		<button
			type="button"
			class="btn btn-outline-primary pt-1 pb-2"
			data-toggle="tooltip"
			title="language: switch to english"
			onclick={() => {
				$currentLocale = "en";
			}}><img class={$currentLocale != "en" ? "image-inactive" : ""} src="assets/images/flags/gb.svg" alt="" width="18px" /></button
		>
	</div>
	<!--  -->
	<p class="mt-4 text-tiny">
		Made with <i class="fa fa-heart" style="color: red"></i>, Bootstrap and Svelte
	</p>
</nav>
