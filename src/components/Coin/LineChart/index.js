import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumber } from "../../../functions/converNumber";

function LineChart({ chartData,priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1:{
        type:"linear",
        display: true,
        position:"left",
        ticks:{
            callback: function(value,index,ticks){
                if(priceType==="prices")return "$" + value.toLocaleString();
                else{
                    return "$" + convertNumber(value);
                }
            }
        },
        title: {
            display: true,
            text: priceType==='prices' ? 'Prices' : priceType==='market_caps' ? 'Market Cap' : 'Total Volume',
          },
      },
      crypto2:{
        type:"linear",
        display: multiAxis===true ? true:false,
        position:"right",
        ticks:{
            callback: function(value,index,ticks){
                if(priceType==="prices")return "$" + value.toLocaleString();
                else{
                    return "$" + convertNumber(value);
                }
            }
        },
        title: {
            display: true,
            text: priceType==='prices' ? 'Prices' : priceType==='market_caps' ? 'Market Cap' : 'Total Volume',
          },
      },
      x:{
        title:{
            display:true,
            text:"Day/Month"
        }
      }
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;