const NavBar = () => {
  return (
    <div className="flex justify-center sticky top-0 items-center z-10">
      <a href="#">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold p-2 md:p-4 text-gray-800 font-serif bg-white rounded-b-lg">
          Articles
        </h1>
      </a>
    </div>
  );
};

export default NavBar;
