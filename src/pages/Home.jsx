import HeroSection from "../components/HeroSection";
import Book from "../assets/book.png";
function Home() {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      {/* book list */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="p-4 border border-1 rounded" key={"key-after-spread"}>
            <img src={Book} alt="" className="rounded" />
            <div className=" text-center space-y-2 mt-3">
              <h1>Book Title</h1>
              <p>Description</p>
              {/* genres*/}
              <div className="flex flex-wrap">
                {["travel", "knowledge", "travel", "knowledge"].map((genre) => (
                  <span
                    className="mx-1 my-1 rounded-full bg-blue-500 text-white px-2 py-2 text-sm"
                    key={"key-after-spread"}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
