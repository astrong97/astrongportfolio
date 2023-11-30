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
        Button,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Online Portfolio Technical Documention Wiki',
				singleProjectDate: 'November 2023 - Ongoing',
				singleProjectTag: 'Technical Documentation',
			},
			projectImages: [
				{
					id: 1,
					title: 'Portfolio Technical Documention Wiki',
					img: require('@/assets/images/wiki-project-1.jpg'),
				},
                {
					id: 2,
					title: 'Portfolio Technical Documention Wiki',
					img: require('@/assets/images/wiki-project-2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'Personal Portfolio Wiki',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Portfolio GitHub Wiki',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Technical Documentation',
					},
					{
						id: 3,
						title: 'Website',
						details: 'github.com/astrong97/Portfolio-Technical-Documentation/wiki',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'The goals for this project are to practice my skills in GitHub documentation by creating a clear and concise way to understand the requirements and functions of my online portfolio.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'GitHub',
							'Markdown',
						],
					},
				],
				projectDetailsHeading: 'Background and Work',
				projectDetails: [
					{
						id: 1,
						details:
							'As I mention in my bio, I consider myself a technical writing enthusiast because technical documentation is essential to not only users of the application, but to developers as well. Whether it be user guides, API documentation, or GitHub wiki, technical documentation helps the user find an answer to any question they may have about an application or software. Technical documentation provides efficiency and clarity, and it is absolutely necessary when providing a quality product.',
					},
					{
						id: 2,
						details:
							'As my interest in technical writing grew, I bought courses and books to increase my knowledge on the subject. Part of those courses included GitHub documentation, which I was very eager too get started on. I was able to create an organized table of contents and seperate sections that would demonstrate features such as requirements and purposes of the online portfolio.',
					},
					{
						id: 3,
						details:
							'As this is in progress, I plan on adding user diagrams and completing the table of contents to include all features of the portfolio.',
					},
				],
                projectSite: 'https://github.com/astrong97/Portfolio-Technical-Documentation/wiki',
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
						title: 'Unity RPG Project',
						img: require('@/assets/images/unity-project-1.jpg'),
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
