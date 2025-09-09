type BookItem = {
  image: string;
  title: string;
  summary: string;
  amazonLink: string;
  barnesNobleLink: string;
};
const BooksCarouselItem = ({ image, title, summary, amazonLink, barnesNobleLink }: BookItem) => {
  return (
    <div>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="bg-shire_green flex w-[60%] border-2 rounded-2xl border-[rgba(211,175,55)] shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="w-1/3 flex items-center justify-center p-4">
            <img src={image} alt={title} className="rounded-xl object-contain h-full w-full" />
          </div>

          {/* Text Content */}
          <div className="w-2/3 flex flex-col justify-between p-4 text-black">
            <div>
              <h2 className="text-4xl font-bilbo mb-2">{title}</h2>
              <p className="text-lg font-maitree mb-4">
                One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.
              </p>
              <p className="text-lg font-maitree mb-4">{summary}</p>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-2">
              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(211,175,55)] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition"
              >
                Amazon
              </a>
              <a
                href={barnesNobleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(211,175,55)] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition"
              >
                Barnes & Noble
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCarouselItem;
