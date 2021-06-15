var urlFlags = "https://www.countryflags.io/";
var urlInfo = "https://restcountries.eu/rest/v2/alpha/";
var urlDiaUno = "https://api.covid19api.com/total/dayone/country"

const urlParams = new URLSearchParams(window.location.search);
const nameCountry = urlParams.get('name');
const countryCode = urlParams.get('countryCode');
const slug = urlParams.get('slug');

$(document).ready(function () {
    // const caseCovid = 'confimed';
    var imagen = urlFlags + countryCode + "/flat/64.png";
    $("#titulo").html('Resumen del país' +" " +"<img src='" + imagen + "' >" );
    $.ajax({
        method: "GET",
        datatype: "json",
        url: "https://restcountries.eu/rest/v2/alpha/" + countryCode
    }).done(function (data) {
        //TODO
    }).fail(function (err) {
        console.log(err);
        alert("ocurrió un error al cargar la página");
    });

    obtenerDataPais();
});

function seleccionarCasos() {
    //TODO
}

function obtenerDataPais() {
    $.ajax({
        method: "GET",
        datatype: "json",
        url: "https://api.covid19api.com/total/dayone/country/" + slug + "/status/" + caseCovid
    }).done(function (data) {
        //TODO
    }).fail(function (err) {
        console.log(err);
        alert("ocurrió un error al cargar la página");
    });
}

function formatDate(date) {
    //TODO
}