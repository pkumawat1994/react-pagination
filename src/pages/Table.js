import axios from "axios";
import React, { useEffect, useState } from "react";
import All from "../components/All";

const Table = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        if (res.status === 200) {
          setdata(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <All data={data} />
    </>
  );
};

export default Table;
