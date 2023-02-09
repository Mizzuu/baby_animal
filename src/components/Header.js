import React from "react";
import pup from "./pup.jpg";
// src = "https://unsplash.com/photos/rFvlfJCKqEU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"

const Header = () => {
    return (
        <div className="text-slate-900 flex mb-20">
            <div className="flex-none w-64 relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    src={pup}
                    alt="dog pup with a woman"
                />
            </div>
            <div className="h-full text-center ml-20">
                <h1 className="mt-5 mb-10 text-xl font-bold">
                    How do we call baby animal?
                </h1>
                <div className="w-80">
                    <p className="text-start">
                        I realized there are several ways to call baby animals
                        like cub for bears, pup for doggies... This app helps
                        you find the right way to call the babies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
