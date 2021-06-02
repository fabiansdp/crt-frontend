import { ReactNode } from "react";
import "../styles/Layout.css";

interface Props {
  children?: ReactNode;
  background?: string;
}

const Layout: React.FC<Props> = ({children, background}) => {
  return (
    <div id="parent-container">
      <div id="main-container" style={{background : background}}>{children}</div>
    </div>
  );
};

export default Layout;