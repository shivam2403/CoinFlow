import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import SelectDays from '../components/Coin/SelectDays';
import { getCoinPrices } from '../functions/getCoinPrices';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/convertObject';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { settingChartData } from '../functions/settingChartData';
import LineChart from '../components/Coin/LineChart';
import Footer from '../components/Common/Footer';
import { getTwoCachedCoins } from '../functions/getTwoCachedCoins';

const ComparePage = () => {
  const [crypto1,setCrypto1]=useState('bitcoin');
  const [crypto2,setCrypto2]=useState('ethereum');
  const [crypto1Data,setCrypto1Data]=useState({});
  const [crypto2Data,setCrypto2Data]=useState({});
  const [days,setDays]=useState(30);
  const [isLoading,setIsLoading]=useState(true);
  const [priceType,setPriceType]=useState('prices');
  const [chartData,setChartData]=useState({});
  const cachedCrypto1Data=getTwoCachedCoins()[0];
  const cachedCrypto2Data=getTwoCachedCoins()[1];


  function handleDaysChange(event){
    setDays(event.target.value);
  }

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    setIsLoading(true);
    const data1=await getCoinData(crypto1);
    if(data1){
        const data2=await getCoinData(crypto2);
        coinObject(setCrypto1Data,data1);
        if(data2){
          coinObject(setCrypto2Data,data2);
        }
      }
    setIsLoading(false);
  }

  const handleCoinChange=async(event,isCoin2)=>{
    setIsLoading(true);
    if(isCoin2===true){
      setCrypto2(event.target.value);
      const data=await getCoinData(event.target.value);
      if(data){
        coinObject(setCrypto2Data,data);
      }
    }else{
      setCrypto1(event.target.value);
      const data=await getCoinData(event.target.value);
      if(data){
        coinObject(setCrypto1Data,data);
      }
    }
    setIsLoading(false);
  }

  return (
    <div>
        <Header/>
        { 
        (<>
        <div className='coin-days-flex'>
            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
        </div>
          <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
          <List coin={crypto1Data} cachedCryptoData={cachedCrypto1Data} hide={false}/>
          </div>
          <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
          <List coin={crypto2Data} cachedCryptoData={cachedCrypto2Data} hide={false}/>
          </div>
          <CoinInfo heading={crypto1Data?.name || cachedCrypto1Data?.name} desc={crypto1Data?.desc || cachedCrypto1Data?.desc} />
          <CoinInfo heading={crypto2Data?.name || cachedCrypto2Data?.name} desc={crypto2Data?.desc || cachedCrypto2Data?.desc} />
          <Footer/>
        </>
        )}
    </div>
  )
}

export default ComparePage