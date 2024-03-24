import bannerBg from "../../assets/blog-banner.jpg";

function Banner() {
  return (
    <section className="sm:responsive-container relative -mt-10 overflow-hidden sm:rounded-xl">
      <div className="bg- absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[rgb(0,0,0,35%)] text-white">
        <h1 className="heading-1">#My Blog</h1>
        <p className="text-lg text-gray-200">Ideas worth spreading!</p>
      </div>

      <img
        src={bannerBg}
        alt="woman hand holding a book."
        loading="lazy"
        className="h-[300px] w-full object-cover object-[50%_30%] sm:h-[400px]"
      />
    </section>
  );
}

export default Banner;
