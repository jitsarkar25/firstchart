
var chartData;
try{
$.getJSON( "/data/data.json", function( data ) {

    window.chartData = data;;
});
}
catch (e)
    {
        console.log(e);
    }

FusionCharts.ready(function(){
      var revenueChart = new FusionCharts({
        "type": "pie3d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": chartData
    });

    revenueChart.render();
});
