import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer";

const Watchlist = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));

  var savedCoins=[];
  if(watchlist){
    savedCoins=coins.filter((coin)=>watchlist.includes(coin.id));
  }

  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  var filteredCoins = savedCoins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData=async()=>{
    const myCoins=await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
    }
    setIsLoading(false);
  }

//   if(coins?.length===0){
//     return <p>Not found</p>
//   }

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent
            coins={search !== "" ? filteredCoins : savedCoins}
          />
        </>
      )}
      <Footer/>
    </>
  );
};

export default Watchlist;
