

const Item = ({item}) => {
    const {recipe_image,recipe_name,short_description ,ingredients ,preparing_time ,calories ,} = item;
    return (
        <div>
            <div className="bg-[#878787] rounded-2xl">
            <img className='w-[400px] h-[220px] p-6' src={recipe_image} alt="" />
            <h1>{recipe_name}</h1>
            <p>{short_description}</p>
            <h2>Ingredients: 6</h2>
            <ol title="Ingredients: 6">
                {ingredients.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
            <p><img src="../../../public/image/frame1.png" alt="" /> <span>{preparing_time}</span></p>
            <p><img src="../../../public/image/frame2.png" alt="" /> <span>{calories}</span></p>       
        </div>
        </div>
    );
};

export default Item;