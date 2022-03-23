import React, { useState } from "react";

export default function Functions () {
    let [page, setPage] = useState(1);

const nextPage = (total) => {
    if (page < total / 6) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  return (
    <div>functions</div>
  )
}


}


