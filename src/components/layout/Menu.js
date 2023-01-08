import React, { useState } from "react";
import cx from "classnames"; 
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid"; 

import MenuItem from "./MenuItem";


export default function Menu() {
    const handleClick = () => {
        setOpen( ! open); 
    }

    const [open, setOpen] = useState(false); 

    const iconClasses = "h-6 w-6 text-white"; 
    const items = ["Butik", "Mac", "iPad", "iPhone", "Watch", "Air Pods", "Tv och hem", "Bara hos Apple", "Tillbehör", "Support"]

    return (
        <div>
            <div onClick={handleClick} className="px-2 md:hidden">
                {( ! open) && (
                    <Bars2Icon className={iconClasses} />
                )}
                {(open) && (
                    <XMarkIcon className={iconClasses}  />
                )}
            </div>
            <div className={cx("md:grid grid-flow-col gap-2", {"hidden": ! open })}>
                {items.map((name) => {
                    return (
                        <MenuItem name={name} />
                    );
                })}
            </div>
        </div>
    )
}