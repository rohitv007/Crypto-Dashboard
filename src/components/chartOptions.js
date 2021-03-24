export const chartOptions = {
    lineHeightAnnotation: {
        always: true,
        hover: false
    },
    animation: {
        duration: 2000,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        xAxes: [{
            type: "time",
            distribution: "linear",
            scaleLabel: {
                display: true,
                fontColor: "#f2f2f2",
                fontSize: '18',
                labelString: 'Date / Time'
            },
            ticks: {
                fontColor: "#f2f2f2",
                fontSize: '14'
            }
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                fontColor: "#f2f2f2",
                fontSize: '18',
                labelString: 'Price'
            },
            ticks: {
                fontColor: "#f2f2f2",
                fontSize: '14'
            }
        }],
    },
    legend: {
        display: true,
        labels: {
            fontColor: '#f2f2f2'
        }
    }
}