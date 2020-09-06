import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Images = () => {
    const { postDetailId } = useParams();
    const [img, setImg] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${postDetailId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setImg(data))
    }, [])
    return (
        <div>
            <img style={{borderRadius:'50%'}} src={img.thumbnailUrl} alt=""/>
        </div>
    );
};

export default Images;