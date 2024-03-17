

const Item = ({item,handelCookie}) => {
    // console.log(handelCookie)
    const {recipe_image,recipe_name,short_description ,ingredients ,preparing_time ,calories ,} = item;
    return (
        
        <div>
            
            <div className="bg-[#878787] rounded-2xl px-6">
            <img className='rounded-3xl w-[400px] h-[220px] py-6 ' src={recipe_image} alt="" />
            <h1 className="text-2xl font-semibold text-black "> {recipe_name}</h1>
            <p className="font-normal text-xl text-black py-4">{short_description}</p><hr />
            <h2 className="py-6 text-[#282828] font-semibold text-xl">Ingredients: 6</h2>
            <ol className="pb-4" title="Ingredients: 6">
                {ingredients.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
            < hr className="pt-4" />
            <div className="flex justify-between items-center pb-6">
            <div className="flex justify-between items-center gap-2">
            <img src="../../../public/image/frame1.png" alt="" /> <span>{preparing_time}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
            <img src="../../../public/image/frame2.png" alt="" /> <span>{calories}</span>
                </div>  
            </div>
            <div className="pb-5">
            <button onClick={() => handelCookie(item)} className="btn btn-success  ">Want to Cook</button>
            </div>
            
        </div>
        </div>
    );
};

export default Item;