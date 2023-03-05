import styles from './style.module.scss'

import invivationCZ from './invitationCZ.png'
import invivationSK from './invitationSK.png'
import pic1 from './20221124_222412.jpg'
import pic2 from './20221124_222428.jpg'
import pic3 from './20221223_122533.jpg'
import pic4 from './20221124_222218.jpg'
import leftArrow from './leftArrow.png'
import rightArrow from './rightArrow.png'
import {useState} from "react";

const InvitationModal = ({closeInvitationModal}) => {

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        invivationCZ,
        invivationSK,
        pic1,
        pic2,
        pic3,
        pic4
    ];

    function nextImage() {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }

    function prevImage() {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    }

    return (
        <div id={styles.modal_window}>
            {/*<div id={styles.invitation_video}>*/}
            {/*    <iframe width="0" height="0" src="https://www.youtube.com/embed/Ri523bqx5gI"*/}
            {/*            title="YouTube video player" frameBorder="0"*/}
            {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*            allowFullScreen>*/}
            {/*    </iframe>*/}
            {/*</div>*/}
            {/*<div id={styles.invitation_letter}>*/}
            {/*    <p>ahoj bráško, zveme tě :3</p>*/}
            {/*    <button className={styles.close_button}*/}
            {/*            onClick={closeInvitationModal}>*/}
            {/*        Zpět*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div id={styles.content_heigh}>
                <button onClick={prevImage} className={styles.arrow} id={styles.left_arrow}>
                    <img src={leftArrow} alt="current"/>
                </button>
                <img src={images[currentImage]} alt="current" className={styles.invitation_image}/>
                <button onClick={nextImage} className={styles.arrow} id={styles.right_arrow}>
                    <img src={rightArrow} alt="current"/>
                </button>
                <div className={styles.clode_div}>
                    <button className={styles.close_button}
                            onClick={closeInvitationModal}>
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InvitationModal