import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";
import Footer from "../components/Common/Footer";

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType]=useState('prices');

  useEffect(() => {
    if(id){
        getData();
    }
    
  }, [id]);

  async function getData(){
    const data=await getCoinData(id);
    if(data){
        coinObject(setCoinData,data);

        const prices=await getCoinPrices(id,days,priceType);
        if(prices?.length>0){
          settingChartData(setChartData,prices)
        }
    setIsLoading(false);
  }
}

  const handleDaysChange=async(event)=>{
    setIsLoading(true);
    setDays(event.target.value);

    const prices=await getCoinPrices(id,event.target.value,priceType);
    if(prices?.length>0){
      settingChartData(setChartData,prices);
    }
    setIsLoading(false);
  }


  const handlePriceTypeChange=async(event,newType)=>{
    setIsLoading(true);
    setPriceType(newType);

    const prices=await getCoinPrices(id,days,newType);
    if(prices?.length>0){
      settingChartData(setChartData,prices);
    }
    setIsLoading(false);
  }

  //   console.log(coinData)
  //   if(isLoading===false && !coinData){
  //     return <p>Not found</p>
  //   }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
            <List coin={coinData} hide={false}/>
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType} multiAxis={false}/>
          </div>
          <CoinInfo heading={coinData?.name} desc={coinData?.desc} />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default CoinPage;
