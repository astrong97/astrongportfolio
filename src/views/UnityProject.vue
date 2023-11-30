<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import Button from '../components/reusable/Button.vue';


export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
        Button
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Unity RPG Project',
				singleProjectDate: 'August 2021 - Ongoing',
				singleProjectTag: 'Game Development',
			},
			projectImages: [
				{
					id: 1,
					title: 'Unity RPG Project',
					img: require('@/assets/images/unity-project-1.jpg'),
				},
                {
					id: 2,
					title: 'Unity RPG Project',
					img: require('@/assets/images/unity-project-2.gif'),
				},
			],
			projectInfo: {
				clientHeading: 'Personal Project',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Unity RPG Project',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Video Games',
					},
					{
						id: 3,
						title: 'Website',
						details: 'N/A',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'The goals for this project was to learn video game development skills by creating a simple 2D Unity game.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Unity',
							'C#',
							'GIMP Image Editor',
						],
					},
				],
				projectDetailsHeading: 'Background and Work',
				projectDetails: [
					{
						id: 1,
						details:
							'I have a very strong passion for game design and development. There is so much creativity that comes with creating games, and that is something I admire about each game I play. This is what inspired me to start this project. I wanted to create a game where characters from different places in life come together accomplish a mission. As an avid creative writer, I felt this was a good opportunity to put my writing and coding skills together in the form of a role-playing game (RPG).',
					},
					{
						id: 2,
						details:
							'As for the development progress, a decent amount of basic artwork is done. This is just enough for me to get some scripting and maps created. I was able to use C# to create scripts for character movement and camera movement. With a mix of colliders and layering, I\'ve been able to create a small, simple, interactive map where the main character can explore.',
                    },
					{
						id: 3,
						details:
							'My next steps are to create room transitions, dialogue, and an inventory system. I\'m currently working through a Udemy course on these topics to further my knowledge and get more features accomplished.',
					},
				],
                projectSite: '#',
            },
			relatedProject: {
				relatedProjectsHeading: 'Other Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Want2Remember Mobile App',
						img: require('@/assets/images/w2lproject-1.jpg'),
					},
                    {
						id: 2,
						title: 'Technical Writing Project',
						img: require('@/assets/images/wiki-project-1.jpg'),
					},
				],
			},
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
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />

        <!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<Button title="See Projects" />
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
