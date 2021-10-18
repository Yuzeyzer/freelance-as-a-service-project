import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import CreateProject from '../views/CreateProject.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
	},
	{
		path: '/create-project',
		name: 'CreateProject',
		component: CreateProject,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
