import { useState } from "react"

const Header = (props) => {
    const [toggleSideBar, setToggleSideBar] = useState(false);

    function openSideBar() {
        document.body.style.overflow ='hidden';
        setToggleSideBar(true);
    }
    function closeSideBar() {
        document.body.style.overflowY = 'scroll';
        setToggleSideBar(false)
    }

    return (
        <>
        <header className={`app-header flex w-full flex-col items-center ${props.style}`}>
        <Announcement bgcolor={props.annocolor} />
        <Navigation handleClick={openSideBar} bgcolor={props.navicolor} shadow={props.shadow} />
        </header>
       { toggleSideBar? <SideBarNav handleClick={closeSideBar} /> : ''}
        </>
    )
}

const Announcement = (props) => {
    const announcements = [
        'International Delivery!',
        'Free delivery for orders over $120!'
    ]
    return (
    <div className={`header-info flex justify-between items-center w-full px-10 h-14 bg-${props.bgcolor}`}>
        <div className="shop-contact space-x-4 text-zinc-700">
            <a href="#!" className="contact-icon hover:text-slate-600 transition ease-in-out duration-300"><i className="fa-brands fa-facebook"></i></a>
            <a href="#!" className="contact-icon hover:text-slate-600 transition ease-in-out duration-300"><i className="fa-brands fa-twitter"></i></a>
            <a href="#!" className="contact-icon hover:text-slate-600 transition ease-in-out duration-300"><i className="fa-solid fa-phone"></i></a>
            <a href="#!" className="contact-icon">020-600-400-600</a>
        </div>
        <span className="announcement font-normal">Free delivery for orders over $120!</span>
        <div className="app-config flex space-x-5">
            <ConfigDropDown type="language" default="English" opt1="German" opt2="French"  />
            <ConfigDropDown type="Currency" default="USD" opt1="EUR" opt2="GBP" />
        </div>
    </div>
    )
}
//#edf6f9 white
const Navigation = ({handleClick, bgcolor, shadow}) => {
    const [toggleDropdown, setToggleDropDown] = useState(true);

    return (
            <nav className={`navigation flex justify-between items-center w-full px-10 p-3 bg-${bgcolor} shadow-${shadow}`}>
            
            <div className="nav-link-box space-x-4 text-lg text-zinc-700 flex">
                <h1 className="font-bold text-2xl uppercase cursor-pointer">Shopee&co</h1>
                <NewinDropdown style='z-10 nav-dropdown-content bg-slate-50 shadow-xl z-10 hidden flex group-hover:flex absolute w-max h-[300px] left-[20%]'
                img='https://images.unsplash.com/photo-1546728150-b3cbeddb6f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
                substyle1='p-10'
                substyle2='ml-6 mt-6 p-5 pt-10'
                toggleDropdown={toggleDropdown}

              />

                <MenDropdown style='z-10 nav-dropdown-content bg-slate-50 shadow-xl z-10 hidden flex group-hover:flex hover:flex absolute w-max h-[300px] left-[20%]'
                img='https://images.unsplash.com/photo-1579362093956-a743707ecac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' 
                substyle1='p-10'
                substyle2='ml-6 mt-6 p-5 pt-10'
                toggleDropdown={toggleDropdown}
                
                />

                <WomenDropdown  style='z-10 nav-dropdown-content bg-slate-50 shadow-xl z-10 hidden flex group-hover:flex hover:flex absolute w-max h-max left-[20%]' 
                img='https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'
                substyle1='p-10'
                substyle2='ml-6 p-5 mt-0 pt-0' 
                toggleDropdown={toggleDropdown}
                 
                 />

                <TeenDropdown style ='z-10 nav-dropdown-content bg-slate-50 shadow-xl z-10 hidden flex group-hover:flex hover:flex absolute w-max h-max left-[20%]' 
                img1='https://images.unsplash.com/photo-1582738509941-360b28c941ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60' 
                img2='https://images.unsplash.com/photo-1571782742478-0816a4773a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=802&q=80'
                img3='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                substyle1='p-8 mr-0'
                substyle2='mt-4 pt-0'
                substyle3='p-10'
                toggleDropdown={toggleDropdown}

                />

               <KidsDropdown style='z-10 nav-dropdown-content bg-slate-50 shadow-xl z-10 hidden group-hover:block hover:block absolute w-max h-max left-[20%]' 
               flex='flex'
               img='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' 
               substyle1='p-10'
               toggleDropdown={toggleDropdown}
               
               />

            </div>

            <div className="nav-main-box flex">
                <form className="group relative">
                <svg width="20" height="20" fill="currentColor" className="absolute right-12 top-1/2 -mt-2.5 text-zinc-500 group-focus-within:text-zinc-700" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input type="text" placeholder="search" className="search-input mx-10 w-96 px-3.5 py-2 transition ease-in-out duration-500 focus:outline-none focus:border-b-zinc-700 border-b-zinc-300 bg-transparent border border-transparent relative" />
                </form>
                <NavItem navIcon={<i className="fa-regular fa-user"></i>} />
                <NavItem navIcon={<i className="fa-regular fa-heart"></i>} itemCount='5' />
                <NavItem navIcon={<i className="fa-solid fa-bag-shopping"></i>} itemCount='10' />
                <NavItem navIcon={<i className="fa-solid fa-bars"></i>} handleClick={handleClick}/>
            </div>
        </nav>
    )
}

const NavItem = (props) => {
    return (
    <div className="nav-item mx-3 relative" onClick={props.handleClick}>
    <span className="nav-icon text-2xl text-zinc-700 relative hover:text-slate-500 transition ease-in-out duration-300">{props.navIcon}</span>
    {props.itemCount? <span className="item-count absolute -top-2 -right-4 bg-slate-500 p-2 rounded-full w-6 h-6 text-slate-50 text-xs flex justify-center items-center">{props.itemCount}</span>: ''}
    </div>   
 )
}

const NewinDropdown = (props) => {
    return (
        <div className="nav-dropdown home group relative">
        <span className={`nav-dropbtn ${props.heading}`} onClick={props.toggle}>New in {props.icon? props.icon: ''}</span>
         {props.toggleDropdown? 
         <div className={props.style} >
         <div className={props.substyle1}>
            <b>New Arrivals</b><b>Men NEW!</b>
            <a href="#!" className="nav-link">New in Clothing</a>
            <a href="#!" className="nav-link">New in Shoes</a>
            <a href="#!" className="nav-link">New in Bags</a>
            <a href="#!" className="nav-link">New in Beachwears</a>
            
         </div>
         <div className={props.substyle2}>
            <a href="#!" className="nav-link">New in Weddings</a>
            <a href="#!" className="nav-link">New in Beauty</a>
            <a href="#!" className="nav-link">New in Activewear</a>
            <a href="#!" className="nav-link">New in Jewelry</a>
         </div> 
        
         {props.img? <img src={props.img} className="h-full w-[300px] max-w[200px] object-cover ml-6 my-0 mr-0" alt="image of a model wearing a jewelry" />: ''}
        </div> : ''
        }
  </div>

)}

const MenDropdown = (props) => {
    return (
        <div className="nav-dropdown home group relative">
        <span className={`nav-dropbtn ${props.heading}`}  onClick={props.toggle}>Men {props.icon? props.icon: ''}</span>
        {
         props.toggleDropdown?
        <div className={props.style}>
         <div className={props.substyle1}>
            <b>Men NEW!</b>
            <a href="#!" className="nav-link">New in Clothing</a>
            <a href="#!" className="nav-link">New in Shoes</a>
            <a href="#!" className="nav-link">New in Bags</a>
            <a href="#!" className="nav-link">New in Beachwears</a>
            <a href="#!" className="nav-link">New in Face + Body</a>
            <a href="#!" className="nav-link">New in Assesories</a>
            
         </div>
         
         <div className={props.substyle2}>
            <a href="#!" className="nav-link">New in Weddings</a>
            <a href="#!" className="nav-link">New in Tux</a>
            <a href="#!" className="nav-link">New in Cargo pants</a>
            <a href="#!" className="nav-link">New in Jewelry</a>
         </div>

         <div className={props.substyle2}>
            <a href="#!" className="nav-link">New in T-shirts</a>
            <a href="#!" className="nav-link">New in Tanks</a>
            <a href="#!" className="nav-link">New in Shorts</a>
            <a href="#!" className="nav-link">New in Hoodies</a>
         </div>
        
        {props.img? <img src={props.img}
         className="h-full w-[200px] max-w[200px] object-cover ml-6 my-0 mr-0" alt="image of a model wearing a jewelry" />
          : ''}
        </div>
        : ''
        }
  </div>

    )
}

const WomenDropdown = (props) => {
    return (
        <div className="nav-dropdown home group relative">
        <span className={`nav-dropbtn ${props.heading}`}  onClick={props.toggle}>Women {props.icon? props.icon: ''}</span>
        { props.toggleDropdown? 
        <div className={props.style}>
         <div className="">
            <div className={props.substyle1}>
                <b>Clothing</b>
                <a href="#!" className="nav-link">New in Clothing</a>
                <a href="#!" className="nav-link">New in Shoes</a>
                <a href="#!" className="nav-link">New in Bags</a>
                <a href="#!" className="nav-link">New in Beachwears</a>
                <a href="#!" className="nav-link">New in Face + Body</a>
                <a href="#!" className="nav-link">New in Assesories</a>
                
            </div>
            <div className={props.substyle2}>
                <a href="#!" className="nav-link">New in Weddings</a>
                <a href="#!" className="nav-link">New in Tux</a>
                <a href="#!" className="nav-link">New in Cargo pants</a>
                <a href="#!" className="nav-link">New in Jewelry</a>
            </div>
         </div>
         <div className="">
            <div className={props.substyle1}>
                <b>Beauty & Skincare</b>
                <a href="#!" className="nav-link">New in Clothing</a>
                <a href="#!" className="nav-link">New in Shoes</a>
                <a href="#!" className="nav-link">New in Bags</a>
                <a href="#!" className="nav-link">New in Beachwears</a>
                <a href="#!" className="nav-link">New in Face + Body</a>
                <a href="#!" className="nav-link">New in Assesories</a>
                
            </div>
            <div className={props.substyle2}>
                <a href="#!" className="nav-link">New in Weddings</a>
                <a href="#!" className="nav-link">New in Tux</a>
                <a href="#!" className="nav-link">New in Cargo pants</a>
                <a href="#!" className="nav-link">New in Jewelry</a>
            </div>
         </div>

         <div className="">
            <div className={props.substyle1}>
                <b>Jewelry</b>
                <a href="#!" className="nav-link">New in Clothing</a>
                <a href="#!" className="nav-link">New in Shoes</a>
                <a href="#!" className="nav-link">New in Bags</a>
                <a href="#!" className="nav-link">New in Beachwears</a>
                <a href="#!" className="nav-link">New in Face + Body</a>
                <a href="#!" className="nav-link">New in Assesories</a>
                
            </div>
            <div className={props.substyle2}>
                <a href="#!" className="nav-link">New in Weddings</a>
                <a href="#!" className="nav-link">New in Tux</a>
                <a href="#!" className="nav-link">New in Cargo pants</a>
                <a href="#!" className="nav-link">New in Jewelry</a>
            </div>
         </div>
        
        {props.img? <img src={props.img}
         className="h-full w-[320px] max-w[320px] object-cover ml-6 my-0 mr-0" alt="image of a model wearing a jewelry" />
         : ''}
        </div> : ''
        }
 
  </div>

    )
}

const TeenDropdown = (props) => {
    return (
        <div className="nav-dropdown home group relative">
        <span className={`nav-dropbtn ${props.heading}`}  onClick={props.toggle}>Teen {props.icon? props.icon: ''}</span>
       { props.toggleDropdown?
        <div className={props.style}>
            <div className={props.substyle1}>
                <div className="">
                  {props.img1? <img src={props.img1} 
                    className="w-[300px] h-[180px] object-cover mb-2" alt="model in an outfit" />
                    : '' }
                    <b>Clothing</b>
                    <a href="#!" className="nav-link">New in Clothing</a>
                    <a href="#!" className="nav-link">New in Shoes</a>
                    <a href="#!" className="nav-link">New in Bags</a>
                    <a href="#!" className="nav-link">New in Beachwears</a>
                    <a href="#!" className="nav-link">New in Face + Body</a>
                    
                </div>
                <div className={props.substyle2}>
                    <b>Bags</b>
                    <a href="#!" className="nav-link">New in Weddings</a>
                    <a href="#!" className="nav-link">New in Tux</a>
                </div>
            </div>
            <div className={props.substyle3}>
                <div className="">
                    {props.img2? <img src={props.img2} 
                    className="w-[300px] h-[180px] object-cover mb-2" alt="model in an outfit"/>
                    : ''}
                    <b>Beauty & Skincare</b>
                    <a href="#!" className="nav-link">New in Clothing</a>
                    <a href="#!" className="nav-link">New in Shoes</a>
                    <a href="#!" className="nav-link">New in Bags</a>
                    <a href="#!" className="nav-link">New in Beachwears</a>
                    <a href="#!" className="nav-link">New in Face + Body</a>
                    
                </div>
                <div className={props.substyle2}>
                    <b>Shoes</b>
                    <a href="#!" className="nav-link">New in Weddings</a>
                    <a href="#!" className="nav-link">New in Tux</a>
                </div>
            </div>

            <div className={props.substyle3}>
                <div className="">
                   {props.img3? <img src={props.img3}
                    className="w-[300px] h-[180px] object-cover mb-2" alt="model in an outfit"/>
                    : ''}
                    <b>Jewelry</b>
                    <a href="#!" className="nav-link">New in Clothing</a>
                    <a href="#!" className="nav-link">New in Shoes</a>
                    <a href="#!" className="nav-link">New in Bags</a>
                    <a href="#!" className="nav-link">New in Beachwears</a>
                    <a href="#!" className="nav-link">New in Face + Body</a>
                    
                </div>
                <div className={props.substyle2}>
                    <b>Hats</b>
                    <a href="#!" className="nav-link">New in Weddings</a>
                    <a href="#!" className="nav-link">New in Tux</a>
                </div>
            </div>
        
        </div>
        : ''
       }
  </div>

    )
}

const KidsDropdown = (props) => {
   return (
    <div className="nav-dropdown home group relative">
    <span className={`nav-dropbtn ${props.heading}`} onClick={props.toggle}>Kids {props.icon? props.icon: ''}</span>
    
    { props.toggleDropdown?
        <div className={props.style}>
        {props.img? 
        <img src={props.img} 
        className="w-full h-[220px] object-cover" alt="a picture of a child model" />
        : ''}
     <div className={props.flex}>
     <div className={props.substyle1}>
            <b>Clothing</b>
            <a href="#!" className="nav-link">New in Clothing</a>
            <a href="#!" className="nav-link">New in Shoes</a>
            <a href="#!" className="nav-link">New in Bags</a>
            <a href="#!" className="nav-link">New in Beachwears</a>
            <a href="#!" className="nav-link">New in Face + Body</a>
            <a href="#!" className="nav-link">New in Assesories</a>
            
        </div>
        <div className={props.substyle1}>
            <b>Back to school</b>
            <a href="#!" className="nav-link">New in Clothing</a>
            <a href="#!" className="nav-link">New in Shoes</a>
            <a href="#!" className="nav-link">New in Bags</a>
            <a href="#!" className="nav-link">New in Beachwears</a>
            <a href="#!" className="nav-link">New in Face + Body</a>
            <a href="#!" className="nav-link">New in Assesories</a>
            
        </div>
        <div className={props.substyle1}>
            <b>Toys</b>
            <a href="#!" className="nav-link">New in Clothing</a>
            <a href="#!" className="nav-link">New in Shoes</a>
            <a href="#!" className="nav-link">New in Bags</a>
            <a href="#!" className="nav-link">New in Beachwears</a>
            <a href="#!" className="nav-link">New in Face + Body</a>
            <a href="#!" className="nav-link">New in Assesories</a>
            
        </div>
     </div>
     </div>
     : ''
    }
</div>
   )
}

const ConfigDropDown = (props) => {
    return (
        <div className="config-dropdown relative group">
            <span className="config-dropbtn cursor-pointer">{props.default} <i className="fa-solid fa-angle-down ml-2 text-zinc-800 transition ease-in-out duration-300 group-hover:rotate-180 " aria-hidden="true"></i></span>
            <div className="config-dropdown-content text-black shadow-lg z-10 hidden group-hover:block hover:block absolute p-8 bg-white w-[200px] right-[20%] cursor-pointer">
               <a href="#!" className="config-option block hover:text-zinc-600" key={props.opt1}>{props.opt1}</a>
               <a href="#!" className="config-option block my-2 hover:text-zinc-600" key={props.opt2}>{props.opt2}</a>
            </div>
      </div>
    )
}

const SideBarNav = ({handleClick}) => {
    const [newinDropdown, setNewinDropdown] = useState(true);

    const [womenDropdown, setWomenDropdown] = useState(false);
    const [menDropdown, setMenDropdown] = useState(false);

    const [teenDropdown, setTeenDropdown] = useState(false);
    const [kidsDropdown, setKidsDropdown] = useState(false);
    
    function toggleNewinDropdown() {
        setNewinDropdown(prev => !prev)
    }
    function toggleWomenDropdown() {
        setWomenDropdown(prev => !prev)
    }
    function toggleMenDropdown() {
        setMenDropdown(prev => !prev)
    }
    function toggleTeenDropdown() {
        setTeenDropdown(prev => !prev)
    }
    function toggleKidsDropdown() {
        setKidsDropdown(prev => !prev)
    }//1144px

    const headingStyle= 'block w-full text-[18px] font-bold';
    const icon = <i className="fa-solid fa-angle-down ml-2 text-zinc-800 transition ease-in-out duration-300 group-hover:rotate-180 float-right" aria-hidden="true"></i>;
    const substyle1 = 'mt-2 p-2 ';
    const substyle2 = 'p-2'
    return (
    <section className="w-[100vw] h-[100vh] bg-black bg-opacity-40 absolute z-10">
     <div className="h-full max-w-full pl-4 pr-4 w-[500px] bg-white fixed z-20 top-0 right-0 overflow-scroll p-2 overflow-x-hidden">
        <span className="block text-end mr-[10px] mb-[20px] text-[25px] mt-4 text-zinc-600" onClick={handleClick}><i className="fa-solid fa-x hover:rotate-180 transition ease-in-out duration-500"></i></span>
        <NewinDropdown style='block m-6' 
        heading={headingStyle} icon={icon}  
        substyle1={substyle1} substyle2={substyle2} 
        toggle={toggleNewinDropdown} toggleDropdown={newinDropdown} />

        <MenDropdown style='block m-6' 
        heading={headingStyle} icon={icon}  
        substyle1={substyle1} substyle2={substyle2} 
        toggle={toggleMenDropdown} toggleDropdown={menDropdown} />

        <WomenDropdown style='block m-6' 
        heading={headingStyle} icon={icon} 
        substyle1={substyle1} substyle2={substyle2} 
        toggle={toggleWomenDropdown} toggleDropdown={womenDropdown} />

        <TeenDropdown style='block m-6' 
        heading={headingStyle} icon={icon} 
        substyle1={substyle1} substyle2={substyle2} 
        toggle={toggleTeenDropdown} toggleDropdown={teenDropdown} />

        <KidsDropdown flex='block m-6' 
        heading={headingStyle} icon={icon} 
        substyle1={substyle1} substyle2={substyle2} 
        toggle={toggleKidsDropdown} toggleDropdown={kidsDropdown} />
       
         <div className="shop-contact space-x-4 text-zinc-700 ml-4 mt-6">
            <a href="#!" className="contact-icon hover:text-yellow-600 transition ease-in-out duration-500"><i className="fa-brands fa-facebook"></i></a>
            <a href="#!" className="contact-icon hover:text-yellow-600 transition ease-in-out duration-500"><i className="fa-brands fa-twitter"></i></a>
            <a href="#!" className="contact-icon hover:text-yellow-600 transition ease-in-out duration-500"><i className="fa-solid fa-phone"></i></a>
            <a href="#!" className="contact-icon">020-600-400-600</a>
        </div>
     </div>   
     </section>
    )
}

export default Header;