import { useState, useEffect } from "react";

const STATIC_QUOTES = [
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { content: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { content: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { content: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { content: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { content: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { content: "Knowledge is power.", author: "Francis Bacon" }
];

export default function Quotes() {
  const [quote, setQuote] = useState(STATIC_QUOTES[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * STATIC_QUOTES.length);
    return STATIC_QUOTES[randomIndex];
  };

  useEffect(() => {
    setQuote(getRandomQuote());
    
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center sm:text-left">
      <div className="space-y-2">
        <div className="flex items-start justify-between group">
          <div className="flex-1 pr-4">
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-center lg:text-left italic ml-3 sm:ml-0">
              "{quote.content}"
            </p>
            <p className="text-gray-400 text-sm text-center lg:text-left mt-3 ml-3 sm:ml-0">
              — {quote.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}