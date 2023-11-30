<script>
export default {
	data: () => {
		return {
			degreeTitle: 'from California State University, Los Angeles',
			alumniTitle: 'of STEM Advantage',
			trophyTitle: 'of the VGM Traveling Trophy',
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div
			class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
		>
			<div class="mb-20 sm:mb-0">
				<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
					Program Alumni
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>{{ alumniTitle }}</span
				>
			</div>

			<div class="mb-20 sm:mb-0">
				<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
					B.S. in Computer Science
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ degreeTitle }}
				</span>
			</div>

			<div class="mb-20 sm:mb-0">
				<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
					Award Recipient
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>{{ trophyTitle }}</span
				>
			</div>
		</div>
	</div>
</template>
