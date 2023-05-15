import _ from "lodash";
import React, { useEffect, useState } from "react";
const pageSize = 10;
const List = (props) => {
  //   console.log(444, props.data);
  const [pagenatePost, setPagenatePost] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPagenatePost(_(props?.data).slice(0).take(pageSize).value());
  }, [props.data]);

  const pageCount = props?.data ? Math.ceil(props?.data?.length / pageSize) : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  console.log(7878, pages);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatePost = _(props?.data)
      .slice(startIndex)
      .take(pageSize)
      .value();
    console.log(74, paginatePost);
    setPagenatePost(paginatePost);
  };
  return (
    <>
      <div>List</div>
      {pagenatePost?.map((el) => {
        return (
          <>
            <h1>{el.id}</h1>
            <h1>{el.name}</h1>
          </>
        );
      })}
      {console.log("first", pages)}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages?.map((page, i) => {
            return (
              <>
                <li
                  key={i}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p className="page-link a" onClick={() => pagination(page)}>
                    {page }
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default List;
