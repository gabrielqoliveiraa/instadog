import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Components/PhotoContent.module.css'
import Image from '../Helper/Image'
import PhotoComments from './PhotoComments'

const PhotoContent = ({data}) => {

    const {photo, comments} = data
    return (
        <div className={styles.photo}>

            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title}/>
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                        <span className={styles.visually}>{photo.acessos}</span>
                    </p>
                    <h1 className='title'>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attrtibutes}>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} anos</li>


                    </ul>
                </div>

            </div>
            <PhotoComments id={photo.id} comments={comments}/>
        </div>
    )
}

export default PhotoContent
