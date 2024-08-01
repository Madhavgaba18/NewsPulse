import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState([1]);
  const [totalResults, setTotalResults] = useState([0]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // api token - thenewsapi = oUvOhhKDJn647xo2uYt92VCHwVM6SNBNdrfwfgB4
  // api token - currentapiServices = O27aYJqfDEvB4IRXSF5DgMzIf4sRBZNF-xXk_2AHu_89g2bN
  // api token - Gnews =

  const updateNews = () => {
    // const url = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=O27aYJqfDEvB4IRXSF5DgMzIf4sRBZNF-xXk_2AHu_89g2bN`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4a2f601bf8664832aff68a252bb9fbb1&page=${page}&pageSize=${props.pageSize}`;
    const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=e50af7b33112fb62af1751b6d50fb733`;
    setLoading(true);
    fetch(url)
      .then(async (response) => {
        let parsedData = await response.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
      })
      .catch(console.error("Cannot get more news because of API limit"));
  };

  useEffect(() => {
    updateNews();
    document.title = `${capitalizeFirstLetter(props.category)} - NewsPulse`;
  }, []);

  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${props.category}&apiKey=4a2f601bf8664832aff68a252bb9fbb1&page=${
    //   page + 1
    // }&pageSize=${props.pageSize}`;
    // setPage(page + 1);
    // fetch(url)
    //   .then(async (response) => {
    //     let parsedData = await response.json();
    //     setArticles(articles.concat(parsedData.articles));
    //     setTotalResults(parsedData.totalResults);
    //     setLoading(false);
    //   })
    //   .catch(console.error("Error in fetching data for infinite scroll"));
  };

  return (
    <>
      <h2
        className="Ninth-step text-center "
        style={{ margin: "30px,0px", marginTop: "90px" }}
      >
        NewsPulse-Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              if (!element) {
                return console.error("No article found!");
              }
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
