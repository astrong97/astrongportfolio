<script>
import AboutMe from '@/components/about/AboutMe';
import AboutInfo from '@/components/about/AboutInfo';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutInfo,
	},
	data: () => {
		return {};
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
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About info -->
		<AboutInfo />

	</div>
</template>

<style scoped></style>
