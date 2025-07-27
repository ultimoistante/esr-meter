<script>
	import { localizedContent, currentLocale, availableLocales } from "./i18n";
	import NavBar from "./lib/NavBar.svelte";
	import CoverPage from "./lib/sections/Cover.svelte";
	import DescriptionPage from "./lib/sections/Description.svelte";
	import MaterialsPage from "./lib/sections/Materials.svelte";
	import PreparationPage from "./lib/sections/Preparation.svelte";
	import AssemblyPage from "./lib/sections/Assembly.svelte";
	import UsagePage from "./lib/sections/Usage.svelte";
	// import WorkExperienceSection from "./lib/sections/WorkExperience.svelte";
	// import EducationSection from "./lib/sections/Education.svelte";
	// import SkillsSection from "./lib/sections/Skills.svelte";
	// import ProjectsSection from "./lib/sections/Projects.svelte";
</script>

<main>
	<NavBar items={$localizedContent("navbar.items", [])} />
	<div class="container-fluid p-0">
		<CoverPage data={$localizedContent("sections.cover", {})} />
		<hr class="m-0" />
		<DescriptionPage data={$localizedContent("sections.description", {})} />
		<hr class="m-0" />
		<MaterialsPage data={$localizedContent("sections.materials", {})} />
		<hr class="m-0" />
		<PreparationPage data={$localizedContent("sections.preparation", {})} />
		<hr class="m-0" />
		<AssemblyPage data={$localizedContent("sections.assembly", {})} />
		<hr class="m-0" />
		<UsagePage data={$localizedContent("sections.usage", {})} />
	</div>
</main>
