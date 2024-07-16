import React, { useState } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./styles.css";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/converNumber";
import { Link } from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { removeItemToWatchlist } from "../../../functions/removeItemFromWatchlist";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";

const List = ({ coin,cachedCryptoData,hide }) => {
  console.log("List1", coin)
  console.log("List2", cachedCryptoData)
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isSaved,setIsSaved]=useState(watchlist?.includes(coin?.id || cachedCryptoData.id));

  return (
    
    <tr className="list-row">
      <Tooltip placement="bottom-start" title="Coin Logo">
        <td className="td-image">
      <Link to={`/coin/${coin?.id || cachedCryptoData.id}`}>
          <img src={coin?.image || cachedCryptoData.image} className="coin-logo" />
          </Link>
        </td>
      </Tooltip>
      <Tooltip placement="bottom-start" title="Coin Info">
        <td>
          <div className="name-col">
          <Link to={`/coin/${coin?.id}`}>
            <p className="coin-symbol">{coin?.symbol || cachedCryptoData.symbol}</p>
            <p className="coin-name">{coin?.name || cachedCryptoData.name}</p>
            </Link>
          </div>
        </td>
      </Tooltip>
      {coin?.price_change_percentage_24h > 0 ? (
        <Tooltip placement="bottom-start" title="Price Change In 24h">
          <td className="chip-flex">
            <div className="price-chip">
              {coin?.price_change_percentage_24h?.toFixed(2) || cachedCryptoData?.price_change_percentage_24h?.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        </Tooltip>
      ) : (
        <Tooltip placement="bottom-start" title="Price Change In 24h">
          <td className="chip-flex">
            <div className="price-chip chip-red">
              {coin?.price_change_percentage_24h?.toFixed(2) || cachedCryptoData?.price_change_percentage_24h?.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        </Tooltip>
      )}

      <Tooltip placement="bottom" title="Current Price">
        <td className="info-container">
          <h3
            className="coin-price td-center-align"
            style={{
              color:
              coin?.price_change_percentage_24h || cachedCryptoData?.price_change_percentage_24h >= 0
                  ? "var(--green)"
                  : "var(--red)",
                }}
          >
            ${coin?.current_price?.toLocaleString() || cachedCryptoData?.current_price?.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip placement="bottom" title="Total Volume">
        <td>
          <p className="volume-cap td-right-align td-total-volume">
            {coin?.total_volume?.toLocaleString() || cachedCryptoData?.total_volume?.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip placement="bottom" title="Market Capital">
        <td className="desktop-td-mkt">
          <p className="volume-cap td-right-align">
            ${coin?.market_cap?.toLocaleString() || cachedCryptoData?.market_cap?.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip placement="bottom" title="Market Capital">
        <td className="mobile-td-mkt">
          <p className="volume-cap td-right-align">
            ${convertNumber(coin?.market_cap) || convertNumber(cachedCryptoData?.market_cap)}
          </p>
        </td>
      </Tooltip>
      {hide===false && <div className="saved-icon">
        {isSaved ? <BookmarkIcon onClick={(e)=>removeItemToWatchlist(e,(coin.id || cachedCryptoData.id),setIsSaved)} fontSize="large"/> : <BookmarkBorderOutlinedIcon onClick={(e)=>saveItemToWatchlist(e,(coin.id || cachedCryptoData.id),setIsSaved)} fontSize="large"/>}
        </div>}
    </tr>
                
  );
};

export default List;
