import styles from './style.module.scss'
import pic1 from './image1.JPG'
import pic2 from './image2.JPG'
import pic3 from './image3.JPG'
import React, {useState} from "react";
import {Schedule} from "../InformationPart/Schedule";
import {Pressents} from "../InformationPart/Pressents";
import {Dresscode} from "../InformationPart/Dresscode";
import {SorryPart} from "./SorryPart";

export const GaleryPart = () => {

    const [showSorry, setShowSorry] = useState(false);

    return (
        <>
            <div className={styles.gallery} id={'gallery'}>
                <h2 className={styles.center_content} id={styles.gallery_header}>Galerie</h2>
                <div className={styles.center_content} id={styles.gallery_text}>
                    Po svatbě zde zveřejníme naše společné fotky a svatební video. ♥
                </div>
                <div className={styles.horizontal_line}>
                    <div className={styles.horizontal_divider} id={styles.mobile_reverse}>
                        <img src={pic1} alt="Our image"
                             height={"0"} width={"0"}/>
                        <a onClick={() => {
                            setShowSorry(!showSorry);
                        }}
                        >Naše fotky</a>
                    </div>
                    <div className={styles.horizontal_divider}>
                        <img src={pic2} alt="Our image"
                             height={"0"} width={"0"}/>
                        <a onClick={() => {
                            setShowSorry(!showSorry);
                        }}
                        >Společné fotky</a>
                    </div>
                    <div className={styles.horizontal_divider}>
                        <img src={pic3} alt="Our image"
                             height={"0"} width={"0"}/>
                        <a onClick={() => {
                            setShowSorry(!showSorry);
                        }}
                        >Video</a>
                    </div>
                </div>
                <div className={styles.mobile_photo_div}>
                    <img id={styles.mobile_photo}
                         src={pic1} alt="Our image"
                         height={"0"} width={"0"}/>
                </div>
            </div>
            <div id={styles.sorry_part}>
                {showSorry ? <SorryPart/> : ""}
            </div>
        </>
    )
}