var name = "Ellis Whitehead";
var role = "Software Engineer, Data Analyst, and Automation Specialist";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);
