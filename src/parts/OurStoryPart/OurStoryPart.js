import styles from './style.module.scss'
import collage from './collage2.png'
import engagement from './engagement.jpg'
import childhood from './childhood.png'
import {useEffect, useState} from "react";
import InvitationModal from "../InvitationModal/InvitationModal";

export const OurStoryPart = () => {

    const [openInvitationModal, setOpenInvitationModal] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const openModal = () => {
        setOpenInvitationModal(true);
    };

    const closeModal = () => {
        setOpenInvitationModal(false);
    }

    return (
        <div className={styles.our_story} id={'our_story'}>
            <h2 className={styles.center_content} id={styles.our_section_title}>
                Jaký je náš příběh?
            </h2>
            <div className={styles.horizontal_lines} id={styles.white_part}>
                <div className={styles.white_part_content}>
                    <p>
                        Kdysi dávno, legendy praví zhruba kolem roku 2005, v zemi nám všem dobře známé,
                        ve velkoměstě převelikém zvaném Neratovice, existovala školka.
                        Lid tohoto velkoměsta ji nazýval školkou Písničkou.
                        A do této školky chodili dva malí špunti. On byl malý štramák, rozený Cassanova
                        a ona byla tou nejroztomilejší princezničkou, která se tam vyskytovala.
                        Hodili by se k sobě, však můžete to posoudit sami.
                        Nicméně jeden romantický večer na školce v přírodě bylo to jediné, co jim tehdy bylo přáno.
                        Osud je však vrtkavý, a tak cesty těchto malých špuntů na dlouhé roky rozdělil.
                    </p>
                    <p>
                        Tak ten příběh ovšem neskončil, ptáte-li se. Naopak v roce 2015 teprve celý započal.
                        Jednoho dne se již o něco méně malý Ondra objevil shodou okolností před nepřátelskou školou.
                        Toho dne se znovu potkali. On nebyl si jistý, že ta sličná mladá dáma je ta, kterou ve školce ztratil.
                        Jeho podezření ovšem bylo silné... A pro oba dva se ukázalo, že i pravdivé.
                    </p>
                </div>
                <div id={styles.childhood_image_div}>
                    <img src={childhood} alt="Our image"
                         height={"0"} width={"0"}/>
                </div>

            </div>
            <div className={styles.horizontal_lines} id={styles.yellow_part}>

                <img src={collage} alt="Our image"
                     width={"0"} height={"0"}/>
                <div>
                    <p>
                        A tak se stalo, že se mladý rebel, který žil jen běháním a prknem a roztomilá aerobička,
                        která řešila jen školu a trénování, znovu potkali.
                        Bavili se spolu, hudbu poslouchali, na koncerty chodili, mnoho kokosů si spolu o obrubník rozbili a stále blíž si byli.
                        Stali se skvělými přáteli, ale bylo v tom něco víc...
                    </p>
                    <p>
                        To víc se datuje od 20.6.2016. Byly to krásné roky. A pokud o nich chcete vědět více,
                        tak přijeďte 26. 8. 2023 na jejich svatbu a zeptejte se tohoto páru sami, jak to celé vlastně bylo.
                        Už Vám můžeme ale prozradit, že ty 2 děti z prvního obrázku jsme my.

                    </p>
                </div>
            </div>
            <div className={styles.horizontal_lines} id={styles.black_part}>
                <div className={styles.invitation_part}>
                    <h2 className={styles.section_title}>A tak jsme se rozhodli se po 7 letech vzít.</h2>
                    <div>
                        <input type="button" value="Pozvánka"
                               onClick={() => openModal()}/>
                    </div>
                </div>
                <img src={engagement} alt="Our image"
                     width={"0"} height={"0"}/>
            </div>
            {/* TODO */}
            <div style={{ position: 'fixed', top: scrollY}} id={styles.modal}>
                {  openInvitationModal &&
                    <InvitationModal closeInvitationModal={closeModal}/>
                }
            </div>
        </div>
    )
}