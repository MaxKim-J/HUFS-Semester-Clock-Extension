<script>
import { Line } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  name: 'LineChart',
  extends: Line,
  data: () => ({
    chartLabels:[],
    chartValues:[],
    chartOptions:{
      responsive: false,
      layout: {
        padding: {
          top:40,
          left:25,
          right:25,
        },
      },
      scales: {
        yAxes: [{display:false}],
        xAxes: [{
          ticks: {
            fontColor: 'white',
            fontSize: 11,
            stepSize: 0.1,
            lineHeight: 1.5,
          },
        }],
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            return `${tooltipItem.yLabel.toLocaleString()}명`;
          }
        }
      },
      legend: {
        display: false,
      },
    }
  }),
  props: {
    chartData: {
      type: Array,
      require: true,
    }
  },
  computed: {
    flattenedChartData() {
      return {
        defaultFontSize: 8,
        labels: this.chartLabels,
        datasets: [{
          label: false,
          type: 'line',
          borderColor: '#f22ead',
          data: this.chartValues,
          pointBackgroundColor: 'yellow',
          lineTension: 0,
          datalabels: {
            color:'yellow',
            align: 'end',
            anchor: 'end',
            formatter: figure => `${figure.toLocaleString()}명`,
            font: {
              weight: 700,
              size: 12,
            },
          }
        }]
      }
    },
  },
  mounted () {
    console.log('나오냐?????')
    console.log(this.chartData)
    this.chartLabels = this.chartData.map(data => data.day)
    this.chartValues = this.chartData.map(data => data.rate)
    this.renderChart(this.flattenedChartData, this.chartOptions)
  }
}
</script>