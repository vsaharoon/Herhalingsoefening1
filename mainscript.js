console.log('Het bestand mainscript.js is met succes gelanden');

var bedrijf= {
  naam:"VSA",
     straat : "Grote Markt",
     huisnummer : "1",
     postcode : "3000",
     gemeente : "Leuven"
};
var naamHTML = document.getElementById('Bedrijfsnaam');
var straatHTML = document.getElementById('straat');
var huisnummerHTML = document.getElementById('huisnummer');
var postcodeHTML = document.getElementById('postcode');
var gemeenteHTML = document.getElementById('gemeente');

function updatemodalBedrijfsgegeven(){
    naamHTML.value = bedrijf.naam;
    straatHTML.value = bedrijf.straat;
    huisnummerHTML.value = bedrijf.huisnummer;
    postcodeHTML.value = bedrijf.postcode;
    gemeenteHTML.value = bedrijf.gemeente;
}
function updateBedrijfsgegeven() {
bedrijf.naam = naamHTML.value;
console.log("De nieuw naam + VSAVSA")
}
