import React from "react"

import { SidebarWrapper } from "./Sidebar.styles"

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <div
        style={{
          position: "fixed",
          width: "20%",
          padding: "20px",
        }}
      >
        <h6>asdas das das da d</h6>
        <div
          style={{
            backgroundColor: "red",
            height: "140px",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
          }}
        >
          Image
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            borderBottom: "1px solid #cbc",
            padding: "20px",
          }}
        >
          <span>i1</span>
          <span>i2</span>
          <span>i3</span>
          <span>i4</span>
          <span>i5</span>
        </div>
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
        <div>
          Light?
          <span>Switch</span>
        </div>
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
