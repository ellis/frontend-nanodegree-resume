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
			name: "(during high school) Lansing Community College",
			city: "Lansing, MI, USA",
			degree: "Associate",
			major: ["Electronics", "Computer Science"]
		},
		{
			name: "Michigan State University",
			city: "Lansing, MI, USA",
			degree: "BA",
			major: ["Interdisciplinary Humanities"],
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole).prepend(formattedName);

$("#topContacts")
  .append(HTMLemail.replace("%data%", bio.contacts.email))
  .append(HTMLgithub.replace("%data%", bio.contacts.github))

$("#main")
  .append(HTMLschoolStart)
  .append(HTMLschoolName.replace("%data%", education.name));

if (bio.skills && bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

function displayWork() {
	if (work && work.jobs && work.jobs.length > 0) {
		for (i in work.jobs) {
			var job = work.jobs[i];
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last")
				.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title))
				.append(HTMLworkDates.replace("%data%", job.dates))
				.append(HTMLworkLocation.replace("%data%", job.city))
				.append(HTMLworkDescription.replace("%data%", job.description));
		}
	}
}

displayWork();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(s) {
	var l = s.split(' ');
	console.log(l);
	for (var i = 0; i <= l.length - 2; i++) {
		l[i] = l[i][0].toUpperCase() + l[i].substr(1);
	}
	console.log(l);
	l[l.length - 1] = l[l.length - 1].toUpperCase();
	console.log(l);
	var s2 = l.join(" ");
	return s2;
}
