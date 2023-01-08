import React from "react";
import cx from "classnames"; 
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function HomeItem({ className, style, subText, title }) {
    return (
        <div className={cx("bg-[#fbfbfd] bg-bottom h-[500px] bg-no-repeat pt-2", className)} style={style}>
            <h1 className="font-bold text-xl">{title}</h1>
            <h1 className="text-lg">{subText}</h1>
            <div className="text-sky-600">
                <a href="#more">Läs mer <ChevronRightIcon className="inline h-4 w-4"/></a> 
                &nbsp; &nbsp;
                <a href="#buy">Köp <ChevronRightIcon className="inline h-4 w-4"/></a> 
            </div>
        </div>
    )
}