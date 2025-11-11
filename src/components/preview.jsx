import React, { useState } from "react";

const Preview = (props) => {
    const {
        title,
        subheading,
        image,
        price,
        oldPrice,
        badge,
        currency,
        description,
        symbol,
    } = props;

    return (
        <section className="rounded-2xl w-full">
            <div className="w-full bg-blue-600 p-2 ">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-center text-sm text-gray-100 tracking-wide">
                        25% OFF Today! Claim it now
                    </p>
                    <button className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-100 transition-all">
                        Claim
                    </button>
                </div>
            </div>
            <div className="max-w-6xl mx-auto bg-white shadow-md p-6 flex flex-col items-center transition-all">  {/*md:flex-row gap-8 md:gap-12  md:p-10 lg:p-12 */}
                {/* HEADER */}

                {/* LEFT - IMAGE  md:w-1/2*/}
                <div className="w-full mb-3 flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md min-h-[240px] object-contain rounded-xl"
                    />
                </div>

                {/* RIGHT - CONTENT  lg:text-4xl  md:w-1/2*/}
                <div className="w-full space-y-5">
                    <h1 className="text-2xlfont-bold text-gray-900 leading-tight sm:text-3xl">
                        {title}
                    </h1>
                    {/* sm:text-lg */}
                    <p className="text-gray-600 text-base">
                        {subheading}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                            {`${symbol} ${price} ${currency}`}
                        </span>
                        <span className="text-gray-400 line-through text-lg sm:text-xl">
                            {`${symbol} ${oldPrice} ${currency}`}
                        </span>
                        <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">
                            {`Save ${symbol}${badge}`}
                        </span>
                    </div>
                    {/* sm:w-auto sm:text-base*/}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all text-center text-sm ">
                        ADD TO CART
                    </button>

                    {description ? (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
                            <p
                                className="text-sm text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </div>
                    ) : null}  
                </div>

                {/* FOOTER */}
                <footer className="w-full mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-xs sm:text-sm">
                    <p>&copy; {new Date().getFullYear()} QuickDropX. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Preview;
