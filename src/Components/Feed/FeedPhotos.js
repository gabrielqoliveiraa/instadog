import React from 'react'
import FeedPhotoItem from './FeedPhotoItem'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_GET} from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from '../../styles/Components/FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto}) => {


    const {data, loading, error, request} = useFetch()

    React.useEffect(()=>{

        async function fetchPhotos(){
            const {url, options} = PHOTO_GET({page: 1, total: 6, user: 0})
            const {json} =  await request(url,options)
            console.log(json)
        }

        fetchPhotos()
    },[request])


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
