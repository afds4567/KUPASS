import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PostCard from "./components/PostCard";
import axios from "axios";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import { storage } from "../../utils";
const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-left: 0;
    width: 100%;
  }
`;

const PostTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  margin-bottom: 2rem;
  width: 100%;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #c5cbd4;
    transform: translateY(1rem);
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;
const Select = styled.select`
  height: auto;
  font-size: 1rem;
  padding: 0rem 0.6rem;
`;
const PostCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  ${(props) =>
    props.listEmpty
      ? css`
          height: 80vh;
        `
      : css`
          height: 80vh;
        `}
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const PostNone = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  letter-spacing: -0.6px;
  margin-top: 10rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

export default function PostList() {
  const location = useLocation();
  const searchMatch = location.pathname == "/search";
  const [serachParams, _] = useSearchParams();
  const keyword = serachParams.get("keyword");
  const [filter, setFilter] = useState("default");
  const [feeds, setFeeds] = useState([]);
  const [isLast, setIsLast] = useState(false);
  const [page, setPage] = useState(0);
  const { data: keywords } = useQuery("keywords", {
    initialData: "",
    staleTime: Infinity,
  });
  const {
    data: { title, item, isTag },
  } = useQuery("title", {
    initialData: "",
    staleTime: Infinity,
  });
  const getFeeds = async () => {
    let params;
    if (keyword)
      params = {
        keyword: keyword,
        page,
        ordered_by: filter,
      };
    else params = { keyword, page, ordered_by: filter, category: "" };
    //axios.defaults.withCredentials = true;
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${storage.getToken()}`;
      const res = await axios.get("/api/search/article", {
        params,
      });
      //const feeds = res.data.data;
      const feeds = res.data.articles;
      console.log(feeds);

      //const isLast = res.data.totalPages === page;
      const isLast = page === 10;
      setFeeds((prev) => [...prev, ...feeds]);
      setIsLast(isLast);
      console.log(page, isLast);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    !isLast && getFeeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filter]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <Post>
      <PostTop>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "2rem", color: "blue" }}>
            {title ? (searchMatch ? keyword : title) : title}
          </p>
          <Select onChange={handleFilter} value={filter}>
            <option className="option" value="default">
              기본순
            </option>
            <option className="option" value="score">
              인기순
            </option>
            <option className="option" value="date">
              최신순
            </option>
          </Select>
        </div>
      </PostTop>
      <PostCards style={{ overflow: "auto" }} listEmpty={feeds.length === 0}>
        {feeds.length !== 0 ? (
          feeds.map((feed, idx) => (
            <PostCard
              key={("postcard", idx)}
              isLastItem={feeds.length - 1 === idx}
              onFetchMoreFeeds={() => setPage((prev) => prev + 1)}
              post={feed}
            />
          ))
        ) : (
          <PostNone>Contents 없음</PostNone>
        )}
      </PostCards>
    </Post>
  );
}
