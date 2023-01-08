import React from "react";

export default function MenuItem({ name }) {
    return (
        <a href={`#${name}`} className="block bg-gray-400 pb-[2px] md:pb-0">
            <div className="bg-black text-white px-4 py-2 md:px-0 md:py-1">{name}</div>
        </a>
    )
}