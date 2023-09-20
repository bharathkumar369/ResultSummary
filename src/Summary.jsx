import React from "react";
import jsondata from "./data.json"

const Summary = () => {

  const [data,setData] = React.useState([]);

  React.useEffect(()=>{
    setData(jsondata)
  },[data])

  return (
    <section className='div-container'>

      <div className='left-side'>
        <h3>Your result</h3>

        <div className='circle-container'>
          <div>
            <span className="number">76</span>
          </div>
        </div>
        <div>
          <h1 className="left-great">Great</h1>
          <h4>You scored higher than 65% of the people who have taken these test </h4>
        </div>
       
      </div>
      <div className='right-side'>
        <span className="summary-heading">summary</span>
        <div className="grid-1">
          <div><img src={data[0]?.icon} alt="" className="grid-icon"/></div>
          <div><span className="grid-1-name">{data[0]?.category}</span></div>
          <div><span className="score-data">{data[0]?.score}</span><span className="score"> /100</span></div>
        </div>     

        <div className="grid-2">
          <div><img src={data[1]?.icon} alt="" className="grid-icon"/></div>
          <div className="grid-2-name">{data[1]?.category}</div>
          <div><span className="score-data">{data[1]?.score}</span><span className="score"> /100</span></div>
        </div> 

        <div className="grid-3">
          <div><img src={data[2]?.icon} alt="" className="grid-icon"/></div>
          <div className="grid-3-name">{data[2]?.category}</div>
          <div><span className="score-data">{data[2]?.score}</span>/<span className="score"> /100</span></div>
        </div> 

        <div className="grid-4">
          <div><img src={data[3]?.icon} alt="" className="grid-icon"/></div>
          <div className="grid-4-name">{data[3]?.category}</div>
          <div><span className="score-data">{data[3]?.score}</span><span className="score"> /100</span></div>
        </div> 
        
        <button className="grid-button">continue</button> 
      </div>
    </section>
  )
}
export default Summary;