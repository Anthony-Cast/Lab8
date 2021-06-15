function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const TotalConfirmedA = a.TotalConfirmed.toUpperCase();
    const TotalConfirmedB = b.TotalConfirmed.toUpperCase();

    let comparison = 0;
    if(TotalConfirmedA > TotalConfirmedB){
        comparison = 1;
    }else if (TotalConfirmedA < TotalConfirmedB){
        comparison = -1;
    }
    return comparison;
}

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
        document.getElementById("body-paises").innerHTML=tabla(data);
        data.Countries.sort(compare)
    }).fail(function (err) {
        console.log(err);
        alert("ocurrió un error al cargar la página");
    });
});


function formatDate(date) {
    // TODO
}



function tabla(data) {
    let fila="";
    for (var i = 0; i < data.Countries.length; i++) {
        fila +=
            "<tr>" +
            "<td>" + i + "</td>"
            + "<td>" + data.Countries[i].Country + "</td>"
            + "<td>" + data.Countries[i].TotalConfirmed + "</td>"
            + "<td>" + data.Countries[i].TotalDeaths + "</td>"
            + "<td>" + data.Countries[i].TotalRecovered + "</td>"
            + "<td>" + data.Countries[i].NewConfirmed + "</td>"
            + "<td>" + data.Countries[i].NewDeaths + "</td>"
            + "<td>" + data.Countries[i].NewRecovered + "</td>"
            + "<td><button class='btn-primary'>" + "Ver Detalles" + "</button></td>" +
            "</tr>";
    }
    return fila;
}