var urlFlags = "https://www.countryflags.io/";
var urlInfo = "https://restcountries.eu/rest/v2/alpha/";
var urlDiaUno = "https://api.covid19api.com/total/dayone/country/"

const urlParams = new URLSearchParams(window.location.search);
const nameCountry = urlParams.get('name');
const countryCode = urlParams.get('countryCode');
const slug = urlParams.get('slug');

$(document).ready(function () {
    var imagen = urlFlags + countryCode + "/flat/64.png";
    console.log(document.getElementById("caseCovid").value);
    $("#redirect-grafico").html(
        '<a id="redirect-grafico" class="btn btn-primary" href="'+ubicacion(nameCountry,slug,countryCode,$("#caseCovid").val())+'" role="button">Ver Gráfico</a>');
    $("#titulo").html('Resumen del país' +" " +"<img src='" + imagen + "' >" );
    $.ajax({
        method: "GET",
        datatype: "json",
        url: urlInfo + countryCode
    }).done(function (data) {
        $("#capital").text(data.capital);
        $("#population").text(data.population);
        $("#subregion").text(data.subregion);
        seleccionarCasos();
    }).fail(function (err) {
        console.log(err);
        alert("ocurrió un error al cargar la página");
    });
});

function seleccionarCasos() {
        var casecovid = $("#caseCovid").val();
        $.ajax({method:"GET", url: urlDiaUno + slug + '/status/' + casecovid})
        .done(function(resultado){
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

function ubicacion(nameCountry,slug,countryCode,seleccion){
    let init = '../grafico/graficoEvolutivo.html?';
    init+="name="+nameCountry+"&";
    init+="slug="+slug+"&";
    init+="countryCode="+countryCode+"&";
    init+="caseCovid="+seleccion;
    return init;
}
