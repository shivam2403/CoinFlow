import React, { useState } from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { removeItemToWatchlist } from "../../../functions/removeItemFromWatchlist";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";

const Grid = ({ coin }) => {
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isSaved,setIsSaved]=useState(watchlist?.includes(coin.id));

  // const handleSave=(e)=>{
  //   e.preventDefault();

  //   if(isSaved==true){
  //     removeItemToWatchlist(coin.id);
  //     isSaved=!isSaved;
  //   }else{
  //     saveItemToWatchlist(coin.id);
  //     isSaved=!isSaved;
  //   }
  // }

  return (
    <div className={`grid-container ${
      coin.price_change_percentage_24h < 0 && "grid-container-red"
    }`}>
      <div className="info-flex">
        <Link className="info-flex-inner" to={`/coin/${coin.id}`}>
        <img src={coin.image} className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
        </Link>
        <div className="saved-icon">
        {isSaved ? <BookmarkIcon onClick={(e)=>removeItemToWatchlist(e,coin.id,setIsSaved)} fontSize="large"/> : <BookmarkBorderOutlinedIcon onClick={(e)=>saveItemToWatchlist(e,coin.id,setIsSaved)} fontSize="large"/>}
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-red">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className="info-container">
        <h3 className="coin-price" style={{color:coin.price_change_percentage_24h>=0 ? "var(--green)" : "var(--red)"}}>${coin.current_price.toLocaleString()}</h3>
        <p className="volume-cap">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="volume-cap">
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Grid;
