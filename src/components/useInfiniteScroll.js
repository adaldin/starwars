import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  // state
  const [isFetching, setIsFetching] = useState(false);

  //   useEffect
  useEffect(() => {
    // Detecting the Bottom of the Page:
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);

  //   logic
  function handleScroll() {
    // To check if the Window object’s inner height, plus the Document object’s scrollTop,
    //  is equal to the Document’s offsetHeight.
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
