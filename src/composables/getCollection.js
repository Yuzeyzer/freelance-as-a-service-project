import { firestore } from '@/firebase/config'
import { ref } from 'vue'
import { getDocs, collection } from 'firebase/firestore'

const getCollection = async (collectionName) => {
	const documents = ref([])
	const error = ref(null)

	try {
		const collectionRef = collection(firestore, collectionName)
		const snapshots = await getDocs(collectionRef)

		snapshots.forEach((doc) => {
			documents.value = [...documents.value, { id: doc.id, ...doc.data() }]
		})
	} catch (err) {
		error.value = err.message
	}

	return { documents, error }
}

export default getCollection
