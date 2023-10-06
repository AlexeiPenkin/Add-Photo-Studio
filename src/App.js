import React from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Locations from './components/Locations';
import Decor from './components/Decor';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Description from './components/Description';
import Pricing from './components/Pricing';
import Advert from './components/Advert';
import GiftCard from './components/GiftCard';
import Feedback from './components/Feedback';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

function App() {
    return (
        <div className='app'>
            <Header />
            <Intro />
            <Projects />
            <Locations />
            <Decor />
            <Services />
            <Workflow />
            <Description />
            <Pricing />
            <Advert />
            <GiftCard />
            <Feedback />
            <FeedbackForm />
            <Footer />
        </div>
    )
}

export default App;