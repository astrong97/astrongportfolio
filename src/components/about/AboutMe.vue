<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I\'m Alexandra Strong, a developer and technical writer with experience in C#, Groovy, Java, Javascript, and Typescript. I have been working at different divisions of VGM Group, Inc. since May of 2022. Some of the things I\'ve done on a daily basis while employed at VGM, Group Inc. are creating custom components for Oracle Products using Java and Groovy, creating documentation for Windows/Linux system protocols and server patching, and creating new interfaces and features for IT applications using Typescript and Vue.'
				},
				{
					id: 2,
					bio:
						'In my previous role as a Programmer and Document Lead at Want 2 Remember, my daily tasks consisted of creating technical documents such as the SRD and SDD, creating application flow diagrams, refactoring code for efficiency, and co-led the team while keeping track of team progress with scrum boards.',
				},
				{
					id: 3,
					bio:
						'I consider myself a technical writing enthusiast because technical documentation is essential to not only users of the application, but to developers as well. Whether it be user guides, API documentation, or GitHub wiki, technical documentation helps the user find an answer to any question they may have about an application or software. Technical documentation provides efficiency and clarity, and it is absolutely necessary when providing a quality product.',
				},
				{
					id: 4,
					bio:
						'Some of my interests include video games, exercising, and traveling. I have dabbled a bit in game development, which you can check out in the Projects section of my portfolio. Maintaining a healthy lifestyle is paramount, especially when my career consists of sitting at a desk a significant amount of the day. It\'s important to keep track of your health so you can always bring the best version of yourself to work. My passion for travel goes hand in hand with my pursuit of inspiration. Venturing to new destinations helps to expand my perspectives, as well as ignites ideas for potential future side projects. Being able to experience diverse cultures and landscapes continually fuels my creative aspirations.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/astrongheadshot1.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
