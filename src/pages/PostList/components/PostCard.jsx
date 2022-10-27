import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import {
  Card,
  CardBody,
  Content,
  CreatedAt,
  Tag,
  TagContainer,
  TagContent,
  Thumbnail,
  ThumbnailContainer,
  Title,
} from "./PostCardStyled";

export default function PostCard({ post, isLastItem, onFetchMoreFeeds }) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isIntersecting = !!entry?.isIntersecting;

  const handleTagsStyle = () => {
    const tags = document.querySelectorAll(".tag_list");

    tags.forEach((tag) => {
      const tagChildren = tag.childNodes;
      let tagWidth = 0;
      tagChildren.forEach((child) => {
        if (tagWidth + child.offsetWidth > 250) {
          child.style.display = "none";
        }
        tagWidth += child.offsetWidth + 8;
      });
    });
  };

  useEffect(() => {
    handleTagsStyle();
  });
  useEffect(() => {
    isLastItem && isIntersecting && onFetchMoreFeeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastItem, isIntersecting]);
  return (
    <Card
      ref={ref}
      onClick={() => {
        navigate(`article/${post.articleId}`);
      }}
    >
      {post.image_url && (
        <ThumbnailContainer>
          <Thumbnail src={post.image_url} />
        </ThumbnailContainer>
      )}
      <CardBody thumbnail={post.image_url}>
        <Title>{post.title}</Title>
        <CreatedAt>{post.createDate}</CreatedAt>
        <Content thumbnail={post.image_url}>
          <p>{post.summary}</p>
        </Content>
        <TagContainer>
          <TagContent className="tag_list">
            {post.keywords.map((key) => (
              <Tag key={key}>{key}</Tag>
            ))}
          </TagContent>
        </TagContainer>
      </CardBody>
    </Card>
  );
}
