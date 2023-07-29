import { click } from "@testing-library/user-event/dist/click";
import { useCallback, useEffect, useState } from "react";

function ProductCard(props) {
    const [productDialogue, setProductDialogue] = useState(false);

    const [img, setImg] = useState(props.img);

    const showDialogue = () => {
        setProductDialogue(true)
    }
    if (productDialogue === true) {
        document.body.style.overflowY = 'hidden';
    }
    else {
        document.body.style.overflowY = 'scroll';
    }
    return (
        <>
        <div className="prod-card w-56 relative group m-2 hover:scale-105 hover:shadow-lg" onClick={showDialogue}>
            <img src={props.img} alt="product image" 
            className="prod-img w-full h-[260px] object-cover" />
            <div className="hidden-content group-hover:flex hidden absolute flex justify-between p-4 items-center w-full h-[50px] bg-opacity-60 bg-slate-100 bottom-[80px] ">
                <span>Add to Cart</span>
                <div>
                    <span className="mr-2 text-xl hover:text-slate-600"><i class="fa-regular fa-heart"></i></span>
                    <span className="text-xl hover:text-slate-600" onClick={showDialogue}><i class="fa-solid fa-expand"></i></span>
                </div>
            </div>
            <div className="prod-info relative bg-gray-100 w-full h-[80px] p-2 flex flex-col ">
                <span className="font-bold text-lg text-stone-800 text-start">{props.name}</span>
                <div className="flex justify-between">
                <div className="price text-base">
                    <span className="text-slate-400 mr-2 line-through">{props.oldprice}</span>
                    <span className="text-slate-600">{props.newprice}</span>
                </div>
                <div className="rating group-hover:block hidden">
                    <StarRating />
                </div>
                </div>
            </div>
        </div>
        {
            productDialogue && <ProductDialogue productDialogue={productDialogue} setProductDialogue={setProductDialogue} showDialogue={showDialogue} />
        }
        </>
    )
}

const StarRating = () => {
    return (
        <span>
        <i className="fa fa-star text-yellow-700 text-sm"></i>
        <i className="fa fa-star text-yellow-700 text-sm"></i>
        <i className="fa fa-star text-yellow-700 text-sm"></i>
        <i class="fa fa-star text-sm"></i>
        <i class="fa fa-star text-sm"></i>
        </span>
    )
}

const ProductDialogue = ({setProductDialogue}) => {
    let [src, setSrc]= useState("https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60");
    function changeImageSrc(newSrc) {
        setSrc(newSrc)
    }
    return (
<section className="w-[100vw] h-[100vh] flex flex-col justify-center items-center fixed bg-black z-10 top-0 left-0 right-0 bottom-0 bg-opacity-50">
    <div className="w-[70%] h-[95vh] relative bg-white rounded p-10 overflow-hidden overflow-y-scroll flex dialogue">
                <div className="w-[50%]">
                    <div className={`h-[90%] bg-slate-200 relative overflow-hidden`}>
                        <img src={src}
                        alt="product image"
                        className="w-full h-full object-cover relative transition ease-out duration-300 " 
                        />
                        <div className="absolute top-0 flex justify-between items-center w-full px-4 py-4">
                            <button className="h-8 w-14 bg-black text-white rounded">Sale!</button>
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
                <div className="w-[50%] h-full p-6 text-start" >
                    <div className="">
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

                <div className="w-full flex justify-between text-lg mt-4">
                    <div className="text-yellow-700 cursor-pointer font-bold text-base">
                        <span><i className="fa-regular fa-heart mr-2"></i> Add to wishlist</span>
                    </div>
                    <div>
                        <span><i className="fa-brands fa-facebook mr-2 hover:text-yellow-700"></i></span>
                        <span><i className="fa-brands fa-twitter hover:text-yellow-700"></i></span>
                    </div>
                </div>

                <div className="mt-2 text-base">
                    <p><b className="">Category:</b> <span className="text-gray-500">Jeans</span> </p>
                    <p><b className="">Tags:</b> <span className="text-gray-500">Leisure, elegant</span> </p>
                </div>

                 </div>
                </div>
         <button onClick={() => setProductDialogue(false)} className="absolute z-10 top-0 right-0 w-14 h-14 rounded-full bg-slate-200 shadow-lg">
            <i class="fa-solid fa-xmark text-2xl text-zinc-800"></i>
            </button>
    </div>
 
 </section>
    )
}
export default ProductCard;