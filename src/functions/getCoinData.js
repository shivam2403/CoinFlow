import axios from "axios";

export const getCoinData=async(id)=>{
    const myData=await axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        // console.log("Response: ",response)
        return response.data;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

      return myData;
}