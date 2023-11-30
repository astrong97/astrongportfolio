<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Alexandra\'s online portfolio',
			author: 'Alexandra Strong',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="/"
				target="__blank"
				class="font-general-medium hover:underline hover:text-teal-600 dark:hover:text-teal-300 duration-500"
			>
				{{ projectName }}
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
