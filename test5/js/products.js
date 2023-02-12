const d = new Date();
let day = d.getDay();
const opentimesEN =[
			"<a href='tel:+306955211939'>+30 6955211939</a>",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"<a href='tel:+306955211939'>+30 6955211939</a>"];
const opentimesGR =[
			"<a href='tel:+306955211939'>+30 6955211939</a>",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"<a href='tel:+306955211939'>+30 6955211939</a>"];
if (day >1 && day<6) {
			GreetEN = "Opening hours: ";
			GreetGR = "Ωράριο: "
} else {
			GreetEN = "Contact: ";
			GreetGR = "Επικοινωνία: ";
}
		
const text = {
	opentimes : {
			gr: GreetGR + opentimesGR[day],
			en: GreetEN + opentimesEN[day]
	}
};	
		
const elements = Object.getOwnPropertyNames(text);
generateTxt(lang);
function generateTxt(lang) {
	for (let x in elements) {
		document.getElementById("opentimes").innerHTML = text["opentimes"][lang];
	}
}