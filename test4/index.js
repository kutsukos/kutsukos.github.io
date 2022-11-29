const d = new Date();
		let day = d.getDay();
		const opentimesEN =[
			"Closed",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"08:00 am - 04:00 pm",
			"Closed"];
		const opentimesGR =[
			"Κλειστά",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"08:00 πμ - 04:00 μμ",
			"Κλειστά"];
		if (day >1 && day<6) {
			GreetEN = "Open today: ";
			GreetGR = "Ανοιχτά σήμερα: "
		} else {
			GreetEN = "Today: ";
			GreetGR = "Σήμερα: ";
		}
		
		const text = {
		  opentimes : {
			gr: GreetGR + opentimesGR[day],
			en: GreetEN + opentimesEN[day]
		  },
		  language_text : {
			gr : "English",
			en : "Ελληνικά"
		  },
		  title : {
			gr : "Δασικά Προϊόντα Α.Ε.",
			en : "Forest Products S.A."
		  },
		  title1 : {
			gr : "Δασικά Προϊόντα Α.Ε.",
			en : "Forest Products S.A."
		  },
		  aboutustitle1 : {
			gr : "Σχετικά με εμάς",
			en : "About us"
		  },
		  aboutustitle : {
			gr : "Σχετικά με εμάς",
			en : "About us"
		  },
		  aboutus : {
			gr : "Η εταιρεία Δασικά Προϊόντα Α.Ε. δραστηριοποιείται πάνω από 40 χρόνια στην Ελληνική αγορά σαν αντιπρόσωπος Ξυλείας και προϊόντων Ξύλου.</br>Αρχικά εκπροσωπεί Οίκους από την Σουηδία και την Φιλανδία και στα επόμενα χρόνια επεκτείνει τις συνεργασίες της στην Βόρεια Αμερική, Ασία, Κεντρική Ευρώπη, Νότια Αμερική και Αφρική.</br>Οι κύριες αγορές που απευθυνόμαστε είναι η Ελλάδα, η Αλβανία, άλλες Βαλκανικές χώρες ενώ η μητρική  εταιρεία, Theodoridis AB. Στοκχόλμης Σουηδίας δραστηριοποιείται επίσης στην Μέση Ανατολή και στη Βόρεια Αφρική.",
			en : "Forest Products S.A. is a timber trading agency in Athens, Greece, operating for over 40 years in the Greek timber market, working in close liaison with Theodoridis AB of Stockholm, Sweden.</br> We began our operations representing sawmills from Scandinavia, and in the following years gradually expanded our business sourcing timber and wood products from North America, Europe, South America, Asia and Africa.</br> Our target markets are Greece, Albania, Romania and other Balkan countries, while our mother company, Theodoridis AB, operates also in the Middle East and North Africa markets."
		  },
		  productstitle1 : {
			gr : "Προϊόντα",
			en : "Products"
		  },
		  contacttitle1 : {
			gr : "Επικοινωνία",
			en : "Contact us"
		  },
		  subtitle : {
			gr : "Αντιπροσωπείες Ξυλείας",
			en : "Timber Agencies"
		  },
		  contacttitle : {
			gr : "Επικοινωνία",
			en : "Contact"
		  },
		  contacttext : {
			gr: "Δασικά Προϊόντα Α.Ε.</br>Λεωφ. Κηφισίας 22</br>Μαρούσι 15125,</br>Αθήνα, Ελλάδα</br>Τηλ.+30 2106843550, +30 2106840260,</br>Whatsapp : +30 6955211939</br><a href=\"mailto:mail@forestproductsagencies-gr.com\" style=\"color:white\" >mail@forestproductsagencies-gr.com</a></br>ΑΦΜ: 094282650 ΦΑΕΕ ΑΘΗΝΩΝ",
			en: "Forest Products S.A.</br>22 Kifisias Ave.</br>Maroussi 15125,</br>Athens Greece</br>Tel.+30 2106843550, +30 2106840260,</br>Whatsapp : +30 6955211939</br><a href=\"mailto:mail@forestproductsagencies-gr.com\" style=\"color:white\" >mail@forestproductsagencies-gr.com</a></br>ΑΦΜ: 094282650 ΦΑΕΕ ΑΘΗΝΩΝ"
		  },
		  sizetitle : {
			gr: "Διατομές-Μήκη",
			en : "Sizes"
		  },
		  sizetext : {
			  gr : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			  en : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		  },
		  workhourstitle : {
		  gr : "Ωρες Λειτουργίας",
		  en : "Working Hours"
		  },
		  workhoursrow1text :{
			gr : "Δευτέρα-Παρασκευή",
			en : "Monday-Friday"
		  },
		  workhoursrow1val : {
			gr : "08:00 πμ - 04:00 μμ",
			en : "08:00 am - 04:00 pm"
		  },
		  workhoursrow2text :{
			gr : "Σάββατο-Κυριακή",
			en : "Saturday-Sunday"
		  },
		  workhoursrow2val : {
			gr : "Κλειστά",
			en : "Closed"
		  },
		  aboutusname1 : {
			gr : "Κεσίσογλου Κωνσταντίνος",
			en : "Kesisoglou Konstantinos"
		  },
		  aboutusname2 : {
			gr : "Κεσίσογλου Ιωάννης",
			en : "Kesisoglou Ioannis"
		  }
		};
		
		document.getElementById("language_text").onclick = function() {changelag()};
		let lang="gr"
		function changelag (){
			if (lang == "gr" ) {
				lang="en"
			} else {
				lang="gr"
			}
			generateTxt(lang);
		}
		const elements = Object.getOwnPropertyNames(text)
		function generateTxt(lang) {
			for (let x in elements) {
			  document.getElementById(elements[x]).innerHTML = text[elements[x]][lang];
			}
		}
		function opentimefun(){
			document.getElementById("opentimes").innerHTML = text["opentimes"][lang];
		}