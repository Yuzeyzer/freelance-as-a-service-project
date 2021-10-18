import { createStore } from 'vuex'
import getCollection from '@/composables/getCollection'

const projects = {
	state: () => ({
		items: [],
	}),
	mutations: {
    GET_PROJECTS(state, projects) {
      state.items = projects
    }
  },
	actions: {
		async getProjects({commit}) {
			const { documents, error } = await getCollection('projects')
			if (error.value) {
        throw new Error(error.value)
      }
      commit('GET_PROJECTS',documents)
		},
	},
}

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		project: projects,
	},
})
