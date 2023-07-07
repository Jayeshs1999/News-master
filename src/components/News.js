import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoadingSpinner from "./LazyLoadingSpinner";
import Spinner from "./Spinner";
const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)

  const updateNews =  async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(()=> {
    updateNews();
    // eslint-disable-next-line
  }, [])

   const fetchMoreData = async () => {
    console.log("fetchdata")
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1)
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles))
      setTotalResult(parseData.totalResults);
    }
  
    return (
      <>
        <h2 className="text-center" style={{margin: '80px 0px 10px 0'}}>Master News - Top Headlines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<LazyLoadingSpinner />}
        >
          <div className="container">
            <div className="row">
              {articles?.map((element) => {
                return (
                  <div className="col-md-3" key={element?.url}>
                    <NewsItem
                      title={
                        element?.title ? element?.title.slice(0, 55) + "..." : "NA"
                      }
                      description={
                        element?.description
                          ? element?.description.slice(0, 87) + "..."
                          : "NA"
                      }
                      imageUrl={element?.urlToImage}
                      newsUrlId={element?.url}
                      author={element?.author}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

 News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
};

News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
