var urlFlags = "https://www.countryflags.io/";
var urlInfo = "https://restcountries.eu/rest/v2/alpha/";
var urlDiaUno = "https://api.covid19api.com/total/dayone/country/"

const urlParams = new URLSearchParams(window.location.search);
const nameCountry = urlParams.get('name');
const countryCode = urlParams.get('countryCode');
const slug = urlParams.get('slug');

$(document).ready(function () {
    var imagen = urlFlags + countryCode + "/flat/64.png";
    $("#titulo").html('Resumen del país' +" " +"<img src='" + imagen + "' >" );

    $.ajax({
        method: "GET",
        datatype: "json",
        url: urlInfo + countryCode
    }).done(function (data) {
        document.getElementById("capital").innerHTML=data.capital;
        document.getElementById("population").innerHTML=data.population;
        document.getElementById("subregion").innerHTML=data.subregion;
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
            });
        })
        .fail(function(){
            alert("Ocurrio un error al cargar la pagina");
        })
});

function seleccionarCasos() {
        var casecovid = $("#caseCovid").val();
        $.ajax({method:"GET", url: urlDiaUno + slug + '/status/' + casecovid})
        .done(function(resultado){
            console.log(casecovid);
            console.log(resultado);
            $("#body-paises tr").remove();
            $.each(resultado,function(){
                $("#casos-pais tbody").append(
                    "<tr>"+
                    "<td>"+formatDate(this.Date)+"</td>"+
                    "<td>"+this.Cases+"</td>"+
                    "</tr>"
                );
            });
        })
        .fail(function(){
            alert("Ocurrio un error al cargar la pagina");
        })
}

function formatDate(date) {
    var d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${ye}/${mo}/${da}`;
}