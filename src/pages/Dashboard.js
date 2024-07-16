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
import { getCacheCoins } from "../functions/getCacheCoins";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const cacheCoins=getCacheCoins();

  const handlePageChange = (event, value) => {
    setPage(value);
    var prevIndex = (value - 1) * 10;
    if(coins){
      setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
    }else{
      setPaginatedCoins(cacheCoins.slice(prevIndex, prevIndex + 10));
    }
  };

  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
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
    }else{
      setPaginatedCoins(cacheCoins.slice(0,10));
    }
    setIsLoading(false);
  }
  console.log(coins);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent
            coins={search !== "" ? filteredCoins : paginatedCoins}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
      <BackToTop/>
      <Footer/>
    </>
  );
};

export default DashboardPage;
