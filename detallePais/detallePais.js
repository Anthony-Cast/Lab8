var urlFlags = "https://www.countryflags.io/";
var urlInfo = "https://restcountries.eu/rest/v2/alpha/";
var urlDiaUno = "https://api.covid19api.com/total/dayone/country/"

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

    $.ajax({method:"GET", url:urlDiaUno + slug + '/status/confirmed'})
        .done(function(resultado){
            console.log(resultado);
            $.each(resultado,function(){
                $("#casos-pais tbody").append(
                    "<tr>"+
                    "<td>"+formatDate(this.Date)+"</td>"+
                    "<td>"+this.Cases+"</td>"+
                    "</tr>"
                );
            }); })
        .fail(function(){
            alert("Ocurrio un error al cargar la pagina");
        })

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
    var d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${ye}/${mo}/${da}`;
}