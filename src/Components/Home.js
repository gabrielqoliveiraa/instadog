import React from 'react'
import Feed from '../Components/Feed/Feed'
import Head from './Helper/Head'

const Home = () => {
    return (
        <section className='container mainContainer'>
            <Head title='Fotos' description = 'Feed de Fotos '/>
            <Feed />
        </section>

    )
}

export default Home
