// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Want2Remember Mobile App',
		category: 'Mobile Application/Technical Documentation',
		img: require('@/assets/images/w2lproject-1.jpg'),
		href: '/projects/w2l-project',
	},
	{
		id: 2,
		title: 'Technical Documentation Wiki',
		category: 'Technical Documentation',
		img: require('@/assets/images/wiki-project-1.jpg'),
		href: '/projects/wiki-project',
	},
	{
		id: 3,
		title: 'Unity RPG Project',
		category: 'Game Development',
		img: require('@/assets/images/unity-project-1.jpg'),
		href: '/projects/unity-project',
	},
	/*{
		id: 4,
		title: 'Choose Your Adventure Game',
		category: 'Game Development',
		img: require('@/assets/images/mobile-project-2.jpg'),
		href: '/projects/cya-project',
	},*/
];

export default projects;
