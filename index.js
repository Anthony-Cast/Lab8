
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


$(document).ready(function (){
    $.ajax({
    method: "GET",
    datatype: "json",
    headers: {"api-key": "3228be12-fff7-46e0-8661-01bd7b3fc190"},
    url: "https://api.covid19api.com/summary"
}).done(function(data1){
    if(data1.estado === "ok"){
        var listaPaises = data1.Countries;
        var contentHtml = "";
        $.each(listaPaises, function(i, pais){
            contentHtml += "<tr>";
            contentHtml += "<td>" + (i + 1) + "<td>";
            contentHtml += "<td>" + pais.Country + "</td>";
            contentHtml += "<td>" + pais.NewConfirmed + "</td>";
            contentHtml += "<td>" + pais.NewDeaths + "</td>";
            contentHtml += "<td>" + pais.NewRecovered + "</td>";
            contentHtml += "<td>" + pais.TotalConfirmed + "</td>";
            contentHtml += "<td>" + pais.TotalDeaths + "</td>";
            contentHtml += "<td>" + pais.TotalRecovered + "</td>";
            contentHtml += "<tr>";
        });
        $("#body-paises").html(contentHtml);
    }
})})

/*function compare(a, b) {
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

Countries.sort(compare);*/

function formatDate(date) {
    // TODO
}
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    // TODO
}

function formatDate(date) {
    // TODO
}