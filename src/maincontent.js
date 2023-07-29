import Header from "./header";
import HomePage from "./homepage";
import ProductRoom from "./productroom";
import CheckOut from "./checkout";
import { useState } from "react";

function MainContent() {
    const [homePageCompo, setHomePageCompo] = useState(true);
    const [prdRoomCompo, setPrdRoomCompo] = useState(false);
    const [checkOutCompo, setCheckOutCompo] = useState(false);

    function showHomePage() {

        setHomePageCompo(true)
        setPrdRoomCompo(false)
        setCheckOutCompo(false)
    }
    function showProductRoom() {
        setPrdRoomCompo(true)
        setHomePageCompo(false)
        setCheckOutCompo(false)
    }
    function showCheckOut() {
        setCheckOutCompo(true)
        setHomePageCompo(false)
        setPrdRoomCompo(false)
    }
    return (
    <>
        {/* <Header annocolor='#edf6f9' navicolor='white' shadow='lg' />
        <ProductRoom /> */}
        {
            homePageCompo && <HomePage prdRoomCompo={prdRoomCompo} 
            homePageCompo={homePageCompo} checkOutCompo={checkOutCompo}
            showCheckOut={showCheckOut} showProductRoom={showProductRoom}
             showHomePage={showHomePage} />
        }
        {
            prdRoomCompo && <ProductRoom prdRoomCompo={prdRoomCompo} 
            homePageCompo={homePageCompo} checkOutCompo={checkOutCompo}
            showCheckOut={showCheckOut} 
            showProductRoom={showProductRoom}
            showHomePage={showHomePage} />
        }
        {
            checkOutCompo && <CheckOut prdRoomCompo={prdRoomCompo} 
            homePageCompo={homePageCompo} checkOutCompo={checkOutCompo}
            showCheckOut={showCheckOut} 
            showProductRoom={showProductRoom}
            showHomePage={showHomePage} />
        }
    </>
    )
}

export default MainContent;