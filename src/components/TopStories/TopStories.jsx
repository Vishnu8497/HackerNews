import React, { useState, useEffect } from "react";
import Cardbox from "../CardBox/Cardbox";
import { Grid, Pagination, LinearProgress } from "@mui/material";
import { paginate } from "../../helper/utils";
import { getNewsIds, getNews } from "../../services/actions";

const TopStories = () => {
  const [newsId, setNewsId] = useState([]);
  const [newsDataList, setNewsDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNewsIds(`topstories`).then(response => { 
        setNewsId(response?.data)
    });
  }, []);

  useEffect(() => {
   if(newsId.length>0){
    setIsLoading(true);
    newsId.slice(0, 30).forEach(record=>{
      getNews(record).then(response => { 
        setNewsDataList(prevState=>[...prevState,response?.data])
    });
    })
    setIsLoading(false);
   }
  }, [newsId]);

  const handleOnPageChange=(event,value)=>{
    setCurrentPage(value)
  }

  return (  
    <>
    {isLoading? (
      <div style={{height: "40rem"}}>
        <LinearProgress style={{width: "70%", left: "15%", top: "40%"}} />
      </div>
    ) : (
    <div>
    <Grid
      container
      spacing={0}
      className='gridContainer'
      justify="center"
    >
      
      {paginate(newsDataList, 12, currentPage).map(record=>{
        return <Grid item xs={12} sm={12} md={6}>
         <Cardbox record={record}/> 
        </Grid>
      })}
    </Grid>
    
    <Pagination
          className="paginate"
          count={120/10} page={currentPage}
          onChange={handleOnPageChange}
          color="primary"
        />
        </div>
        )}  
      </>
  );
}

export default TopStories