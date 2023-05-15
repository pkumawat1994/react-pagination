import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./All.css";

const All = (props) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 10;
  const currentItems = props.data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(props.data.length / 10);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % props.data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">EMAIL</th>
            <th scope="col">NAME</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((ele) => {
            return (
              <>
                <tr>
                  <th scope="row">{ele.id}</th>
                  <td>{ele.email}</td>
                  <td>{ele.name}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next>>>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<< Preview"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};

export default All;
