import React from 'react';
import GifItem from './SelectedListItem';

const GifList = (props) => {
	console.log(props.gifs);
  const gifItems = props.gifs && props.gifs.data && props.gifs.data.map((image) => { 
    return <GifItem key={image.id} gif={image} />
});

  return (
     <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;