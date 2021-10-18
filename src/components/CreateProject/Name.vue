<template>
	<div class="create-project">
		<div class="create-project__wrapper p-60">
			<h3 class="create-project__name">Name of the project</h3>
			<form>
				<label
					>Write the name of your project. The name should attract attention and
					reflect the essence of the project.</label
				>
				<input type="text" placeholder="Name of the project" required />
				<span>3/100 Characters (minimum 5)</span>
			</form>
			<label>Some good examples:</label>
			<div class="create-project__examples">
				<span>Technical Design</span>
				<span>We are looking for a Website Promotion Specialist</span>
				<span>Create 2d Animations</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";

.create-project {
	&__wrapper {
		max-width: vw(825);
		margin: auto;
    background-color: $bg-white;
	}
}
</style>