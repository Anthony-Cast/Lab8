
$(document).ready(function () {
    $.ajax({
        method: "GET",
        datatype: "json",
        url: "https://api.covid19api.com/summary"
    }).done(function (data) {
        console.log(data);
        document.getElementById("newConfirmed").innerHTML=data.Global.NewConfirmed;
        document.getElementById("newDeaths").innerHTML=data.Global.NewDeaths;
        document.getElementById("newRecovered").innerHTML=data.Global.NewRecovered;
        document.getElementById("totalConfirmed").innerHTML=data.Global.TotalConfirmed;
        document.getElementById("totalDeaths").innerHTML=data.Global.TotalDeaths;
        document.getElementById("totalRecovered").innerHTML=data.Global.TotalRecovered;
        let data2=data["Countries"];
        data2.sort(compare);
        data2.reverse();
        document.getElementById("body-paises").innerHTML=tabla(data2);
    }).fail(function (err) {
        console.log(err);
        alert("ocurrió un error al cargar la página");
    });
});

/*
function formatDate(date) {
    // TODO
}
*/


function tabla(data) {
    let fila="";
    for (var i = 0; i < data.length; i++) {
        fila +=
            "<tr>" +
            "<td>" + (i + 1) + "</td>"
            + "<td>" + data[i].Country + "</td>"
            + "<td>" + data[i].TotalConfirmed + "</td>"
            + "<td>" + data[i].TotalDeaths + "</td>"
            + "<td>" + data[i].TotalRecovered + "</td>"
            + "<td>" + data[i].NewConfirmed + "</td>"
            + "<td>" + data[i].NewDeaths + "</td>"
            + "<td>" + data[i].NewRecovered + "</td>"
            + "<td><a href='"+ubicacion(data[i])+"' type='button' class='btn btn-primary text-white'>" + "Ver Detalles" + "</a></td>" +
            "</tr>";
    }
    return fila;
}
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const TotalConfirmedA = a.TotalConfirmed;
    const TotalConfirmedB = b.TotalConfirmed;

    let comparison = 0;
    if(TotalConfirmedA > TotalConfirmedB){
        comparison = 1;
    }else if (TotalConfirmedA < TotalConfirmedB){
        comparison = -1;
    }
    return comparison;
}

function ubicacion(dato){
    var init="detallePais/detallePais.html?";
    init+="name="+dato.Country+"&";
    init+="slug="+dato.Slug+"&"
    init+="countryCode="+dato.CountryCode+"&";
    init+="caseCovid="+"confirmed";
    return init;

}