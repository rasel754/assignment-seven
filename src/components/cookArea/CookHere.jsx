
const CookHere = ({cookie ,handelPreparing,preparing}) => {
    // const [recipe_name,preparing_time,calories]=cookie;
    console.log(preparing)
    return (
        <div className="md:w-1/3 bg-[#F7F7F9] rounded-3xl">
            <h1 className="text-3xl font-semibold text-[#282828]  text-center pt-8 pb-2">Want to cook: {cookie.length}</h1>
            <hr className="mx-12 pb-3" />            
           
                <div>
                <div className="flex justify-around w-3/4 collapse">
                    <h4 className="font-semibold text-xl text-[#878787]">Name</h4>
                    <h4 className="font-semibold text-xl text-[#878787]">Time</h4>
                     <h4 className="font-semibold text-xl text-[#878787] ">Calories</h4>
                        </div>
                    { cookie.map((item) => (
                            <div>
                                <table className="bg-[#28282808] m-3 rounded-2xl w-full">
                                    <tr className=" space-x-6 ">
                                        {/* <p>{index}</p>                                                            */}
                                        <td className="px-4 font-normal">{item.recipe_name.slice(0,10)}</td>
                                        <td className="font-normal text-xl">{item.preparing_time}</td>
                                        <td className="font-normal text-xl">{item.calories}</td>
                                        <td><button onClick={()=>handelPreparing(item.id)} className="btn btn-success text-end">Preparing</button></td>
                                    </tr>
                                </table>
                            </div>
                        ))
                    }
                </div>
                <h1 className="text-3xl font-semibold text-[#282828]  text-center pt-8 pb-2">Currently cooking: 02</h1>
                <hr className="mx-12 pb-3" />
                <div className="flex justify-around ">
                    <h4 className="font-semibold text-xl text-[#878787]">Name</h4>
                    <h4 className="font-semibold text-xl text-[#878787]">Time</h4>
                    <h4 className="font-semibold text-xl text-[#878787] ">Calories</h4>
                </div>
                { preparing.map((item2) => (
                            <div>
                                <table className="bg-[#28282808] m-3 rounded-2xl w-full">
                                    <tr className=" space-x-6 ">
                                        {/* <p>{index}</p>                                                            */}
                                        <td className="px-4 font-normal">{item2.recipe_name.slice(0,10)}</td>
                                        <td className="font-normal text-xl">{item2.preparing_time}</td>
                                        <td className="font-normal text-xl">{item2.calories}</td>                                    
                                    </tr>
                                </table>
                            </div>
                        ))
                    }
           
        </div>
    );
};

export default CookHere;