import React from "react";

export default function BreadCrumb() {
  return (
    <div className="">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li className="breadcrumb-item  ">Home</li>
          <li class="breadcrumb-item active " aria-current="page">
            Library
          </li>
        </ol>
      </nav>
    </div>
  );
}
