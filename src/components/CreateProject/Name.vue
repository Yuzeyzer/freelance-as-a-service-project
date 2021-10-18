<template>
	<div class="create-project">
		<div class="create-project__wrapper p-60">
			<h3
				@click="toggleBlock = !toggleBlock"
				class="create-project__name"
				:class="{ active: toggleBlock }"
			>
				Name of the project
				<img :class="{ active: toggleBlock }" src="./icons/arrow.svg" alt="" />
			</h3>
			<div v-if="toggleBlock">
				<form>
					<label
						>Write the name of your project. The name should attract attention
						and reflect the essence of the project.</label
					>
					<input type="text" placeholder="Name of the project" required />
					<span>3/100 Characters (minimum 5)</span>
				</form>
				<label class="create-project__label">Some good examples:</label>
				<div class="create-project__examples">
					<span>Technical Design</span>
					<span>We are looking for a Website Promotion Specialist</span>
					<span>Create 2d Animations</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
	setup() {
		const toggleBlock = ref(false);

		return { toggleBlock };
	},
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";

.create-project {
	&__wrapper {
		max-width: vw(825);
		margin: auto;
		background-color: $bg-white;
	}
	&__name {
		@include font(vw(16), 700);
		position: relative;
		color: $color-blue-50;
		cursor: pointer;
		&.active {
			margin-bottom: vw(30);
		}
		img {
			position: absolute;
			top: 50%;
			right: 0;
			height: vw(6.5);
			width: vw(11);
			transform: translateY(-50%) rotate(180deg);
			transition: 0.3s;
			&.active {
				transform: translateY(-50%);
			}
		}
	}
	form {
		label {
			@include font(vw(13), 700);
			display: block;
			color: $color-blue-70;
			margin-bottom: vw(30);
		}
		input {
			@include font(vw(12), 700);
			display: block;
			width: 100%;
			padding: vw(15);
			background: $bg-white;
			border: 2px solid $bg-blue-90;
			box-shadow: 0 2px vw(5) rgba(54, 61, 77, 0.03);
			border-radius: vw(5);
			color: $color-blue-70;
			outline: none;
			margin-bottom: vw(15);
			box-sizing: border-box;
		}
		span {
			@include font(vw(10), 700);
			display: block;
			text-align: right;
			color: $color-blue-70;
		}
	}
	&__label {
		@include font(vw(13), 700);
		display: inline-block;
		margin-top: vw(30);
		color: $color-blue-70;
	}
	&__examples {
		display: flex;
		flex-wrap: wrap;
		padding-top: vw(25);
		span {
			@include font(vw(12), 700);
			display: inline-block;
			margin-right: vw(15);
			margin-bottom: vw(15);
			background: $bg-blue-90;
			border-radius: vw(5);
			padding: vw(10) vw(20);
			color: $color-blue-70;
		}
	}
}
</style>