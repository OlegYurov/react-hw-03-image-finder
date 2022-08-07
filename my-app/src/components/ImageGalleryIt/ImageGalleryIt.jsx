import React from 'react'
import css from './ImageGalleryIt.module.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'; 


function ImageGalleryIt({images}) {
//   console.log(articlesTrue);
 
    
    return (
   <ul className={css.ImageGallery}>
     { images.map(({ urlToImage, title, author, description }) => 
                    
      (
        <li key={uuidv4()}>
              <img src={urlToImage} alt='' width="360" />
              <h2>{title}</h2>
              <p>Posted by: {author}</p>
              <p>{description}</p>
         </li>
          
            ))}                         
        </ul>   
  )   
}

ImageGalleryIt.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ImageGalleryIt