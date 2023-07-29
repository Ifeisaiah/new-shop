import ProductCard from "./productcard";
import Header from "./header";
import OtherPages from "./otherpages";
import { useState } from "react";

function ProductRoom({showHomePage, showProductRoom,showCheckOut}) {
    let [src, setSrc]= useState("https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60");
    const [isZoomed, setIsZoomed] = useState(false);
    const [transform, setTransform] = useState({x: 0, y: 0});

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const imageWidth = event.target.offsetWidth;
        const imageHeight = event.target.offsetHeight;

        const transformX  = (offsetX / rect.width) * (imageWidth - rect.width);
        const transformY = (offsetY /rect.height) * (imageHeight - rect.height);

        setTransform({x: -transformX, y: -transformY});
    }

    const handleMouseEnter = () => {
        setIsZoomed(true);
    }
    const handleMouseLeave = () => {
        setIsZoomed(false);
        setTransform({x: 0, y: 0});
    }
    function changeImageSrc(newSrc) {
        setSrc(newSrc)
    }

    let [exapandImg, setExpandImg] = useState(false);

    function exapandImage() {
        setExpandImg(prev => !prev);

    }

   
    const [descripCompo, setDescriptCompo] = useState(true);
    const [addInfoCompo, setAddInfoCompo] = useState(false);
    const [allReviewsCompo, setAllReviewsCompo] = useState(false);

    const showDescripCompo = () => {
        setDescriptCompo(true);
        setAddInfoCompo(false);
        setAllReviewsCompo(false);
    }
    const showAddInfoCompo = () => {
        setAddInfoCompo(true);
        setDescriptCompo(false);
        setAllReviewsCompo(false)
    }
    const showAllRevCompo = () => {
        setAllReviewsCompo(true);
        setDescriptCompo(false);
        setAddInfoCompo(false);
    }
    return(
         <>
        <Header annocolor='slate-200' navicolor='white' shadow='lg' />
        <section className="bg-white w-full">
            <div className="w-[80%] m-auto flex">
                <div className="w-[50%] h-[120vh] p-4">
                    <div className="my-2 pl-2 text-yellow-700">
                        <a href="#!" className=""> Home </a> -
                        <a href="#!" className=""> Women </a> -
                        <a href="#!" className=""> dresses</a>
                    
                    </div>
                    <div className={`h-[75%] bg-slate-200 relative ${isZoomed? 'zoomed': ""} overflow-hidden`}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                        <img src={src}
                        alt="product image"
                        className="w-full h-full object-cover relative transition ease-out duration-300 " 
                        style={{transform: `scale(${isZoomed? 1.5: 1}) translate(${transform.x}px, ${transform.y}px)`}}/>
                        <div className="absolute top-0 flex justify-between items-center w-full px-4 py-4">
                            <button className="h-8 w-14 bg-black text-white rounded">Sale!</button>
                            <button className="w-16 h-16 p-2 rounded-full bg-white active:scale-90" onClick={exapandImage}>
                            <i class="fa-solid fa-expand text-xl"></i>
                            </button>
                        </div>
                    </div>
                    <div className="preview mt-4 grid grid-flow-col auto-cols-max overflow-x-scroll overflow-y-hidden">
                        <img src="https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60" 
                        alt="product image" className="w-32 h-32 block object-cover mx-2 opacity-60 hover:opacity-95" 
                        onClick={() => changeImageSrc("https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60")}/> 
                        
                        <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product image" className="w-32 h-32 block object-cover mx-2 opacity-60 hover:opacity-95" 
                        onClick={() => changeImageSrc("https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60")}/> 

                        <img src="https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60" 
                        alt="product image" className="w-32 h-32 block object-cover mx-2 opacity-60 hover:opacity-95" 
                        onClick={() => changeImageSrc("https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60")}/> 

                        <img src="https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60" 
                        alt="product image" className="w-32 h-32 block object-cover mx-2 opacity-60 hover:opacity-95" 
                        onClick={() => changeImageSrc("https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60")}/> 

                        <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product image" className="w-32 h-32 block object-cover mx-2 opacity-60 hover:opacity-95" 
                        onClick={() => changeImageSrc("https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60")}/> 

                        <img src="https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60" 
                        alt="product image" className="w-32 h-32 block object-cover mx-2 opacity-60 hover:opacity-95"
                        onClick={() => changeImageSrc("https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60")} /> 
                    </div>
                </div>
                <div className="w-[50%] h-[120vh]">
                    <div className="mt-12 pl-6 pr-6">
                        <h2 className="font-bold text-4xl">Summer gown</h2>
                        <div className="w-full flex justify-between my-6">
                            <div className="">
                                <span className="font-medium text-2xl pr-2">$65.00</span>
                                <span className="line-through text-xl text-gray-500">$65.00</span>
                            </div>
                            <div className="">
                            <StarRating />
                                <span className="pl-2 uppercase text-gray-500">25 reviews</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-lg">
                        Samsa was a travelling salesman - 
                        and above it there hung a picture that he had 
                        recently cut out of an illustrated magazine and 
                        housed in a nice, gilded frame.
                        </p>
                        <div className="my-6">
                            <span><b className="text-lg">Size</b> <i className="text-gray-500">(required)</i></span>
                            <select id="dropdown" name="size" 
                            className="block w-[40%] h-[40px] bg-transparent mt-2 px-2 border border-gray-400 focus:outline-none" required>
                            <option value="student" selected>small</option>
                            <option value="job">medium</option>
                            <option value="learner">large</option>
                            </select>
                        </div>

                    <div className="">
                    <span><b className="text-lg">Type</b> <i className="text-gray-500">(required)</i></span>
                    <div className="mt-2 text-yellow-700 font-bold">
                        <input type="button" value={'hoddie'} className="uppercase h-9 w-28 text-sm border border-yellow-700 mr-2 hover:bg-yellow-700 hover:text-white" />
                        <input type="button" value={'college'} className="uppercase  h-9 w-28 text-sm border border-yellow-700 hover:bg-yellow-700 hover:text-white" />
                    </div>
                    </div>

                <div className="mt-10 flex justify-center">
                    <input type="number" defaultValue={0} className="focus:outline-none w-14 text-center border border-gray-200"  />
                    <button className="bg-zinc-900 w-full p-2 h-14 rounded text-white text-base uppercase tracking-wide active:scale-95">
                        <i class="fa-solid fa-cart-shopping"></i> Add to cart
                    </button>
                </div>

                <div className="w-full flex justify-between text-lg mt-8">
                    <div className="text-yellow-700 cursor-pointer font-bold text-base">
                        <span><i className="fa-regular fa-heart mr-2"></i> Add to wishlist</span>
                    </div>
                    <div>
                        <span><i className="fa-brands fa-facebook mr-2 hover:text-yellow-700"></i></span>
                        <span><i className="fa-brands fa-twitter hover:text-yellow-700"></i></span>
                    </div>
                </div>

                <div className="mt-8 text-base">
                    <p><b className="">Category:</b> <span className="text-gray-500">Jeans</span> </p>
                    <p><b className="">Tags:</b> <span className="text-gray-500">Leisure, elegant</span> </p>
                </div>

                 </div>
                </div>
            </div>

            <div className="bg-white mt-6 w-[90%] m-auto shadow-xl">
                <ul className="uppercase text-sm font-bold text-slate-600 py-4 w-[80%] mx-14">
                    <li className={`inline mx-4 ${descripCompo && 'text-yellow-700'} transition ease-in-out duration-300`} onClick={showDescripCompo}><a href="#!">description</a></li>
                    <li className={`inline mx-4 ${addInfoCompo && 'text-yellow-700'} transition ease-in-out duration-300`} onClick={showAddInfoCompo}><a href="#!">additional information</a></li>
                    <li className={`inline mx-4 ${allReviewsCompo && 'text-yellow-700'} transition ease-in-out duration-300`} onClick={showAllRevCompo}><a href="#!">reviews</a></li>
                </ul>
                <hr className="border border-slate-200"/>
                {
                    descripCompo && <ProductDescription />
                }
                {
                    addInfoCompo && <AdditionalInfo />
                } 
                {
                    allReviewsCompo && <AllReviews />
                }
            </div>
            <SuggestedProducts />
        </section>
        <OtherPages showHomePage={showHomePage} 
        showProductRoom={showProductRoom} 
        showCheckOut={showCheckOut} />
        {
            exapandImg && <ExpandImg src={src} exapandImage={exapandImage} exapandImg={exapandImg} />
        
        }
        </>
    )
}
const ExpandImg = ({src, exapandImage, exapandImg}) => {
    return (
        <section className="w-[100vw] h-[100vh] bg-black top-0 bg-opacity-60 fixed z-10">
            <div className="z-10 w-full h-full top-0">
                <img src={src}
                    alt="product image"
                    className="w-full h-full object-contain relative" />
                <button className="w-16 h-16 p-2 rounded-full bg-white active:scale-90 absolute top-2 right-8" onClick={exapandImage}>
               {exapandImg? <i class="fa-solid fa-xmark text-2xl"></i> : <i class="fa-solid fa-expand text-xl"></i>}
                </button>
            </div>
        </section>
    )
}

const StarRating = () => {
        return (
            <span>
            <i className="fa fa-star text-yellow-700 text-sm"></i>
            <i className="fa fa-star text-yellow-700 text-sm"></i>
            <i className="fa fa-star text-yellow-700 text-sm"></i>
            <i className="fa fa-star text-sm"></i>
            <i className="fa fa-star text-sm"></i>
            </span>
        )
}

const ProductDescription = () => {
    return(
        <div className="flex justify-center  py-6">
            <div className="w-[55%] h-[80vh] pl-0 p-4">
                <div className="p-6 text-lg pl-0">
                    <h3 className="font-bold">About</h3>
                    <div className="py-4 text-slate-500">
                        <p className="">
                        Samsa was a travelling salesman - and above it there hung a 
                        picture that he had recently cut out of an illustrated magazine and housed in
                        a nice, gilded frame.
                        </p>
                        <p className="">
                        He must have tried it a hundred times, shut his eyes so that he wouldn't have 
                        to look at the floundering legs, and only stopped when he began to feel a mild,
                        dull pain there that he had never felt before.
                        </p>
                    </div>
                    <h3 className="font-bold py-4">You will love</h3>
                    <ul className="text-slate-500">
                        <li>He must have tried it a hundred times</li>
                        <li>shut his eyes so that he wouldn't have to look</li>
                        <li>at the floundering legs, and only stopped</li>
                    </ul>
                </div>
            </div>
            <div className="w-[35%] h-[80vh] p-4">
                <img src="https://images.pexels.com/photos/4831598/pexels-photo-4831598.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                className="w-full float-left  h-full object-cover relative"
                alt="image of the product" />
            </div>
        </div>
    )
}

const AdditionalInfo = () => {
    return (
        <>
          <table className="w-full border-collapse table-auto">
            <tbody className="divide-y divide-gray-300">
                <tr className="text-medium">
                    <td className="font-bold">Product</td>
                    <td className="float-right text-slate-500">Beautiful summer gown</td>
                </tr>
                <tr className="text-medium">
                    <td className="font-bold">Available sizes</td>
                    <td className="float-right text-slate-500">all size, plus size women</td>
                </tr>
                <tr className="text-medium">
                    <td className="font-bold">Model Weight</td>
                    <td className="float-right text-slate-500">170kg</td>
                </tr>
                 <tr className="text-medium">
                    <td className="font-bold">Model Height</td>
                    <td className="float-right text-slate-500">5ft6</td>
                </tr>
                <tr className="text-medium">
                    <td className="font-bold">Weight</td>
                    <td className="float-right text-slate-500">1kg-4kg</td>
                </tr>
                <tr className="text-medium">
                    <td className="font-bold">Wholesale</td>
                    <td className="float-right text-slate-500">100pcs minimum quantiy</td>
                </tr>
                <tr className="">
                    <td className="font-bold text-medium">Available packaging</td>
                    <td className="float-right text-slate-500">custom</td>
                </tr>
            </tbody>
        </table>
</>
    )
}
const AllReviews = () => {
    return (
        <div className="p-8 w-full h-[85vh] overflow-scroll overflow-x-hidden">
        <Review 
        img="https://images.pexels.com/photos/5885843/pexels-photo-5885843.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        name="Doja Cat"
        review="Very comfortable and quality material, I love it! And so do my customers."
        date="4 Jan 2023" />
         <Review 
        img="https://images.pexels.com/photos/8414002/pexels-photo-8414002.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        name="Megan Trainor"
        review=""
        date="10 March, 2023" />
         <Review 
        img="https://images.pexels.com/photos/4831598/pexels-photo-4831598.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        name="Regina Hall"
        review=""
        date="25 Feb, 2023" />
         <Review 
        img="https://images.pexels.com/photos/9563085/pexels-photo-9563085.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        name="Rita Ora"
        review=""
        date="2 Apirl, 2023" />
         <Review 
        img="https://images.pexels.com/photos/5885625/pexels-photo-5885625.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        name="Jaden Smith"
        review=""
        date="4 July, 2023" />
         <Review 
        img="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
        name="Kimberly Joe"
        review=""
        date="21 May, 2023" />
        </div>
    )

}

const Review = (props) => {
    return (
        <div className="w-full flex justify-between h-32 my-6">
            <div className="flex">
                <div className="">
                    <img src={props.img}
                    alt="product image" className="w-32 h-32 rounded-full object-cover" />
                </div>
                <div className="ml-8 w-[55%]">
                    <h1 className="font-bold text-[#333533] text-base">{props.name}</h1>
                    <p className="mt-2 text-slate-500 text-medium">
                    The bedding was hardly able to cover it and seemed ready to slide off 
                    any moment. His many legs, pitifully thin compared with the size of 
                    the rest of him, waved about helplessly as he looked. "What's happened
                    to me?" he thought. It wasn't a dream.
                    </p>
                </div>
            </div>
            <div className="w-[30%]">
                <StarRating />
                <span className="text-slate-500 ml-2">{props.date}</span>
            </div>
        </div>
    )
}
const SuggestedProducts = () => {
    return (
        <div className="mt-12 w-[90%] m-auto flex flex-col p-2 pb-16">
            <h3 className="text-2xl font-bold">You might also like these Fresh</h3>
            <div className="suggested w-[100%] h-[53vh] py-6 grid grid-flow-col auto-cols-max overflow-x-scroll overflow-y-hidden">
            <ProductCard 
            img='https://images.pexels.com/photos/921154/pexels-photo-921154.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Peach dress'
            oldprice='$60.00'
            newprice='$40.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= ''
            name='Flare dress'
            oldprice='$30.00'
            newprice='$23.00'
            />
            <ProductCard 
            img='https://images.unsplash.com/photo-1612902456551-333ac5afa26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60'
            preview-img= 'https://images.pexels.com/photos/4937220/pexels-photo-4937220.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Sweater top'
            oldprice='$50.00'
            newprice='$30.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/8398839/pexels-photo-8398839.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Peach dress'
            oldprice='$60.00'
            newprice='$40.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/3389419/pexels-photo-3389419.jpeg?auto=compress&cs=tinysrgb&w=1200'
            preview-img= ''
            name='Flare dress'
            oldprice='$30.00'
            newprice='$23.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&w=1200'
            preview-img= 'https://images.pexels.com/photos/4937220/pexels-photo-4937220.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Sweater top'
            oldprice='$50.00'
            newprice='$30.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/9563085/pexels-photo-9563085.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= ''
            name='Flare dress'
            oldprice='$30.00'
            newprice='$23.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/8414002/pexels-photo-8414002.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/4937220/pexels-photo-4937220.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Sweater top'
            oldprice='$50.00'
            newprice='$30.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/5885625/pexels-photo-5885625.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/4668925/pexels-photo-4668925.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Summer dress'
            oldprice='$35.00'
            newprice='&20.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/4831598/pexels-photo-4831598.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/4937356/pexels-photo-4937356.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Mini pink dress'
            oldprice='$20.00'
            newprice='$15.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/5885843/pexels-photo-5885843.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/5885771/pexels-photo-5885771.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Brown dress'
            oldprice='$45.00'
            newprice='$40.00'
            />
        </div>
    
            <div className="suggested w-[100%] py-6 h-[53vh] grid  grid-flow-col auto-cols-max overflow-x-scroll overflow-y-hidden ">
            <ProductCard 
                img='https://images.pexels.com/photos/13417506/pexels-photo-13417506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                preview-img= 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                name='Peach dress'
                oldprice='$60.00'
                newprice='$40.00'
                />
                <ProductCard 
            img='https://images.pexels.com/photos/15856321/pexels-photo-15856321/free-photo-of-golden-neklaces-on-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            preview-img= ''
            name='Flare dress'
            oldprice='$30.00'
            newprice='$23.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/9211671/pexels-photo-9211671.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/4937220/pexels-photo-4937220.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Sweater top'
            oldprice='$50.00'
            newprice='$30.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/15856345/pexels-photo-15856345/free-photo-of-necklace-on-white-sheet.jpeg?auto=compress&cs=tinysrgb&w=1200'
            preview-img= 'https://images.pexels.com/photos/4668925/pexels-photo-4668925.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Summer dress'
            oldprice='$35.00'
            newprice='&20.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/3602449/pexels-photo-3602449.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/5885771/pexels-photo-5885771.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Brown dress'
            oldprice='$45.00'
            newprice='$40.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Peach dress'
            oldprice='$60.00'
            newprice='$40.00'
            />

                <ProductCard 
                img='https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                preview-img= ''
                name='Flare dress'
                oldprice='$30.00'
                newprice='$23.00'
                />
                <ProductCard 
                img='https://images.unsplash.com/photo-1612902456551-333ac5afa26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60'
                preview-img= 'https://images.pexels.com/photos/4937220/pexels-photo-4937220.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                name='Sweater top'
                oldprice='$50.00'
                newprice='$30.00'
                />
                    <ProductCard 
                img='https://images.pexels.com/photos/12747286/pexels-photo-12747286.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                preview-img= 'https://images.pexels.com/photos/4668925/pexels-photo-4668925.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                name='Summer dress'
                oldprice='$35.00'
                newprice='&20.00'
                />
                <ProductCard 
                img='https://images.unsplash.com/photo-1575890318083-4d7c6ebcd60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60'
                preview-img= 'https://images.pexels.com/photos/4937356/pexels-photo-4937356.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                name='Mini pink dress'
                oldprice='$20.00'
                newprice='$15.00'
                />
            <ProductCard 
                img='https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60'
                preview-img= 'https://images.pexels.com/photos/5885771/pexels-photo-5885771.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                name='Brown dress'
                oldprice='$45.00'
                newprice='$40.00'
                />
            
            </div>
        </div>
    )
}
export default ProductRoom;