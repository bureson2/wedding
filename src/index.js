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
import DocumentMeta from 'react-document-meta';


const root = ReactDOM.createRoot(document.getElementById('root'));
const TITLE = 'Naše svatba';
const charSet = "utf-8";

const lang = 'cs'
const meta = {
    title: TITLE,
    meta: {
        charset: charSet,
        lang: lang,
    }
}

root.render(
    <React.StrictMode>
        <Helmet>
            <meta charSet={charSet} />
            <html lang={lang} />
            <title>{TITLE}</title>
        </Helmet>
        <DocumentMeta {...meta} />
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
