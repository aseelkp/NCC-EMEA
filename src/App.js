import React from 'react'

//Custom components
import { Footer, Achievements, AboutNCC, Hero,  SocialMedias, About ,Gallery } from './containers'
import { Contact, GalleryApp, Navbar ,   } from './components'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navbar />
                <Hero />
            </div>
            <SocialMedias />
            <AboutNCC />
            <Achievements />
            <Gallery />
            <GalleryApp />
            <Contact />
            <Footer />

        </div>
    )
}

export default App
