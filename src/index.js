import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Navigation} from "./parts/Navigation/Navigation";
import {WelcomePart} from "./parts/WelcomePart/WelcomePart";
import {OurStoryPart} from "./parts/OurStoryPart/OurStoryPart";
import {InformationPart} from "./parts/InformationPart/InformationPart";
import {ContactPart} from "./parts/ContactPart/ContactPart";
import {GaleryPart} from "./parts/GaleryPart/GaleryPart";
import {Footer} from "./parts/Footer/Footer";
import {Helmet} from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
const TITLE = 'Naše svatba';

const meta = {
    title: TITLE
}

root.render(
    <React.StrictMode>
        <Helmet>
            <title>{TITLE}</title>
            <meta name="lang" content="cs" />
            <meta charSet="UTF-8"/>
        </Helmet>
        <Navigation></Navigation>
        <WelcomePart></WelcomePart>
        <OurStoryPart></OurStoryPart>
        <InformationPart></InformationPart>
        <ContactPart></ContactPart>
        <GaleryPart></GaleryPart>
        <Footer></Footer>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
