import React from "react";

export default function Member(props) {
  const { detail } = props;

  return (
    <div>
      <h2>{detail.name}</h2>
      <p>{detail.email}</p>
      <p>{detail.role}</p>
    </div>
  );
}
