function Footer() {
    return (
        <footer>
        <div className="bg-slate-100 p-4 flex flex-wrap justify-center">
            <Feat icon={<i className="fa-solid fa-truck"></i>}
            feature='free shipping'
            description='From all orders over $100' />

            <Feat icon = {<i className="fa-solid fa-retweet"></i>} 
            feature='free returns' 
            description='Return money within 30 days' />

            <Feat icon = {<i className="fa-solid fa-lock"></i>} 
            feature='secure shopping' 
            description="You're in safe hands"/>
            
             <Feat icon = {<i className="fa-solid fa-tag"></i>} 
            feature='over 10, 000 stores' 
            description='We have everything you need' />

        </div>

        <div className="flex flex-wrap justify-center  bg-zinc-900 p-20">
        <Email />
        <FooterLink />
        </div>
        <hr className="border-2 border-zinc-800" />
        <div className="flex justify-between py-4 px-10 text-gray-400 bg-zinc-900 items-center ">
            <span>&copy; 2023, Ifeoluwa Isaiah</span>
            <div className="">
                <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/mastercard.svg" 
                className="w-[2.4em] inline mx-1" 
                alt="image of payment card" />

                <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg" 
                className="w-[2.4em] inline mx-1" 
                alt="image of payment card" />

                <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/amex.svg" 
                 className="w-[2.4em] inline mx-1" 
                 alt="image of payment card" />

                <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/paypal.svg" 
                className="w-[2.4em] inline mx-1" 
                alt="image of payment card" />

                <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/maestro.svg"
                  className="w-[2.4em] inline mx-1" 
                  alt="image of payment card" />
            </div>
        </div>

        </footer>
    )
}

const Feat = (props) => {
    return (
        <div className="flex items-center justify-center m-6 text-gray-600">
            <span className="text-xl">{props.icon}</span>
            <div className="flex flex-col ml-6">
                <span className="uppercase text-black font-bold text-sm">{props.feature}</span>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

const Email = () => {
    return (
        <div className="w-[400px] mr-20 m-4">
        <span className="block uppercase text-lg text-white mb-4">Be in touch</span>
        <span className="block text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</span>
        <form className="group relative w-full mt-2">
          
            <input type="text" placeholder="search" className="search-input w-full py-2 transition ease-in-out duration-500 focus:outline-none focus:border-b-zinc-700 border-b-zinc-600 bg-transparent border border-transparent relative" />
        </form>
</div>
    )
}

const FooterLink = (props) => {
    return (
        <>
        <div className="w-[250px] mx-2 m-4">
            <span className="uppercase text-lg mb-4 block text-white">Support</span>
            <ul className="leading-loose ">
                <li>
                <a href="#!" className="text-gray-400">Contact us</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">FAQs</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Size Guide</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Shipping & returns</a>
                </li>
            </ul>
        </div>

        <div className="w-[250px] mx-2 m-4">
            <span className="uppercase text-lg mb-4 block text-white">shop</span>
            <ul className="leading-loose ">
                <li>
                <a href="#!" className="text-gray-400">Men's Shopping</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Women's Shopping</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Teen's Shopping</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Kid's Shopping</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">New in town</a>
                </li>
            </ul>
        </div>
        
        <div className="w-[250px] mx-2 m-4">
            <span className="uppercase text-lg mb-4 block text-white">Company</span>
            <ul className="leading-loose ">
                <li>
                <a href="#!" className="text-gray-400">Our Story</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Career</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Terms & Conditions</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Shipping & returns</a>
                </li>
                <li>
                <a href="#!" className="text-gray-400">Privacy & Cookie Policy</a>
                </li>
            </ul>
        </div>
        
        </>
    )
}
export default Footer;