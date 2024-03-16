
const Banner = () => {
    return (
        <div className="container mx-auto bg-[url(./public/image/rectangle.png)] md:w-[1320px] w-full md:h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl ">
            <div className=" text-center">
            <h1 className="font-bold text-3xl md:text-5xl text-white pt-32 pb-6">Discover an exceptional cooking <br />class tailored for you! </h1>
            <p className="font-normal text-xl text-white md:px-52 pb-10  ">Allrecipes is a comprehensive platform offering a vast collection of user-generated recipes for all skill levels. With detailed instructions, user ratings, and reviews,</p>
            <button className="btn btn-success mr-8">Explore Now</button>
            <button className="btn btn-outline text-white">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;