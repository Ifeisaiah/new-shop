function OtherPages(props) {
    return (
    <section className=" py-10">
        <h2 className="text-2xl py-10 ml-10 font-medium italic font-serif uppercase">Other Webpages.</h2>
        <div className="grid grid-flow-col py-10 auto-cols-max other-webpage">
        <Page handleClick={props.showHomePage} id="homepage" name="HomePage" 
        imgOne="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k4cg01yrnm3o8eymu49w.png"
        imgTwo="https://res.cloudinary.com/practicaldev/image/fetch/s--tEP6apLT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h332jqluetwbx77hgb9t.png"
        imgThree="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hthq54exfb2b2qbn6ra1.png"
        className="page-one" />

        <Page handleClick={props.showProductRoom} id="product-room" name="Product Page" 
         imgOne="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/509pg6fqca0dg7ecr6ao.png"
         imgTwo="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1wocfcxdjtzeistgtws.png"
         imgThree="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zeavw3d9cmg3wwrqi8s8.png"
         className="page-two" />

        <Page handleClick={props.showCheckOut} id="checkout" name="CheckOut Page"
         imgOne="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hnkof3ze4xz7z8u65b06.png"
         imgTwo="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jzn0y90sxq9degbf7792.png"
         imgThree="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hw68ajutqfga1012tljz.png" 
         className="page-three" />
         </div>
    </section>
    )
}

const Page = (props) => {
    return (
        <div className={`block w-[500px] active:scale-95 relative mx-60 ${props.className}`} onClick={props.handleClick} id={props.id}>
            <img src={props.imgOne}
            alt="webpage" className="w-full h-[300px] relative object-cover shadow-lg rounded" />
            <img src={props.imgTwo}
            alt="webpage" className="w-[400px] h-[200px] object-cover absolute  -top-8 -left-80 shadow-xl rounded" />
             <img src={props.imgThree}
            alt="webpage" className="w-[400px] h-[200px] object-cover absolute  bottom-14 -right-80 shadow-xl rounded" />
            <h1 className="text-center font-bold text-base my-4 uppercase">{props.name}</h1>
        </div>
    )
}


export default OtherPages;
