
const Banner = () => {
    return (
        <div className="bg-[url(./public/image/rectangle.png)] w-[1320px] h-[600px] bg-cover bg-center bg-no-repeat ">
            <div className="w-1/2">
            <h1 className="font-bold text-5xl text-white">Discover an exceptional cooking <br />class tailored for you! </h1>
            <p className="font-normal text-xl text-white">Allrecipes is a comprehensive platform offering a vast collection of user-generated recipes for all skill levels. With detailed instructions, user ratings, and reviews,</p>
            <button className="btn btn-success">Explore Now</button>
            <button className="btn btn-outline text-white">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;