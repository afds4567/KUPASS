import React from "react";
import styled, { css } from "styled-components";
import PostCard from "./components/PostCard";

const feeds = [
  {
    id: "1",
    thumbnail: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "제목1 예시",
    content: `KT, 이 경우 단가가 가장 높은 점부터 차례로 채워나가면 되는데 이 그림에서는 C의 단가 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    createdAt: `2022/09/25 10:43`,
    company: "뉴시스",
    tags: ["AI", "KT"],
    address:
      "AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”",
  },
  {
    id: "2",
    //thumbnail: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "제목2 예시",
    content: `KT,우선 앞서 단가 기준으로 알고리즘을 설명한 그대로 구현하기 위해 단가를 계산하고 역순으로 정렬한다. 즉 가장 단가가 높은 점이 맨 위에 오도록 다음과 같이 구현한다. 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    createdAt: `2022/09/25 10:43`,
    company: "뉴시스",
    tags: ["AI", "알고리즘"],
    address:
      "AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”",
  },
  {
    id: "3",
    thumbnail: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "제목1 예시",
    content: `KT, 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    age: `2022/09/25 10:43`,
    company: "뉴시스",
    tags: ["AI", "KT"],
    address:
      "AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”",
  },
  {
    id: "4",
    thumbnail: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "제목1 예시",
    content: `KT, 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    age: `2022/09/25 10:43`,
    company: "뉴시스",
    tags: ["AI", "KT"],
    address:
      "AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”",
  },
  {
    id: "5",
    thumbnail: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "제목1 예시",
    content: `KT, 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    age: `2022/09/25 10:43`,
    company: "뉴시스",
    tags: ["AI", "KT"],
    address:
      "AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”",
  },
];
const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;

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
  ${(props) =>
    props.listEmpty
      ? css`
          height: 100vh;
        `
      : css`
          height: 100vh;
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
          <p style={{ fontSize: "2rem", color: "blue" }}>관심태그</p>
          <Select>
            <option className="option" value="score">
              인기순
            </option>
            <option className="option" value="date">
              최신순
            </option>
          </Select>
        </div>
      </PostTop>
      <PostCards listEmpty={feeds.length === 0}>
        {feeds.length !== 0 ? (
          feeds.map((feed, idx) => (
            <PostCard key={("postcard", idx)} post={feed} />
          ))
        ) : (
          <PostNone>Contents 없음</PostNone>
        )}
      </PostCards>
    </Post>
  );
}
