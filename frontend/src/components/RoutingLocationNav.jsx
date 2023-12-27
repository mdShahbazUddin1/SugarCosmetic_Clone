import React from "react";
import { useLocation, NavLink } from "react-router-dom";

function RoutingLocationNav() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div
      style={{
        width: "100%",
        height: "40px",

        display: "flex",
        alignItems: "center",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <p
        style={{
          marginLeft: "20px",
          fontWeight: "600",
          fontFamily: "sans-serif",
          fontSize: "14px",
          color: "gray",
        }}
      >
        Home &gt;{"  "}
        {pathnames.map((pathname, index) => (
          <span key={index}>
            <NavLink to={`/${pathnames.slice(0, index + 1).join("/")}`}>
              {pathname}
            </NavLink>
            {"  "}
            {index < pathnames.length - 1 && <span>&gt; </span>}
          </span>
        ))}
      </p>
    </div>
  );
}

export default RoutingLocationNav;
