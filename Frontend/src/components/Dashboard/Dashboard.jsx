import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import SideBar from "../Sidebar/SideBar";

const getList = async () => {
  const list = await fetch(`https://bfone.onrender.com/listdata`);
  const res = await list.json();
  return res;
  // console.log(res.meassage)
};

function Dashboard() {
  const [data, setData] = useState();

 



  useEffect(() => {
    getList()
      .then((res) => {
        setData(res.meassage);
        // console.log(res)
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  // console.log(data);

  return (
    <div className="dash-main-div">
      <div className="filter-div">
        <SideBar />
      </div>

      <div className="display-div">
        <div className="display-box1"></div>

        <div className="display-box2">
          
        {data?.map((el, i) => (
              <div key={i} className="card-css">
           
                <p>intensity:{el.intensity}</p>
                <p>topic:{el.topic}</p>
                <p>impact:{el.impact}</p>
                <p>relevance:{el.relevance}</p>
                <p>title:{el.title}</p>
              
              </div>
            ))} 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// useEffect(()=>{

// axios.get(`https://bfone.onrender.com/listdata`).then((res) => {
//         setData(res.data.meassage);
//         console.log(res.data.meassage)
//       })
//       .catch((er) => {
//         console.log(er);
//       });

//   },[])
