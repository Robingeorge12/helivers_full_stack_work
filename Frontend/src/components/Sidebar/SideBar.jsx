import React, { useState } from "react";
import "./SideBar.css";
import { useSearchParams } from "react-router-dom";

function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkedFilterValue = searchParams.getAll("listQuery");

  const [listQuery, setListQuery] = useState([]);

  let newArray = [...listQuery];

  const handleCheck = (e) => {
    // console.log(e.target.value);

    if (newArray.includes(e.target.value)) {
      let x = newArray.splice(newArray.indexOf(e.target.value), 1);
      // console.log(x);
    } else {
      let option = e.target.value;
      if (option == "movie") {
        newArray.push({ name: option });
      } else if (option == "13") {
        newArray.push({ age: option });
      } else if (option == "work") {
        newArray.push({ gk: option });
      }else {
        newArray.push({ "cat": option });
      }

      // newArray.push(e.target.value);
    }

    setListQuery(newArray);
  };

  console.log(listQuery, newArray);
  return (
    <div className="sidebar-container">
      <div>Filtering</div>

      <div className="sidebar-checkdiv">
        <div className="sidebar-checkbx1">
          <input
            type="checkbox"
            value={"movie"}
            onChange={handleCheck}
            // { name: "movie" }
            defaultChecked={listQuery.includes("movie")}
          />
          <label htmlFor="">Title</label>
        </div>

        <div className="sidebar-checkbx1">
          <input
            type="checkbox"
            value={"13"}
            onChange={handleCheck}
            defaultChecked={listQuery.includes({ age: "13" })}
          />
          <label htmlFor="">Title</label>
        </div>

        <div className="sidebar-checkbx1">
          <input
            type="checkbox"
            value={"work"}
            onChange={handleCheck}
            defaultChecked={listQuery.includes({ gk: "work" })}
          />
          <label htmlFor="">Title</label>
        </div>

        <div className="sidebar-checkbx1">
          <input
            type="checkbox"
            value={"other"}
            onChange={handleCheck}
            defaultChecked={listQuery.includes({ cat: "other" })}
          />
          <label htmlFor="">Title</label>
        </div>

        <div className="sidebar-checkbx1">
          <input type="checkbox" />
          <label htmlFor="">itle</label>
        </div>

        {/* <div className="sidebar-checkbx1">
        <input type="checkbox" />
        <label htmlFor="">Title</label>
      </div>


      <div className="sidebar-checkbx1">
        <input type="checkbox" />
        <label htmlFor="">Title</label>
      </div>


      <div className="sidebar-checkbx1">
        <input type="checkbox" />
        <label htmlFor="">Title</label>
      </div>


      <div className="sidebar-checkbx1">
        <input type="checkbox" />
        <label htmlFor="">Title</label>
      </div> */}
      </div>
    </div>
  );
}

export default SideBar;
