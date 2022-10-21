import "./Mainlist.css";
import axios from "axios";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Mainlist() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const url = "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/GetSingleLead";
    const data = {};
    const Headers = {};
    axios.post(url, data, { Headers: Headers })
      .then((res) => {
        console.log("Response==>" + JSON.stringify(res.data));
        for(const temp of res.data){
          temp.isclicked = false
        }
        console.log(res.data)
        setArray(res.data)
      })

      .catch((err) => {
        console.log("Error==>" + err);
      });
  }, []);
  return (
    <>
      <div className="Mainlist_Outer">
        <div className="Mainlist_box"></div>
        <div className="Mainlist_header">
          <div className="Mainlist_row1">
            <ul>
              <li>FirstName</li>
              <li>LastName</li>
              <li>Status</li>
              <li>Created on </li>
              <li>Email</li>
              <li>Responses</li>
              <li>Owner</li>
            </ul>
          </div>
        </div>
        <div className="Mainlist_Innerbox">
          <div className="Mainlist_list">
          {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray}/>;
            })}
            <div>
              <button className="Mainlist_Button">load more leads</button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}
function ListRow({itm, array, setArray}) {
  const handleClick=(e, itm)=>{
    let temp=[...array];
    for (const iterator of temp) {
      if(itm.FirstName === iterator.FirstName){
        iterator.isclicked=!iterator.isclicked;
      }
    }
    setArray(temp)
  }
  const d=new Date(itm.CreatedOn);
  let day = d.getDay();
  let month = d.getMonth();
  let year = d.getFullYear();
  return (
    <>
      <div className={itm.isclicked?"Mainlist_list_row_topSelected":"Mainlist_list_row_top"} >
        <input className="Cb" type="checkbox" onClick={e=>handleClick(e, itm)}/>
              <label for="checkbox"></label>
        <div className="Mainlist_list_row">
          <div>{itm.FirstName}</div>
          <div>{itm.LastName}</div>
          <div>{itm.Status}</div>
          <div>{day}-{month}-{year}</div>
          <div>{itm.Email}</div>
          <div>{itm.Responses}</div>
          <div>{itm.Owner}</div>
          <div className="Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
