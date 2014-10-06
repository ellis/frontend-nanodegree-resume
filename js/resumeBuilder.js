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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var work = {};
work.position = "PhD candidate";
work.employer = "ETHZ Zürich";
work.city = "Basel, Switzerland";

var education = {};
education["name"] = "ETHZ Zürich";
education["years"] = "2007-2010";
education["city"] = "Zürich, Switzerland";

$("#header").prepend(formattedRole).prepend(formattedName);

$("#main")
  .append(HTMLemail.replace("%data%", bio.contacts.email))
  .append(HTMLskillsStart)
  //.append(HTMLskills.replace("%data%", bio.skills))
  .append(HTMLschoolStart)
  .append(HTMLschoolName.replace("%data%", education.name));

