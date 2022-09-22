//inst classes//

const ft = new Fetch();
const ui = new UI();


//add event listeners//
// array citys 




const inner= document.getElementById("content");

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("searchUser");
  search.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = search.value;
      search.value = "";
      output(input);
    }
  });
});


function output(input) {
  let product = 'hey';

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/(trip|holiday)/gi)){
    product = trips[Math.floor(Math.random() * trips.length)];
    
  } else if (text.match(/(London|Dublin|France|Aberdeen|Abilene|Akron|Albany|Albuquerque|Alexandria|Allentown|Amarillo|Anaheim|Anchorage|AnnArbor|Antioch|AppleValley|Appleton|Arlington|Arvada|Asheville|Athens|Atlanta|AtlanticCity|Augusta|Aurora|Austin|Bakersfield|Baltimore|Barnstable|BatonRouge|Beaumont|BelAir|Bellevue|Berkeley|Bethlehem|Billings|Birmingham|Bloomington|Boise|BoiseCity|BonitaSprings|Boston|Boulder|Bradenton|Bremerton|Bridgeport|Brighton|Brownsville|Bryan|Buffalo|Burbank|Burlington|Cambridge|Canton|CapeCoral|Carrollton|Cary|CathedralCity|CedarRapids|Champaign|Chandler|Charleston|Charlotte|Chattanooga|Chesapeake|Chicago|ChulaVista|Cincinnati|ClarkeCounty|Clarksville|Clearwater|Cleveland|CollegeStation|ColoradoSprings|Columbia|Columbus|Concord|CoralSprings|Corona|CorpusChristi|CostaMesa|Dallas|DalyCity|Danbury|Davenport|DavidsonCounty|Dayton|DaytonaBeach|Deltona|Denton|Denver|DesMoines|Detroit|Downey|Duluth|Durham|ElMonte|ElPaso|Elizabeth|ElkGrove|Elkhart|Erie|Escondido|Eugene|Evansville|Fairfield|Fargo|Fayetteville|Fitchburg|Flint|Fontana|FortCollins|FortLauderdale|FortSmith|FortWaltonBeach|FortWayne|FortWorth|Frederick|Fremont|Fresno|Fullerton|Gainesville|GardenGrove|Garland|Gastonia|Gilbert|Glendale|GrandPrairie|GrandRapids|Grayslake|GreenBay|GreenBay|Greensboro|Greenville|Gulfport-Biloxi|Hagerstown|Hampton|Harlingen|Harrisburg|Hartford|HavredeGrace|Hayward|Hemet|Henderson|Hesperia|Hialeah|Hickory|HighPoint|Hollywood|Honolulu|Houma|Houston|Howell|Huntington|HuntingtonBeach|Huntsville|Independence|Indianapolis|Inglewood|Irvine|Irving|Jackson|Jacksonville|Jefferson|JerseyCity|JohnsonCity|Joliet|Kailua|Kalamazoo|Kaneohe|KansasCity|Kennewick|Kenosha|Killeen|Kissimmee|Knoxville|Lacey|Lafayette|LakeCharles|Lakeland|Lakewood|Lancaster|Lansing|Laredo|LasCruces|LasVegas|Layton|Leominster|Lewisville|Lexington|Lincoln|LittleRock|LongBeach|Lorain|LosAngeles|Louisville|Lowell|Lubbock|Macon|Madison|Manchester|Marina|Marysville|McAllen|McHenry|Medford|Melbourne|Memphis|Merced|Mesa|Mesquite|Miami|Milwaukee|Minneapolis|Miramar|MissionViejo|Mobile|Modesto|Monroe|Monterey|Montgomery|MorenoValley|Murfreesboro|Murrieta|Muskegon|MyrtleBeach|Naperville|Naples|Nashua|Nashville|NewBedford|NewHaven|NewLondon|NewOrleans|NewYork|NewYorkCity|Newark|Newburgh|NewportNews|Norfolk|Normal|Norman|NorthCharleston|NorthLasVegas|NorthPort|Norwalk|Norwich|Oakland|Ocala|Oceanside|Odessa|Ogden|OklahomaCity|Olathe|Olympia|Omaha|Ontario|Orange|Orem|Orlando|OverlandPark|Oxnard|PalmBay|PalmSprings|Palmdale|PanamaCity|Pasadena|Paterson|PembrokePines|Pensacola|Peoria|Philadelphia|Phoenix|Pittsburgh|Plano|Pomona|PompanoBeach|PortArthur|PortOrange|PortSaintLucie|PortSt.Lucie|Portland|Portsmouth|Poughkeepsie|Providence|Provo|Pueblo|PuntaGorda|Racine|Raleigh|RanchoCucamonga|Reading|Redding|Reno|Richland|Richmond|RichmondCounty|Riverside|Roanoke|Rochester|Rockford|Roseville|RoundLakeBeach|Sacramento|Saginaw|SaintLouis|SaintPaul|SaintPetersburg|Salem|Salinas|SaltLakeCity|SanAntonio|SanBernardino|SanBuenaventura|SanDiego|SanFrancisco|SanJose|SantaAna|SantaBarbara|SantaClara|SantaClarita|SantaCruz|SantaMaria|SantaRosa|Sarasota|Savannah|Scottsdale|Scranton|Seaside|Seattle|Sebastian|Shreveport|SimiValley|SiouxCity|SiouxFalls|SouthBend|SouthLyon|Spartanburg|Spokane|Springdale|Springfield|St.Louis|St.Paul|St.Petersburg|Stamford|SterlingHeights|Stockton|Sunnyvale|Syracuse|Tacoma|Tallahassee|Tampa|Temecula|Tempe|Thornton|ThousandOaks|Toledo|Topeka|Torrance|Trenton|Tucson|Tulsa|Tuscaloosa|Tyler|Utica|Vallejo|Vancouver|VeroBeach|Victorville|VirginiaBeach|Visalia|Waco|Warren|Washington|Waterbury|Waterloo|WestCovina|WestValleyCity|Westminster|Wichita|Wilmington|Winston|WinterHaven|Worcester|Yakima|Yonkers|York|Youngstown|Afghanistan|Albania|Algeria|AmericanSamoa|Angola|Anguilla|Antartica|AntiguaandBarbuda|Argentina|Armenia|Aruba|AshmoreandCartierIsland|Australia|Austria|Azerbaijan|Bahamas|Bahrain|Bangladesh|Barbados|Belarus|Belgium|Belize|Benin|Bermuda|Bhutan|Bolivia|BosniaandHerzegovina|Botswana|Brazil|BritishVirginIslands|Brunei|Bulgaria|BurkinaFaso|Burma|Burundi|Cambodia|Cameroon|Canada|CapeVerde|CaymanIslands|CentralAfricanRepublic|Chad|Chile|China|ChristmasIsland|ClippertonIsland|Cocos(Keeling)Islands|Colombia|Comoros|Congo|DemocraticRepublic|Congo|Republicofthe|CookIslands|CostaRica|Coted'Ivoire|Croatia|Cuba|Cyprus|CzeckRepublic|Denmark|Djibouti|Dominica|DominicanRepublic|Ecuador|Egypt|ElSalvador|EquatorialGuinea|Eritrea|Estonia|Ethiopia|EuropaIsland|FalklandIslands|FaroeIslands|Fiji|Finland|France|FrenchGuiana|FrenchPolynesia|AntarcticLands|Gabon|Gambia|The|GazaStrip|Georgia|Germany|Ghana|Gibraltar|GloriosoIslands|Greece|Greenland|Grenada|Guadeloupe|Guam|Guatemala|Guernsey|Guinea|Guinea-Bissau|Guyana|Haiti|HeardIsland|HolySee(VaticanCity)|Honduras|HongKong|HowlandIsland|Hungary|Iceland|India|Indonesia|Iran|Iraq|Ireland|Ireland|Northern|Israel|Italy|Jamaica|JanMayen|Japan|JarvisIsland|Jersey|JohnstonAtoll|Jordan|JuandeNovaIsland|Kazakhstan|Kenya|Kiribati|Korea|North|Korea|South|Kuwait|Kyrgyzstan|Laos|Latvia|Lebanon|Lesotho|Liberia|Libya|Liechtenstein|Lithuania|Luxembourg|Macau|Macedonia|Madagascar|Malawi|Malaysia|Maldives|Mali|Malta|Man|Isleof|MarshallIslands|Martinique|Mauritania|Mauritius|Mayotte|Mexico|Micronesia|MidwayIslands|Moldova|Monaco|Mongolia|Montserrat|Morocco|Mozambique|Namibia|Nauru|Nepal|Netherlands|NetherlandsAntilles|NewCaledonia|NewZealand|Nicaragua|Niger|Nigeria|Niue|NorfolkIsland|NorthernMarianaIslands|Norway|Oman|Pakistan|Palau|Panama|PapuaNewGuinea|Paraguay|Peru|Philippines|PitcaimIslands|Poland|Portugal|PuertoRico|Qatar|Reunion|Romainia|Russia|Rwanda|SaintHelena|SaintKittsandNevis|SaintLucia|SaintPierreandMiquelon|SaintVincent|Samoa|SanMarino|SaoTomeandPrincipe|SaudiArabia|Scotland|Senegal|Seychelles|SierraLeone|Singapore|Slovakia|Slovenia|SolomonIslands|Somalia|SouthAfrica|SouthGeorgia|Spain|SpratlyIslands|SriLanka|Sudan|Suriname|Svalbard|Swaziland|Sweden|Switzerland|Syria|Taiwan|Tajikistan|Tanzania|Thailand|Tobago|Toga|Tokelau|Tonga|Trinidad|Tunisia|Turkey|Turkmenistan|Tuvalu|Uganda|Ukraine|UnitedArabEmirates|UnitedKingdom|Uruguay|USA|Uzbekistan|Vanuatu|Venezuela|Vietnam|VirginIslands|Wales|WallisandFutuna|WestBank|WesternSahara|Yemen|Yugoslavia|Zambia|Zimbabwe)/gi)){

    var i = 0;
    var inputArray = [];
    var size = 5; //Maximum Array size

    for(var i=0; i<size; i++) {
      text += inputArray[i] + "<br>";

      //Taking Input from user
      inputArray[i] = prompt('Enter place that you will travel  ' + (i+1));
      text += inputArray[i] + "<br>";
      ft.getCurrent(inputArray[i]).then((data) => {
      //call a UI method//
      ui.populateUI(data);});
    }
   } else if(text.match(/(we need develop a chatbot|bot)/gi)){
    product = chatbot[Math.floor(Math.random() * chatbot.length)];

   }else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  trip(input, product, inputArray);
}

// compare question of array prompt if find and give answer from array.
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        
        break;
      }
    }
    if (replyFound) {
      
      break;
    }
  }
  return reply;
}


// print answer on screen 
function trip(input, product){
  
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);
  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);
  // Keep messages
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // delay message 
  
  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000
  )
}