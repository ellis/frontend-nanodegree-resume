var bio = {
	name: "Ellis Whitehead",
	role: "Software Engineer, Data Analyst, and Automation Specialist",
	contacts: {
		email: "ellis.whitehead@ellisw.net",
		github: "ellis",
		location: "Germany/Switzerland"
	},
	welcomeMessage: "be happy",
	skills: [
		"Software Engineering",
		"Data Analysis",
		"Statistics",
		"Artificial Intelligence",
		"Automated Planning",
		"Robotics"
	],
	bioPic: "images/fry.jpg"
};

var work = {
	jobs: [
		{
			employer: "ETHZ Zürich",
			title: "PhD candidate",
			description: "lab automation",
			dates: "2011 - present",
			city: "Basel, Switzerland"
		}
	]
};

var education = {
	"schools": [
		{
			name: "Lansing Community College (during high school)",
			city: "Lansing, MI, USA",
			degree: "Associate",
			major: ["Electronics", "Computer Science"]
		},
		{
			name: "Michigan State University",
			city: "Lansing, MI, USA",
			degree: "BA",
			major: ["Interdisciplinary Humanities"]
			minors: ["Computer Science", "Linguistics", "German"]
		},
		{
			name: "ETHZ Zürich",
			city: "Zürich, Switzerland",
			degree: "MS",
			major: ["Bioinformatics"]
		}
	]
};

var projects = {
	projects: [
		{
			title: "funky",
			dates: "2014",
			description: "funky funky"
		}
	]
};

/*
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole).prepend(formattedName);

$("#main")
  .append(HTMLemail.replace("%data%", bio.contacts.email))
  .append(HTMLskillsStart)
  //.append(HTMLskills.replace("%data%", bio.skills))
  .append(HTMLschoolStart)
  .append(HTMLschoolName.replace("%data%", education.name));
*/

