<template>
	<Project v-for="project in projects" :key="project.id" :project="project" />
</template>

<script>
import Project from "./Item.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
export default {
	components: { Project },
	setup() {
		const store = useStore();
		
		store.dispatch("getProjects");

		const projects = computed(() => store.state.project.items);

		return { projects };
	},
};
</script>

<style>
</style>