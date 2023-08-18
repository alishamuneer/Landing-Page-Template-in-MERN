import React from 'react'
import SecondRowBox from './SecondRowBox';
import RowBox from './RowBox';
import p14 from '../images/p14.jpg';
import p15 from '../images/p15.jpg';
import p16 from '../images/p16.jpg';
import p17 from '../images/p17.jpg';

const RowSec2 = () => {
    return (
        <div>
            <div className="flex lg:flex-wrap justify-evenly" id="portfolio">
                <SecondRowBox pic={p14} />
                <RowBox pic={p15} />
                <RowBox pic={p16} />
                <RowBox pic={p17} />
            </div>
        </div>
    )
}

export default RowSec2
