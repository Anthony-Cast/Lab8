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

$(document).ready(function () {
    $("#titulo-resumen-global").append(dateNow());
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


function dateNow() {
    var d = new Date();
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${ye}/${mo}/${da}`;
}



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
            + "<td><button class='btn btn-primary'>" + "Ver Detalles" + "</button></td>" +
            "</tr>";
    }
    return fila;
}