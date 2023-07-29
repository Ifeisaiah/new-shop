function Category() {
    let linkStyle = 'cate-link absolute bg-black bg-opacity-10 text-2xl text-[#f9f7f3] weight-bold top-0 flex justify-center  items-center w-full h-full';
    return (
        <div className="category flex flex-wrap w-[100%] justify-center my-16">
            <div className="relative m-4 w-80 img-zoom">
                <img src="https://images.pexels.com/photos/7506672/pexels-photo-7506672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product category" 
                className="realtive w-full h-[300px] object-cover" />
                <h3 className={`${linkStyle}`}>Clothing</h3>
            </div>
            <div className="relative m-4 w-80 img-zoom">
                <img src="https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="product category" 
                className="realtive w-full h-[300px] object-cover" />
                <h3 className={`${linkStyle}`}>Bags</h3>
            </div>
            <div className="relative m-4 w-80 img-zoom">
                <img src="https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="product category" 
                className="realtive w-full h-[300px] object-cover" />
                <h3 className={`${linkStyle}`}>Jewelry</h3>
            </div>
            <div className="relative m-4 w-80 img-zoom">
                <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="product category"
                 className="realtive w-full h-[300px] object-cover" />
                <h3 className={`${linkStyle}`}>Shoes</h3>
            </div>
        </div>
    )
}

export default Category;