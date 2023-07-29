import { useState } from "react"
import Header from "./header";
import OtherPages from "./otherpages";

function CheckOut({showHomePage, showProductRoom,showCheckOut}) {

    const [addressCompo, setAddressCompo] = useState(true);
    const [deliveryCompo, setDeliveryCompo] = useState(false);
    const [paymentCompo, setPaymentCompo] = useState(false);
    const [orderCompo, setOrderCompo] = useState(false);

    function showAddress() {
        setAddressCompo(true)
        setDeliveryCompo(false);
        setPaymentCompo(false);
        setOrderCompo(false);
    }
    function showDeliveryPlan() {
        setDeliveryCompo(true)
        setAddressCompo(false);
        setPaymentCompo(false);
        setOrderCompo(false);
    }
    function showPaymentMethod() {
        setPaymentCompo(true);
        setOrderCompo(false);
        setAddressCompo(false);
        setDeliveryCompo(false);
    }
    function showOrderReview() {
        setOrderCompo(true);
        setAddressCompo(false);
        setDeliveryCompo(false); 
        setPaymentCompo(false);
    }

    function backBtn() {
        if (deliveryCompo) {
            setAddressCompo(true)
            setDeliveryCompo(false);
            setPaymentCompo(false);
            setOrderCompo(false);
        }
        if (paymentCompo) {
            setDeliveryCompo(true);
            setAddressCompo(false)
            setPaymentCompo(false);
            setOrderCompo(false);
        }
        if (orderCompo) {
            setPaymentCompo(true);
            setAddressCompo(false)
            setDeliveryCompo(false);
            setOrderCompo(false);
        }
    }

    function nextStepBtn() {
        if (addressCompo) {
        showDeliveryPlan()
        }
        if (deliveryCompo) {
            showPaymentMethod()
        }
        if (paymentCompo) {
            showOrderReview()
        }
    }

    return (
        <>
        <Header annocolor='slate-200' navicolor='white' shadow='lg' />
        <section className=" bg-white p-4 pb-16">
            <div className="w-[90%] mt-4 mr-auto ml-auto mb-4 p-4 pl-12">
                <p className="text-gray-600 text-lg">
                    <a href="#!" className="text-slate-400">Home</a> - CheckOut
                </p>
                <h1 className="font-bold text-5xl py-6">Checkout</h1>
                <p className="text-lg text-gray-600">Please review your order.</p>
            </div>
           <div className="h-full flex justify-center w-[90%] m-auto">
                <div className="h-full w-[63%] m-2 mr-4 mt-0">
                    <div className="my-4 w-full h-16 shadow-lg bg-white rounded flex mt-0">
                        <button className={`block h-full w-full rounded transition ease-in-out duration-500 ${addressCompo && 'bg-slate-200'}`} onClick={showAddress}>Address</button>
                        <button className={`block h-full w-full rounded transition ease-in-out duration-500 ${deliveryCompo && 'bg-slate-200'}`} onClick={showDeliveryPlan}>Delivery Plan</button>
                        <button className={`block h-full w-full rounded transition ease-in-out duration-500 ${paymentCompo && 'bg-slate-200'}`} onClick={showPaymentMethod}>Payment Method</button>
                        <button className={`block h-full w-full rounded transition ease-in-out duration-500 ${orderCompo && 'bg-slate-200'}`} onClick={showOrderReview}>Order Review</button>
                    </div>
                    <div className="w-full bg-white px-6 pt-6 pb-10 relative mt-4 rounded shadow-lg">
                    {addressCompo && <Address />}
                    {deliveryCompo && <DeliveryMethod />}
                    {paymentCompo && <PaymentMethod />}
                    {orderCompo && <OrderReview />}
                    </div>
                    <div className="w-full flex justify-between font-bold my-8" >
                        <button className="uppercase w-max" onClick={backBtn}>
                        {addressCompo && "Enter your details"}
                        {deliveryCompo && "back to address"}
                        {paymentCompo && "back to delivery plan"}
                        {orderCompo && "back to payment method"}
                        </button>
                        <button className="w-[50%] h-14 uppercase text-white my-4 bg-black rounded active:scale-90 hover:opacity-90" onClick={nextStepBtn}>
                         {addressCompo && "Add Address"}
                         {deliveryCompo && "Proceed To payment"}
                         {paymentCompo && "Proceed"}
                         {orderCompo && "Confirm order"}
                        </button>
        
                    </div>
                </div>

                <div className="bg-white w-[29%] pb-6 rounded h-max shadow-lg relative ml-4">
                    <span className="w-full p-4 block font-bold text-lg bg-slate-200">Cart Summary</span>
                    <p className="my-4 p-4 text-slate-500">
                        Shipping and additional costs are calculated based on values you have entered.
                    </p>
                    <table className="w-full border-collapse table-auto">
                        <tbody className="divide-y divide-gray-300">
                            <tr className="text-medium">
                                <td className="font-bold">Order Subtotal</td>
                                <td className="float-right text-slate-500">$390.00</td>
                            </tr>
                            <tr className="text-medium">
                                <td className="font-bold">Shipping and handling</td>
                                <td className="float-right text-slate-500">$10.00</td>
                            </tr>
                            <tr className="text-medium">
                                <td className="font-bold">Tax</td>
                                <td className="float-right text-slate-500">$0.00</td>
                            </tr>
                            <tr className="">
                                <td className="font-bold text-medium">Total</td>
                                <td className="float-right text-3xl font-bold">$400.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           </div>
        </section>
        <OtherPages showHomePage={showHomePage} 
        showProductRoom={showProductRoom} 
        showCheckOut={showCheckOut} />
        </>
    )
}

const Address = () => {
    const [individualCompo, setIndividualCompo] = useState(true);
    const [corporateCompo, setCorporateCompo] = useState(false);

    function showIndividualForm() {
        setIndividualCompo(true);
        setCorporateCompo(false);
    }
    function showCorporateForm() {
        setCorporateCompo(true);
        setIndividualCompo(false)
    }


    const [individualFormData, setIndividualFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        zip: '',
        address: '',
        shippingAddress: false,
    });

    const [corporateFormData, setCorporateFormData] = useState({
        comapanyName: '',
        companyEmail: '',
        companyPhone: '',
        country: '',
        city: '',
        zip: '',
        comapanyAddress: '',
        shippingAddress: false,
    });

    const API = [];

    function handleChange(event) {
        const {name, type, value, checked} = event.target;

        individualCompo && setIndividualFormData(prev => {
          return {
                ...prev,
                [name]: value,
            }
        })

        corporateCompo && setCorporateFormData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    console.log(individualFormData, corporateFormData)

    function submitForm(event) {
        event.preventDefault();
        API.push(individualFormData);
    }
    return (
        <>
            <h1 className="text-2xl font-bold py-6">Add New Address</h1>
            <div className="flex w-full bg-gray-50 rounded">
           <button className={`w-full h-12 mr-2 transition ease-in-out duration-500 ${individualCompo && "bg-slate-200"} text-[#30343f] rounded font-bold`} onClick={showIndividualForm}>
                Individual
           </button>
           <button className={`w-full h-12 mr-2 transition ease-in-out duration-500 ${corporateCompo && "bg-slate-200"} text-[#30343f] rounded font-bold`} onClick={showCorporateForm}>
                Corporate
           </button>
           </div>
           {individualCompo && <IndividualForm 
           handleChange={handleChange} 
           submitForm={submitForm} 
           fullName={individualFormData.fullName}
           email={individualFormData.email} 
           phone={individualFormData.phone}
           country={individualFormData.country}
           city={individualFormData.city}
           zip={individualFormData.zip}
           address={individualFormData.address} />}

           {corporateCompo && <CorporateForm 
           handleChange={handleChange}
           companyName={corporateFormData.companyName} 
           companyEmail={corporateFormData.companyEmail} 
           companyPhone ={corporateFormData.companyPhone}
           country={corporateFormData.country}
           city={corporateFormData.city}
           zip={corporateFormData.zip}
           comapanyAddress={corporateFormData.comapanyAddress} />}
      
        </>
    )
}

const IndividualForm = ({handleChange, submitForm, fullName, email, phone, country, city, zip, address}) => {
  
    return (
        <form className="pt-2" onSubmit={submitForm}>
                <InputField  
                title="Full Name*" type="text" placeholder="John Doe" id='one' value={fullName} 
                name="fullName"
                onChange={handleChange} />
                <div className="flex justify-between" >
                 <InputField  
                    title="Email Address*" type="email" placeholder="Johndoe@gamil.com" id='two' 
                    style="mr-2" value={email} onChange={handleChange} name="email" />
                <InputField  
                    title="Phone*" type="text" placeholder="(241) 575-0109" id='sev' style="ml-2" value={phone} 
                    onChange={handleChange} name="phone" />
                </div>
                 <InputField  
                title="Country*" type="text" placeholder="United Kingdom" id='four' value={country} 
                onChange={handleChange} name="country" />
                <div className="flex justify-between">
                    <InputField  
                    title="City*" type="text" placeholder="London" id='five' style="mr-2" value={city}
                    onChange={handleChange} name="city" />
                    <InputField  
                    title="ZIP*" type="text" placeholder="ZIP" id='six' style="ml-2" value={zip} 
                    name="city"
                    onChange={handleChange} />
                </div>
                  <InputField  
                    title="Address*" type="text" placeholder="678 Island Str" id='three' value={address} 
                    name="address"
                    onChange={handleChange} />

                <div className="py-6 flex items-center">
                    <input type="checkbox" id="shipping-address" className="mr-2" name="shippingAddress"  />
                    <label htmlFor="shipping-address">Use a different shipping address</label>
                </div>
             
            </form>

    )
}
const CorporateForm = ({handleChange, submitForm, companyName, companyAddress, companyEmail, companyPhone, city, zip, country }) => {
    return (
        <form className="pt-2" onSubmit={submitForm}>
              <div className="flex justify-between">
                    <InputField  
                    title="Company Name*" type="text" placeholder="ARIandco" id='one' style="mr-2"
                    value={companyName} 
                    name="companyName"
                    onChange={handleChange} />
                    <InputField  
                    title="Company Email*" type="email" placeholder="ariandco@gamil.com" id='two' style="ml-2"
                    value={companyEmail} 
                    name="companyEmail"
                    onChange={handleChange} />
                </div>
                
                <div className="flex justify-between">
                    <InputField  
                    title="Company Phone*" type="text" placeholder="(241) 575-0109" id='sev' style="mr-2" 
                    value={companyPhone} 
                    name="companyPhone"
                    onChange={handleChange}/>
                    <InputField  
                    title="Country*" type="text" placeholder="United States" id='four' style="ml-2" 
                    value={country} 
                    name="country"
                    onChange={handleChange}/>  
                </div>
                
                <div className="flex justify-between">
                    <InputField  
                    title="City*" type="text" placeholder="New York" id='five' style="mr-2" 
                    value={city} 
                    name="city"
                    onChange={handleChange}/>
                    <InputField  
                    title="ZIP*" type="text" placeholder="ZIP" id='six' style="ml-2" 
                    value={zip} 
                    name="zip"
                    onChange={handleChange}/>
                </div>
                  <InputField  
                    title="Company Address*" type="text" placeholder="546 York Str" id='three' 
                    value={companyAddress} 
                    name="companyAddress"
                    onChange={handleChange} />
                <div className="py-6 flex items-center">
                <input type="checkbox" id="shipping-address" className="mr-2" />
                <label htmlFor="shipping-address">Use a different shipping address</label>
            </div>
            </form>
    )
}

const InputField = (props) => {
    return (
        <div className={`w-full ${props.style}`}>
           <label htmlFor={props.id} className="block text-base font-bold my-4">{props.title}</label>
           <input className="block mt-2 w-full bg-transparent transition ease-in-out duration-500 border border-gray-300 focus:border-gray-400 focus:outline-none rounded p-2" id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange} />
        </div>
    )
}

const DeliveryMethod = () => {
    const deafultBod = 'border-[#364156]';
    const selectedBod = 'border-[#58a4b0]';
   
    return (
        <>
        <h3 className="text-2xl pl-2 py-6 font-bold">Choose a delivery plan</h3>
       <div className="flex flex-wrap justify-between">
            <div className={`group option w-[22%] h-72 bg-transparent border-2 text-center rounded relative rounded shadow-lg m-2 hover:scale-105 hover:shadow-2xl active:scale-95 hover:border-[#58a4b0]`}
            >
                <span className="block w-full mt-6 text-black font-bold">1 day delivery</span>
                <p className="p-4 pt-2 text-base">Get your order in exactly 24 hours! For $20</p>
                <button className="text-center bg-[#364156] w-[70%] h-10 text-white font-bold text-base absolute bottom-4 left-6 right-10 rounded-full hover:bg-transparent hover:border hover:border-[#62929e] transition ease-in-out duration-500 group-hover:bg-[#58a4b0]">Select</button>
            </div>
            <div className={`group option w-[22%] h-72 bg-transparent border-2 text-center border-[#364156] rounded relative rounded shadow-lg m-2 hover:scale-105 hover:shadow-2xl active:scale-95 hover:border-[#58a4b0]`}>
                <span className="block w-full mt-6 text-black font-bold">3 days delivery</span>
                <p className="p-4 pt-2 text-base">Your Order at your dooestep in 3 days for $15</p>
                <button className="text-center bg-[#364156] w-[70%] h-10 text-white font-bold text-base absolute bottom-4 left-6 right-10 rounded-full hover:bg-transparent hover:border hover:border-[#62929e] transition ease-in-out duration-500 group-hover:bg-[#58a4b0]">Select</button>
            </div>
            <div className={`group option w-[22%] h-72 bg-transparent border-2 text-center border-[#364156] rounded relative rounded shadow-lg m-2 hover:scale-105 hover:shadow-2xl active:scale-95 hover:border-[#58a4b0]`}>
                <span className="block w-full mt-6 text-black font-bold">7 days delivery</span>
                <p className="p-4 pt-2 text-base">Get your order in a week for even lower $10</p>
                <button className="text-center bg-[#364156] w-[70%] h-10 text-white font-bold text-base absolute bottom-4 left-6 right-10 rounded-full hover:bg-transparent hover:border hover:border-[#62929e] transition ease-in-out duration-500 group-hover:bg-[#58a4b0]">Select</button>
            </div>
            <div className={`group option w-[22%] h-72 bg-transparent border-2 text-center border-[#364156] rounded relative rounded shadow-lg m-2 hover:scale-105 hover:shadow-2xl active:scale-95 hover:border-[#58a4b0]`} >
                <span className="block w-full mt-6 text-black font-bold">14 days delivery</span>
                <p className="p-4 pt-2 text-base">Your order at your doorstep in 2 weeks for free!</p>
                <button className="text-center bg-[#364156] w-[70%] h-10 text-white font-bold text-base absolute bottom-4 left-6 right-10 rounded-full hover:bg-transparent hover:border hover:border-[#62929e] transition ease-in-out duration-500 group-hover:bg-[#58a4b0]">Select</button>
            </div>
           
       </div>
       </>
    )
}

const DeliveryOption = (props) => {
    const [oneDayDeliv, setOneDayDeliv] = useState(false);
    const [threeDaysDeliv, setThreeDaysDeliv] = useState(false);
    const [sevDaysDeliv, setSevDaysDeliv] = useState(false);
    const [fourteenDaysDeliv, setFourteenDaysDeliv] = useState(false);

    const [selected, setSelected] = useState(true)

    const deafultBod = 'border-[#364156]';
    const selectedBod = 'border-[#58a4b0]';
    
    function selectOption(event) {
        console.log(props.option  + ' was Selected');
        setSelected(prev => !prev)
    }
    return (
        <div className={`group option w-[22%] h-72 bg-transparent border-2 text-center border-[#364156] rounded relative rounded shadow-lg m-2 hover:scale-105 hover:shadow-2xl active:scale-95 hover:border-[#58a4b0]`} onClick={selectOption} id={props.option}>
            <span className="block w-full mt-6 text-black font-bold">{props.option}</span>
            <p className="p-4 pt-2 text-base">{props.description}</p>
            <button className="text-center bg-[#364156] w-[70%] h-10 text-white font-bold text-base absolute bottom-4 left-6 right-10 rounded-full hover:bg-transparent hover:border hover:border-[#62929e] transition ease-in-out duration-500 group-hover:bg-[#58a4b0]">Select</button>
        </div>
    )
}

const PaymentMethod = () => {
    return (
        <div className="">
        <h1 className="font-bold text-3xl py-6 mx-2">Payment Details</h1>
        <div className="flex">
           <button className="w-full h-14 mx-2 bg-transparent border border-gray-200 rounded">
           <i className="fa-regular fa-credit-card pr-2"></i>
           Card
           </button>
           <button className="w-full h-14 mx-2 bg-transparent border border-gray-200 rounded">
           <i className="fa-brands fa-paypal pr-2"></i>
           Paypal
           </button>
           <button className="w-full h-14 mx-2 bg-transparent border border-gray-200 rounded">
           <i className="fa-brands fa-google pr-2"></i>
           Google Pay
           </button>
        </div>
        <form className="">
            <div className="flex justify-between">
            <InputField  
            title="Card Holder Name*" type="text" placeholder="John Doe" id='one' style="mr-2" />
             <InputField  
                    title="Email Address*" type="email" placeholder="Johndoe@gamil.com" id='two' style="ml-2" />
            </div>
            <InputField  
            title="Card Number*" type="text" placeholder="Card number" id='two' />
            <div className="flex justify-between">
                <InputField  
                title="Expiration Date" type="date" placeholder="MM/DD" id='three' style="mr-2" />
                <InputField  
                title="CVC/CVV" type="text" placeholder="123" id='four' style="ml-2" />
            </div>
            <div className="mt-6 text-base flex items-center">
                <input type="checkbox" id="checkbox" className="mr-2" />
                <label htmlFor="checkbox">Save my payment details for furture purchase</label>
            </div>
        </form>
      {/*  <div className="mt-8 bg-white">
            <span className="block bg-slate-100 p-6 font-bold">Pay on delivery?</span>
            <p className="p-4 text-base">
            The bedding was hardly able to cover it and seemed ready to slide off any moment. 
            His many legs, pitifully thin compared with the size of the rest of him,
             waved about helplessly as he looked. "What's happened to me?" he thought.
             It wasn't a dream.
            </p>
           </div>
    */}

        </div>
    )
}


const OrderReview = () => {
    return (
        <div className="">
           <h3 className="text-2xl text-[#0b090a] font-bold">Summary Order</h3>
           <p className="py-6 text-lg">
            Check and confirm the items you want to order.
           </p>
           <div className="border border-gray-300 rounded p-6">
              <Order 
                image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                name=""
                newPrice="$126.00"
                oldPrice="$183.00"
                other=""
                />
                <Order 
                image="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                name=""
                newPrice="$180.00"
                oldPrice="$256.00"
                other=""
                />
                <Order 
                image="https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                name=""
                newPrice="$119.00"
                oldPrice="$179.00"
                other=""
                />
                <Order 
                image="https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                name=""
                newPrice="$100.00"
                oldPrice="$140.00"
                other=""
                />
           </div>
        </div>
    )

}

const Order = (props) => {
    return (
        <div className="w-full flex justify-between h-32 my-6">
            <div className="flex">
                <div className="border border-gray-300 p-4 rounded">
                    <img src={props.image}
                    alt="product image" className="w-36 h-full object-cover" />
                </div>
                <div className="px-4 w-[55%]">
                    <h1 className="font-bold text-[#333533] text-base">New Balance 57/40 Men's Sneakers-Mindful Gray.</h1>
                    <p className="my-6">
                        <span className="font-bold text-[#333533] text-lg">{props.newPrice}</span>
                        <sup className="text-base line-through ml-2 text-gray-400">{props.oldPrice}</sup>
                    </p>
                </div>
            </div>
            <div className="">
                <span className="text-gray-400">42 EU-8.5 US</span>
            </div>
        </div>
    )
}
export default CheckOut;