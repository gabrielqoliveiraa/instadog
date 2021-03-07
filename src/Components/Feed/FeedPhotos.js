import React from 'react'
import FeedPhotoItem from './FeedPhotoItem'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_GET} from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from '../../styles/Components/FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto, user, page, setInfinite}) => {


    const {data, loading, error, request} = useFetch()

    React.useEffect(()=>{

        async function fetchPhotos(){
            const total = 6;
            const {url, options} = PHOTO_GET({page, total, user})
            const {json, response} =  await request(url,options)
            console.log('request')
            if(response && response.ok && json.length < total) setInfinite(false)
        }

        fetchPhotos()
    },[request, user, page, setInfinite])


    if(error) return <Error eror={error}/>
    if(loading) return <Loading/>
    if (data)
    return (
        <ul className={`${styles.feed} animeLeft`}>
            {data.map(photo => (
            
                <FeedPhotoItem photo={photo} key={photo.id} setModalPhoto={setModalPhoto}/>
            
            ))}
            
        </ul>
    )
    else return null
}

export default FeedPhotos
