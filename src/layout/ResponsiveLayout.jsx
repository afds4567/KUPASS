import React from "react";
import { useMediaQuery } from "react-responsive";
import DeskTopLayout from "./DeskTopLayout";
import MobileLayout from "./MobileLayout";

export default function ResponsiveLayout({ children }) {
  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop && <DeskTopLayout>{children}</DeskTopLayout>;
  };
  const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile && <MobileLayout>{children}</MobileLayout>;
  };
  return (
    <div>
      <Desktop />
      <Mobile />
    </div>
  );
}
