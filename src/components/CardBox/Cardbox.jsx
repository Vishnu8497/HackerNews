import React from 'react';
import './Cardbox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { mapTime } from '../../helper/utils';

const Cardbox = ({record}) => {
  const commentUrl = `https://news.ycombinator.com/item?id=${record?.id}`;

  return (
    <>
    <Card className='card' variant="outlined">
      <CardContent className='card-content'>
        <p
          variant='h5'
          className="title"
          color="#4D4F4F"
        >
          {record?.title}
        </p>
        <div className='storyDetails'>
          <p className='time'>Posted {mapTime(record?.time)} ago</p>
          <p className='author'>
            By {record?.by}
          </p>
        </div>
        <p className='comments'><a href={commentUrl} target="_blank">{record?.descendants} comments</a></p>
        <p className='button'><a href={record?.url} target="_blank">Know More</a></p>
      </CardContent>
    </Card>
    </>
  )
}

export default Cardbox