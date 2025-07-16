import { useEffect, useState } from "react";

type Quote = {
  docs: {
    dialog: string;
    character: string;
  }[];
};

const getQuote = () => {
  const url = "https://the-one-api.dev/v2/quote";
  const token = import.meta.env.VITE_ACCESS_KEY;
  const [quote, setQuote] = useState<string>();
  const [character, setCharacter] = useState<string>();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const fetchQuote = async () => {
      try {
        const rawQuotes = await fetch(url, {
          headers: headers,
        });
        if (!rawQuotes.ok) {
          throw new Error(`Response status: ${rawQuotes.status}`);
        }

        const quotes: Quote = await rawQuotes.json();
        const randomQuote = quotes.docs[randomNumber];
        const params = new URLSearchParams({
          _id: randomQuote.character,
        });
        const rawCharacters = await fetch(`https://the-one-api.dev/v2/character?${params}`, { headers: headers });
        const characters = await rawCharacters.json();
        const characterName = characters.docs[0].name;
        setCharacter(characterName);

        setQuote(quotes.docs[randomNumber].dialog);
      } catch (error) {
        console.error("Quote not found");
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <blockquote className="text-white font-maitree">{quote}</blockquote>
      <cite className="text-white font-maitree">{character}</cite>
    </div>
  );
};

export default getQuote;
