document.getElementById('reveal').innerHTML = window.innerWidth;
const form = document.getElementsByTagName('form')[0];
const input = form.getElementsByTagName('input')[0];
function autocomplete(inp, arr) {
  const mother = document.getElementById('mother');
  const optionsCont = document.getElementById('options-cont')
  let currentFocus = -1;
  // Execute a function that fires once user types in or deletes from the input field
  inp.addEventListener('input', () => {
    let allOptions = document.getElementsByClassName('each-option');
    let val = inp.value;
    closeAllOptions();
    for (let i = 0; i < arr.length; i++) {
      let currentCountry = arr[i];
      if (val && currentCountry.toUpperCase().startsWith(val.toUpperCase())) {
        let eachOption = document.createElement('div');
        eachOption.setAttribute('class', 'each-option');
        optionsCont.appendChild(eachOption);
        //  Executed a function when user clicks an option 
        eachOption.addEventListener('click', (e) => {inp.value = eachOption.innerText; currentFocus = -1});
        eachOption.innerHTML = '<p><b>' + currentCountry.substring(0, val.length) + '</b>' + currentCountry.substring(val.length) + '</p>';
        document.getElementById('reveal').innerHTML = allOptions.length;
      } else if (!val) {
        closeAllOptions();
      }
    }
  });
  // A function to scroll up and down the matched options, and select one
  document.addEventListener('keydown', (e) => {
    let allOptions = document.getElementsByClassName('each-option');
    if (e.keyCode == 40) { // When the Down key is pressed to scroll down
      for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.remove('active');
      }
      currentFocus++;
      if (currentFocus == allOptions.length) {
        currentFocus = 0;
      }
      allOptions[currentFocus].classList.add('active');
      document.getElementById('reveal').innerHTML = e.keyCode;
    } else if (e.keyCode == 38) { // When the Up key is pressed to scroll up
      for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.remove('active');
      }
      currentFocus--;
      if (currentFocus < 0) {
        currentFocus = allOptions.length - 1;
      }
      allOptions[currentFocus].classList.add('active');
      document.getElementById('reveal').innerHTML = e.keyCode;
    }
    if (e.keyCode == 13) { // When the Enter key is pressed to select an option
      e.preventDefault();
      inp.value = allOptions[currentFocus].innerText;
      closeAllOptions();
      currentFocus = -1;
    }
  });
  // Close all the options
  function closeAllOptions() {
    let allOptions = Array.from(document.getElementsByClassName('each-option'));
    allOptions.forEach((option) => {
      optionsCont.removeChild(option);
    });
  }
  // Close all the options when user clicks any part of the page
  document.addEventListener('click', function(e) {
    if (e.target != input) {
      closeAllOptions()
    } else {
      return false;
    }
  })
}
  var countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba",
    "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda",
    "Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi",
    "Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo",
    "Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
    "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands",
    "Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana",
    "Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras",
    "Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan",
    "Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
    "Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
    "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar",
    "Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
    "Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
    "Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe",
    "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa",
    "South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden",
    "Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey",
    "Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America  (US)",
    "Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands","Yemen","Zambia","Zimbabwe"
  ];
autocomplete(input, countries);