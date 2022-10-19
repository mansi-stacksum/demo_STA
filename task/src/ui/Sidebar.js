import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";
import { ReactComponent as RightIcon } from "../assets/icons/Right-icon.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/Plus-icon.svg";

const Sidebar = () => {
  return (
    <>
      <Nav
        className="d-none d-md-block bg-dark sidebar sidebar-wrapper"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Nav.Link
              style={{ textDecoration: "none", color: "white" }}
              href="/"
            >
              <PlusIcon />
              Orders
            </Nav.Link>
            <p className="mr-4 text-white">
              <RightIcon />
            </p>
          </div>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default Sidebar;
