
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
        document.getElementById("totalRecovered").innerHTML=data.Global.TotalRecovered
    }).fail(function (err) {
        console.log(err);
        alert("ocurrió un error al cargar la página");
    });
});

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    // TODO
}

function formatDate(date) {
    // TODO
}