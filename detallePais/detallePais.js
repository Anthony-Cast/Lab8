
const urlParams = new URLSearchParams(window.location.search);
const countryCode = urlParams.get('countryCode');
//TODO

$(document).ready(function () {
    // const caseCovid = 'confimed';
    $("#titulo").html('Resumen del país ');
    //TODO
    $("#bandera-div").append("<img src='"+"https://www.countryflags.io/"+countryCode+"/flat/64.png" +"'>");

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