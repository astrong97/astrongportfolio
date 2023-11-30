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
				singleProjectTitle: 'Want2Remember Mobile App',
				singleProjectDate: 'August 2021 - May 2022',
				singleProjectTag: 'Mobile Application/Technical Documentation',
			},
			projectImages: [
				{
					id: 1,
					title: 'Want2Remember Mobile App Project',
					img: require('@/assets/images/w2lproject-1.jpg'),
				},
                {
					id: 2,
					title: 'Want2Remember Mobile App Project',
					img: require('@/assets/images/w2lproject-2.jpg'),
				},
                {
					id: 3,
					title: 'Want2Remember Mobile App Project',
					img: require('@/assets/images/w2lproject-3.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About We 2 Link',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'We 2 Link',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Health - Cognitive Impairment Assistance',
					},
					{
						id: 3,
						title: 'Website',
						details: 'ascent.cysun.org/project',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'The goals for the Want2Remember app are to support independent living, reduce social isolation, improve personal safety, reduce caregiver burden, allow for return to work, and improve medical support and advocacy for those with cognitive impairment.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'React Native',
							'Firebase',
							'JavaScript',
							'React Native',
							'JIRA',
							'Redux',
						],
					},
				],
				projectDetailsHeading: 'Background and Work',
				projectDetails: [
					{
						id: 1,
						details:
							'We2Link\'s goal is to develop a mobile application called Want2Remember. The founder, Michael C. Malone, founded We2Link after he suffered from a traumatic brain injury while serving for the U.S. Army. He slowly discovered he was having issues with learning new things, recalling names, even remembering faces. This led to the idea for the Want2Remember mobile application.',
					},
					{
						id: 2,
						details:
							'During my time with We2Link and the Want 2 Remember mobile application, I worked on translating UI/UX designs to functional code, and creating technical documentation to guide and document the requirements and process of creating the app. I was also in charge of responding to user feedback and suggestions of the Want 2 Remember mobile app.',
					},
					{
						id: 3,
						details:
                            'My work on the Want 2 Remember app was very important to me for various reasons. I was able to hone my skills in front-end development, which I very much enjoyed contributing to. It was a pleasure seeing the UI/UX mockups come to life using Javascript and React Native. I also took pride in the fact that this app would serve to help those with cognitive impairments. It is always a motivating factor when something I\'m creating will be helping those in need of innovative services.',
					},
				],
                projectSite: 'https://ascent.cysun.org/project/project/view/158',
            },
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Unity Project',
						img: require('@/assets/images/unity-project-1.jpg'),
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
