
const CookHere = ({cookie}) => {
    // const [recipe_name,preparing_time,calories]=cookie;
    
    return (
        <div className="md:w-1/3 bg-[#F7F7F9] rounded-3xl">
            <h1 className="text-3xl font-semibold text-[#282828]  text-center pb-2">Want to cook: {cookie.length}</h1>
            <hr className="mx-12 pb-3" />            
            <div className="flex justify-around">
             <h4 className="font-semibold text-xl text-[#878787]">Name</h4>
             <h4 className="font-semibold text-xl text-[#878787]">Time</h4>
             <h4 className="font-semibold text-xl text-[#878787]">Calories</h4>
            </div>
                <div>
                    { cookie.map((item) => (
                            <div>
                                <table className="grid justify-around">
                                    <tr >
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}</td>
                                        <td>{item.calories}</td>
                                        <td><button className="btn btn-success">Preparing</button></td>
                                    </tr>
                                </table>
                             {/* <p>{item.recipe_name}</p>
                             <p>{item.preparing_time}</p>
                             <p>{item.calories}</p> */}
                            </div>
                        ))
                    }
                </div>
           
        </div>
    );
};

export default CookHere;