import Header from "./header";
import FrontPage from "./frontpagecomp";
import Category from "./categorycomp";
import DisplayProducts from "./displayproducts";
import NewProduct from "./newproductcomp";
import Footer from "./footer";
import OtherPages from "./otherpages";
import { useState } from "react";

function HomePage({showHomePage, showProductRoom,showCheckOut}) {

    return (
        <>
        <Header style='absolute bg-transparent top-0 z-10' />
        <FrontPage />
        <Category />
        <DisplayProducts />
        <NewProduct />
        <OtherPages showHomePage={showHomePage} 
        showProductRoom={showProductRoom} 
        showCheckOut={showCheckOut} />
        </>
    )
}


export default HomePage;