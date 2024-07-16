import axios from "axios";

export const getCoinPrices=async(id,days,priceType)=>{
    const prices= await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      return response.data[priceType];

    })
    .catch((error) => {
      console.log("Error: ", error);
    });
    return prices;
}