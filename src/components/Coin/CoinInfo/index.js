import { useState } from 'react';
import './styles.css'

const CoinInfo = ({heading,desc}) => {
    const shortDesc=desc?.slice(0,300) + "<span style='color:var(--grey)'> Read More...</span>";
    const longDesc=desc  + "<span style='color:var(--grey)'> Read Less...</span>";;

    const [flag,setFlag]=useState(false);

    if(!desc || !heading)return;
  return (
    <div className='grey-wrapper-coinInfo'>
        <h2 className='coin-info-heading'>{heading}</h2>
        {desc?.length > 300 ?
        (<p onClick={()=>setFlag(!flag)} className='coin-info-desc' dangerouslySetInnerHTML={{__html:!flag ? shortDesc : longDesc}}/>):(
            <p className='coin-info-desc' dangerouslySetInnerHTML={{__html: shortDesc}}/>
        )
    }
        </div>
  )
}

export default CoinInfo