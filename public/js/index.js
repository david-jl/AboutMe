google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Conocimientos', 'Conocimientos'],
        ['JavaScript',  20],
        ['Java', 10],
        ['HTML/CSS',      28],
        ['Android',     42]
    ]);
    var options = {
        legend: 'none',
        pieSliceText: 'label',
        tooltip: { trigger: 'focus', text: 'none'},
        slices: {
            0: { color: '#ba9932' },
            1: { color: 'red' },
            2: { color: 'green' },
            3: { color: '#007bff' }
        },
        fontSize: 20,
        bold: true
    };
    var grafico = new google.visualization.PieChart(document.getElementById('grafico'));
    grafico.draw(data, options);
}