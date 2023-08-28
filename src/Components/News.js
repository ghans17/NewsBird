import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    Country: "in",
    pagesize: 12,
    Category: "general",
  };
  static propsTypes = {
    Country: PropTypes.string,

    Category: PropTypes.string,
  };

  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalresults:0
    };
  }

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalresults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.Country
    }&category=${
      this.props.Category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlenext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.Country
    }&category=${
      this.props.Category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  fetchMoreData=async()=>{
this.setState({page:this.state.page+1})
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pagesize}`;

let data = await fetch(url);
let parsedData = await data.json();
this.setState({
  articles:this.state.articles.concat(parsedData.articles),
  totalresults: parsedData.totalResults,
 loading:false
});

  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 style={{marginTop: '90px'}}>NewsBird - Top Headlines</h1>
          {this.state.loading && <Loading />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalresults}
            loader={<Loading/>}
            
          >
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      updateTime={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
