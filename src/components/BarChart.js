import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { convertHyphenatedStringToNormal } from "../utils";

const BarChart = ({frequencies, datasetName, backgroundColor}) => {
  const chartRef = useRef(null);

  let labelsArray = [] // the name of each of the items. will be on x axis of bar chart
  let labelVals = [] // the amount of each of these items received as a drop from players
  Object.entries(frequencies).forEach(([itemName, itemCount]) => {
    labelsArray.push(convertHyphenatedStringToNormal(itemName))
    labelVals.push(itemCount.num)
  })
  Chart.defaults.color = '#fff';

  useEffect(() => {
    // Create the chart
    const myChart = new Chart(chartRef.current, {
      type: 'bar', // Choose the type of chart (bar, line, pie, etc.)
      data: {
        labels: labelsArray,
        datasets: [
          {
            label: datasetName,
            data: labelVals,
            backgroundColor: backgroundColor,
            color: 'red'
          },
        ],
      },
      options: {
        plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 20
                  }
              }
          }
        },
        scales: {
          x: {
            font: {
              size: 26, // Set the font size for x-axis ticks
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup the chart on component unmount
    return () => {
      myChart.destroy();
    };
  }, [labelsArray, labelVals]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
