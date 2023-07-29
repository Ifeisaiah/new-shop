import ProductCard from "./productcard";

function DisplayProducts() {
    return (
        <div className="display-products flex flex-col items-center text-center mt-20">
            <h2 className="text-4xl pt-10 text-black my-4 font-bold">Best Sellers Across all Categories</h2>
            <p className="w-[50%] m-4 text-lg text-gray-700">One morning, when Gregor Samsa woke from troubled dreams, 
                he found himself transformed in his bed into a horrible vermin.
                 He lay on his armour-like back, and if he lifted his head a little
                 he could see his brown belly, slightly domed and divided by arches into stiff sections
            </p>
            <div className="gradient mt-4 p-4 w-full">
                <Clothing />
                <Bags />
                <Jewelry />
                <Shoes />
            </div>
        </div>
    )
}

const Clothing = () => {
    return (
        <div className="bg-gray-100 rounded m-4">
            <div className="flex justify-between flex-wrap mx-20 p-2">
                <h2 className="text-xl italic font-serif">Fashion & Clothing</h2>
                <a href="#!">See more</a>
            </div>
        <div className="flex justify-center flex-wrap">
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
              <ProductCard 
            img='https://images.pexels.com/photos/921154/pexels-photo-921154.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Peach dress'
            oldprice='$60.00'
            newprice='$40.00'
            />
        </div>
        </div>
    )
}

const Bags = () => {
    return (
        <div className="bg-gray-50 rounded m-4">
            <div className="flex justify-between flex-wrap mx-20 p-2">
                <h2 className="text-xl italic font-serif">Bags & Purses</h2>
                <a href="#!">See more</a>
            </div>
        <div className="flex justify-center flex-wrap">
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
              <ProductCard 
            img='https://images.pexels.com/photos/13417506/pexels-photo-13417506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            preview-img= 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Peach dress'
            oldprice='$60.00'
            newprice='$40.00'
            />
         
        </div>
        </div>
    )
}

const Jewelry = () => {
    return (
        <div className="bg-gray-50 rounded m-4">
            <div className="flex justify-between flex-wrap mx-20 p-2">
                <h2 className="text-xl italic font-serif">Accessories & Jewelry</h2>
                <a href="#!">See more</a>
            </div>
        <div className="flex justify-center flex-wrap">
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
            img='https://images.pexels.com/photos/2876035/pexels-photo-2876035.jpeg?auto=compress&cs=tinysrgb&w=1200'
            preview-img= 'https://images.pexels.com/photos/4937356/pexels-photo-4937356.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Mini pink dress'
            oldprice='$20.00'
            newprice='$15.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/11260679/pexels-photo-11260679.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/5885771/pexels-photo-5885771.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Brown dress'
            oldprice='$45.00'
            newprice='$40.00'
            />
            <ProductCard 
            img='https://images.pexels.com/photos/8398839/pexels-photo-8398839.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            preview-img= 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Peach dress'
            oldprice='$60.00'
            newprice='$40.00'
            />
         
        </div>
        </div>
    )
}

const Shoes = () => {
    return (
        <div className="bg-gray-50 rounded m-4">
            <div className="flex justify-between flex-wrap mx-10 p-2">
                <h2 className="text-xl italic font-serif">Shoes & Sneekers</h2>
                <a href="#!">See more</a>
            </div>
        <div className="flex justify-center flex-wrap">
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
            img='https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=1200'
            preview-img= 'https://images.pexels.com/photos/4668925/pexels-photo-4668925.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Summer dress'
            oldprice='$35.00'
            newprice='&20.00'
            />
              <ProductCard 
            img='https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=1200'
            preview-img= 'https://images.pexels.com/photos/4937356/pexels-photo-4937356.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            name='Mini pink dress'
            oldprice='$20.00'
            newprice='$15.00'
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
         
        </div>
        </div>
    )
}

export default DisplayProducts;