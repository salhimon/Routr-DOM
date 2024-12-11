import React from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


const Rating = ({movieRating, isMovieRating, Rating, setRating}) => {

    const handleChange = value =>{
        setRating(value);
    };
  return (
    isMovieRating ? <span className='ratingContent'>
    <Rate disabled value={movieRating}/>
    </span>
:
<span className='ratingContent'>
<Rate tooltips={desc} onChange={handleChange} value={Rating}/>

</span>


  );
}

export default Rating