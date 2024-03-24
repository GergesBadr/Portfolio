import { useEffect, useState } from "react";

export default function useCalcReadingTime(articleContent) {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    // Content container
    const content = document.querySelector(articleContent);

    // Remove html tags to return only text
    const plainText = content.innerHTML.replace(/<[^>]*>/g, "");

    // Calc how many words in this text
    const wordCount = plainText.split(/\s+/).length;

    // Calc reading time
    const wordsPerMin = 220;
    const calculatedReadingTime = Math.ceil(wordCount / wordsPerMin);

    setReadingTime(calculatedReadingTime);
  }, [articleContent]);

  return readingTime;
}
