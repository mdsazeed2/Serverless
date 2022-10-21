import axios from "axios";
import React, { useEffect } from "react";
 
export default function Home() {
  //   const token = "sample ";
  const token = localStorage.getItem("tokenvariable");
 
  useEffect(() => {
    const url = "http://localhost:3000/dev/verify";
    const data = {};
    const headers = { token: token };
    axios
      .post(url, data, {
        headers: headers,
      })
      .then((res) => {
        console.log("Response==> " + JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("Error==> " + err);
      });
  }, []);
 
  return <div>Token: {token}</div>;
}
