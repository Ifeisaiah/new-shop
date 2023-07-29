function NewProduct() {
    return (
        <>
        <section className="bg-pink-300 w-full relative"> 
        </section>
        </>
    )
}

{/*const ScrollTwo = () => {
    return (
        <>
        <section className="header relative">
        <div class="container solid"></div>
        <div class="container image"></div>
    </section>
    <section>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
    </section></>
    )
} */}

const Brand= (props) => {
    return(
        <div className="relative w-[300px] m-2">
        <img src={props.img}
        alt='brand logo'
        className=" w-full h-[200px] object-cover" />
        <h3 className="text-center uppercase">{props.name}</h3>
        </div>
    )
}
export default NewProduct;