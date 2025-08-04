const BeyondTheStory = () => {
  return (
    <section className="relative bg-nazgul_gray text-black px-6 py-16 md:px-16 overflow-hidden">
      {/* Leaf Texture Background */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-shire_green rounded-xl border-2 border-[rgba(211,175,55)] shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-200">Worldbuilding Legacy</h3>
            <p className="font-maitree text-sm">
              Tolkien set the foundation for modern fantasy. From Elvish languages to intricate maps, his worldbuilding influenced countless worlds
              like Westeros, Tamriel, and even D&D.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-shire_green rounded-xl border-2 border-[rgba(211,175,55)] shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-200">Timeless Themes</h3>
            <p className="font-maitree text-sm">
              The struggle between good and evil, the corrupting nature of power, and the strength of friendship continue to resonate with audiences
              across generations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-shire_green rounded-xl border-2 border-[rgba(211,175,55)] shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-200">Tolkien’s Influence</h3>
            <p className="font-maitree text-sm">
              J.R.R. Tolkien's life as a soldier, scholar, and philologist shaped his stories — and inspired writers like C.S. Lewis and modern
              authors like Patrick Rothfuss and Brandon Sanderson.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-shire_green rounded-xl border-2 border-[rgba(211,175,55)] shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-200">Pop Culture Legacy</h3>
            <p className="font-maitree text-sm">
              From Peter Jackson’s Oscar-winning films to video games, music, and memes — Middle-earth has become a permanent part of pop culture.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-shire_green rounded-xl border-2 border-[rgba(211,175,55)] shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-200">Fandom & Community</h3>
            <p className="font-maitree text-sm">
              Global fan communities, Tolkien societies, fan art, and cosplay continue to thrive — proving the story still lives through its readers.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-shire_green rounded-xl border-2 border-[rgba(211,175,55)] shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-200">Modern Relevance</h3>
            <p className="font-maitree text-sm">
              The messages in Middle-earth — about nature, leadership, and hope in darkness — remain just as powerful in today's complex world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheStory;
