import React from "react";

import HomeItem from "./HomeItem";
import iphone14 from "../../img/iphone14-promo.png"; 
import iphonePro from "../../img/iphonepro-promo.png"; 
import ipad from "../../img/ipad-promo.png"; 

export default function Home() {
    return(
        <div className="text-center grid grid-cols-1 md:grid-cols-2">
            <HomeItem className="md:col-span-2" style={{backgroundImage: `url(${iphone14})`}} subText="Stor och Större." title="iPhone 14" />
            <HomeItem className="bg-[#000] text-white" style={{backgroundImage: `url(${iphonePro})`}} subText="Bortom Pro." title="iPhone 14 Pro" />
            <HomeItem style={{backgroundImage: `url(${ipad})`}} subText="Lekfull. Ritsugen. Magisk." title="iPad" />
        </div>
    )
}