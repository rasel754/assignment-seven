
const Header = () => {
    return (
        <div>
    <div className="navbar bg-base-100 mt-4 px-3">
  <div className="flex-1">
    <div >
        <h2 className="font-bold text-3xl">Recipe Calories</h2>
    </div>
    <div className="hidden md:block">
         <a className="ml-60" href="http://">Home</a>
         <a className="ml-12" href="http://">Recipes</a>
         <a className="ml-12" href="http://">About</a>
         <a className="ml-12" href="http://">Search</a>
    </div>
   
  </div>
  
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text"  placeholder="Search" className="input input-bordered w-24 md:w-[260px] bg-[#150B2B0D] rounded-3xl" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/public/image/frame5.png"alt="" />
        </div>
      </div>
      <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Home
          </a>
        </li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
  </div>
</div>        </div>
    );
};

export default Header;