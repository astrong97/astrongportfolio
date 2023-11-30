<script>
import feather from 'feather-icons';
import library  from '../data/library';
import Button from '../components/reusable/Button.vue';

export default {
	components: {
	},
	data: () => {
		return {
            library,
            Button
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
    class="container mx-auto"
	>

    <router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
            <Button title="Restart"  />
	</router-link>
	</div>
</template>
