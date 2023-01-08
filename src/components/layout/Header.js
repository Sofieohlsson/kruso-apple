import React from "react";
import Menu from "./Menu"; 

export default function Header() {
    return (
        <div className="fixed bg-black/[90] top-0 left-0 right-0 h-11 leading-11 py-2">
            <div className="max-w-4xl mx-auto">
                <Menu/>
            </div>
        </div>
    )
}