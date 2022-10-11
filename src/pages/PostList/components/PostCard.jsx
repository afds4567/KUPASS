import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Content,
  CreatedAt,
  Tag,
  TagContent,
  Thumbnail,
  ThumbnailContainer,
  Title,
} from "./PostCardStyled";

export default function PostCard({ post }) {
  const navigate = useNavigate();
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
  return (
    <Card
      onClick={() => {
        navigate(`article/${post.id}`);
      }}
    >
      {post.thumbnail && (
        <ThumbnailContainer>
          <Thumbnail src={post.thumbnail} />
        </ThumbnailContainer>
      )}
      <CardBody thumbnail={post.thumbnail}>
        <Title>{post.title}</Title>
        <CreatedAt>{post.createdAt}</CreatedAt>
        <Content thumbnail={post.thumbnail}>
          <p>{post.content}</p>
        </Content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TagContent className="tag_list">
            {Object.keys(post.tags).map((key) => (
              <Tag key={key}>{post.tags[key]}</Tag>
            ))}
          </TagContent>
        </div>
      </CardBody>
    </Card>
  );
}
