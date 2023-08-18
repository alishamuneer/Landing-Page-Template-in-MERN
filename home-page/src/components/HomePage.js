import React, { Fragment} from 'react'
import QuoteSlider from './QuoteSlider';
import RowSec1 from './RowSec1';
import RowSec2 from './RowSec2';
import ServicesSec from './ServicesSec';
import Slider from './Slider';
import AboutSec1 from './AboutSec1';
import AboutSec2 from './AboutSec2';
import AboutSec3 from './AboutSec3';
import BoxWrapper from './BoxWrapper';
import ContactForm from './ContactForm';
import Footer from './Footer';


const HomePage = () => {
    return (
        <Fragment>
            <Slider />
            <AboutSec1 />
            <AboutSec2 />
            <AboutSec3 />
            <ServicesSec />
            <BoxWrapper />
            <QuoteSlider />
            <RowSec1 />
            <RowSec2 />
            <ContactForm />
            <Footer />
        </Fragment>
    )
}

export default HomePage
