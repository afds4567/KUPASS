import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "react-minimal-side-navigation";
import { Icon } from "semantic-ui-react";

//import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "../../styles/sidebar.css";
const Bar = styled.div`
  position: sticky;
  margin-top: 10rem;
  width: 10.5rem;
  height: 100%;
`;

export default function DesktopSideBar() {
  const navigate = useNavigate();

  return (
    <>
      <Bar>
        <Navigation
          onSelect={({ itemId }) => {}}
          items={[
            {
              title: "피드",
              itemId: { item: "main", title: "피드" },
              elemBefore: () => (
                <Icon name="th large" style={{ fontSize: "1.2rem" }} />
              ),
            },

            {
              title: "관심태그",
              itemId: "/tags",
              elemBefore: () => (
                <Icon name="tags" style={{ fontSize: "1.2rem" }} />
              ),
              subNav: [
                {
                  title: "Projects",
                  itemId: "/management/projects",
                  // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                  elemBefore: () => <Icon name="cloud-snow" />,
                },
                {
                  title: "Members",
                  itemId: "/management/members",
                  elemBefore: () => <Icon name="coffee" />,
                },
              ],
              //subNav: user ? setArr : null,
            },
            {
              title: "북마크",
              itemId: { item: "bookmark", title: "북마크" },
              elemBefore: () => (
                <Icon name="bookmark" style={{ fontSize: "1.2rem" }} />
              ),
            },
            {
              title: "읽은 목록",
              itemId: { item: "study", title: "읽은 목록" },
              elemBefore: () => (
                <Icon name="eye" style={{ fontSize: "1.2rem" }} />
              ),
            },
          ]}
        />
      </Bar>
    </>
  );
}
