
var _ = require('underscore');

var locations = [
	{
		name:"Seville",
		info:"Seville was founded as the Roman city of Hispalis, and was known as Ishbiliya[1] (Arabic:إشبيلية) after the Muslim conquest in 712. During the Muslim rule in Spain, Seville came under the jurisdiction of the Caliphate of Córdoba before becoming the independent Taifa of Seville; later it was ruled by the Muslim Almoravids and the Almohads until finally being incorporated into the Christian Kingdom of Castile under Ferdinand III in 1248.[2] After the discovery of the Americas, Seville became one of the economic centres of the Spanish Empire as its port monopolised the trans-oceanic trade and the Casa de Contratación (House of Trade) wielded its power, opening a Golden Age of arts and literature. In 1519, Ferdinand Magellan departed from Seville for the first circumnavigation of the Earth. Coinciding with the Baroque period of European history, the 17th century in Seville represented the most brilliant flowering of the city's culture; then began a gradual economic and demographic decline as silting in the Guadalquivir forced the trade monopoly to relocate to the nearby port of Cádiz.",
		id: 0,
		tango: 70,
		lima: 37
	},
	{	
		name:"Canary Islands",
		info: "The Canary Islands (English /kəˈnɛəri ˈaɪləndz/; Spanish: Islas Canarias [ˈizlas kaˈnaɾjas], locally: [ˈiɦlah kaˈnaɾjah]), also known as the Canaries (Spanish: Canarias), are a Spanish archipelago located just off the northwest coast of mainland Africa, 100 kilometres (62 miles) west of the border between Morocco and the Western Sahara. The Canaries are one of Spain's 17 autonomous communities and are among the outermost region of the European Union proper. The islands include (from largest to smallest): Tenerife, Fuerteventura, Gran Canaria, Lanzarote, La Palma, La Gomera, El Hierro, La Graciosa, Alegranza, Isla de Lobos, Montaña Clara, Roque del Este and Roque del Oeste. The archipelago's beaches, climate and important natural attractions, especially Maspalomas in Gran Canaria and Teide National Park and Mount Teide in Tenerife (the third tallest volcano in the world measured from its base on the ocean floor), make it a major tourist destination with over 12 million visitors per year, especially Tenerife, Gran Canaria and Lanzarote.[7][8] The islands have a subtropical climate, with long warm summers and moderately warm winters.[9] Due to their location above the temperature inversion layer, the high mountains of these islands are ideal for astronomical observation. For this reason, two professional observatories, Teide Observatory on the island of Tenerife and Roque de los Muchachos Observatory on the island of La Palma, have been built on the islands.",
		id: 1,
		tango: 110,
		lima: 0
	},
	{	
		name:"Cape Verde",
		info:"The Canary Islands (English /kəˈnɛəri ˈaɪləndz/; Spanish: Islas Canarias [ˈizlas kaˈnaɾjas], locally: [ˈiɦlah kaˈnaɾjah]), also known as the Canaries (Spanish: Canarias), are a Spanish archipelago located just off the northwest coast of mainland Africa, 100 kilometres (62 miles) west of the border between Morocco and the Western Sahara. The Canaries are one of Spain's 17 autonomous communities and are among the outermost region of the European Union proper. The islands include (from largest to smallest): Tenerife, Fuerteventura, Gran Canaria, Lanzarote, La Palma, La Gomera, El Hierro, La Graciosa, Alegranza, Isla de Lobos, Montaña Clara, Roque del Este and Roque del Oeste.  The archipelago's beaches, climate and important natural attractions, especially Maspalomas in Gran Canaria and Teide National Park and Mount Teide in Tenerife (the third tallest volcano in the world measured from its base on the ocean floor), make it a major tourist destination with over 12 million visitors per year, especially Tenerife, Gran Canaria and Lanzarote.[7][8] The islands have a subtropical climate, with long warm summers and moderately warm winters.[9] Due to their location above the temperature inversion layer, the high mountains of these islands are ideal for astronomical observation. For this reason, two professional observatories, Teide Observatory on the island of Tenerife and Roque de los Muchachos Observatory on the island of La Palma, have been built on the islands.",
		id: 2,
		tango: 130,
		lima: 0
	},
	{	
		name:"Strait of Magellan",
		info:"Ferdinand Magellan, a Portuguese sailor in the service of Charles I of Spain, became the first European to navigate the strait in 1520 during his global circumnavigation voyage. On March 22, 1518, the expedition was organized in Valladolid, naming Magellan captain general of the fleet and governor of all the lands discovered, and establishing the privileges of Magellan and his business associate Ruy Falero. The fleet would become known as the 'Armada de las Molucas' or 'Fleet of the Moluccas'. The expeditionary fleet of 5 ships set sail from Sanlúcar de Barrameda on September 20, 1519. The five ships included La Trinidad (100 to 110 barrels) under the command of Magellan; La San Antonio (120 barrels) under the command of Juan de Cartagena; La Concepción (90 barrels) under the command of Gaspar de Quezada (Juan Sebastián Elcano served as boatswain); La Victoria (85 barrels) under the command of Luis de Mendoza; and La Santiago, under command of Juan Rodríguez Serrano. Magellan's ships entered the strait on November 1, 1520, All Saints' Day, and it was initially called Estrecho de Todos los Santos (Strait of All Saints). Magellan's chronicler, Antonio Pigafetta, called it the Patagonian Strait, and others Victoria Strait, commemorating the first ship entering it.[1] Within seven years it was being called Estrecho de Magallanes in honor of Magellan.[1] The Spanish Empire and the Captaincy General of Chile used it as the southern boundary of their territory.",
		id: 3,
		tango: 320,
		lima: 760
	},
	{	
		name:"Guam",
		info:"Guam (Listeni/ˈɡwɑːm/ or /ˈɡwɒm/; Chamorro: Guåhån) is an organized, unincorporated territory of the United States in the western Pacific Ocean. It is one of five U.S. territories with an established civilian government.[4][5] Guam is listed as one of seventeen Non-Self-Governing Territories by the Special Committee on Decolonization of the United Nations.[6] The island's capital is Hagåtña (formerly named Agana). Guam is the largest and southernmost of the Mariana Islands. The Chamorros, Guam's indigenous people, first populated the island approximately 4,000 years ago. The island has a long history of European colonialism, beginning with Ferdinand Magellan's Spanish expedition landing on March 6, 1521. The first colony was established in 1668 by Spain with the arrival of settlers including Padre San Vitores, a Catholic missionary. For more than two centuries Guam was an important stopover for the Spanish Manila Galleons that crossed the Pacific annually. The island was controlled by Spain until 1898, when it was surrendered to the United States during the Spanish–American War and later formally ceded as part of the Treaty of Paris. As the largest island in Micronesia and the only U.S.-held island in the region before World War II, Guam was captured by the Japanese on December 8, 1941, just hours after the attack on Pearl Harbor, and was occupied for two and a half years. During the occupation, the people of Guam were subjected to acts that included torture, beheadings, and rape,[7][8] and were forced to adopt the Japanese culture.[9] Guam was subject to fierce fighting when U.S. troops recaptured the island on July 21, 1944, a date commemorated every year as Liberation Day.[10]",
		id: 4,
		tango: 150,
		lima: 430
	},
	{	
		name:"Philippines",
		info:"The Philippines (Listeni/ˈfɪlɨpiːnz/; fi-lə-peenz; Filipino: Pilipinas [ˌpɪlɪˈpinɐs]), officially known as the Republic of the Philippines (Filipino: Repúblika ng Pilipinas), is a sovereign island country in Southeast Asia situated in the western Pacific Ocean. To its north across the Luzon Strait lies Taiwan; west across the South China Sea sits Vietnam; southwest is the island of Borneo across the Sulu Sea, and to the south the Celebes Sea separates it from other islands of Indonesia; while to the east it is bounded by the Philippine Sea and the island-nation of Palau. Its location on the Pacific Ring of Fire and close to the equator make the Philippines prone to earthquakes and typhoons, but also endows it with abundant natural resources and some of the world's greatest biodiversity. At 300,000 square kilometers (115,831 sq mi), the Philippines is the 64th-largest country in the world,[10] consisting of an archipelago of 7,107 islands that are categorized broadly under three main geographical divisions: Luzon, Visayas, and Mindanao. Its capital city is Manila while its most populous city is Quezon City; both are part of Metro Manila. With a population of at least 99 million people,[11] the Philippines is the seventh-most populated country in Asia and the 12th most populated country in the world. An additional 12 million Filipinos live overseas, comprising one of the world's largest and most influential diasporas.[12] Multiple ethnicities and cultures are found throughout the islands. In prehistoric times, Negritos were some of the archipelago's earliest inhabitants. They were followed by successive waves of Austronesian peoples who came from Malay, Indian, and Islamic states. Various nations were established under the rule of Datus, Rajahs, Sultans or Lakans. Trade with China also introduced Chinese culture and settlement, which remain present to this day.",
		id: 5,
		tango: 160,
		lima: 360
	}
];

var locationModel  = module.exports = {

	findAll: function(){
		return locations.slice(0);
	},

	findLocation: function(id, button){
		var location =  _.filter(locations, function(location){
			return location.id === id;
		})[0]
		if(button === 'next') {
			var prevLocation = _.filter(locations,function(location){
				return location.id === id - 1;
			})[0] || {tango: 0, lima: 0};
		} else {
			var prevLocation = _.filter(locations,function(location){
				return location.id === id + 1;
			})[0] || {tango: 0, lima: 0};
		}
		var prevCoords = {top:prevLocation.tango, left: prevLocation.lima};
		var newCoords = {top:location.tango, left:location.lima};
		return {location:location, coords:[prevCoords,newCoords]} 
	},

	nextLocation: function(LocId){
		var location = _.filter(locations,function(location){
			return location.id === LocId;
		})[0];

	},

	getNumLocations: function(){
		return locations.length;
	}

} 


