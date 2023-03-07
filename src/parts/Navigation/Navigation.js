import styles from './style.module.scss'
import {useState} from "react";
import InvitationModal from "../InvitationModal/InvitationModal";
import hamburger from './hamburger.png'
import up from './up.png'
import leftArrow from "../InvitationModal/leftArrow.png";


export const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false);
    let menu;
    const [openInvitationModal, setOpenInvitationModal] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const openModal = () => {
        setOpenInvitationModal(true);
    };

    const closeModal = () => {
        setOpenInvitationModal(false);
    }

    if (showMenu) {
        menu = <div>
            <a className={styles.navigation_link} href={"#our_story"}>
                Náš příběh
            </a>
            <a className={styles.navigation_link} href={"#information"}>
                Informace
            </a>
            <a className={styles.navigation_link}
               onClick={() => openModal()}>
                Pozvánka
            </a>
            <a className={styles.navigation_link} href={"#gallery"}>
                Galerie
            </a>
            <a className={styles.navigation_link} href={"#confirmation"}>
                Účast
            </a>
        </div>
    } else {
        menu = <div>

        </div>
    }

    return (
        <nav id={styles.navigation}>
            <div id={styles.mobile_nav}>
                <img src={hamburger}
                     onClick={() => setShowMenu(!showMenu)}/>
            </div>
            <h1 id={styles.main_link}>
                <div id={styles.main_title}>
                    NAŠE SVATBA
                </div>
                <div id={styles.title_names}>
                    Soňa <span id={styles.pc_heart}>♥</span><span id={styles.mobile_heart}>🖤</span> Ondra
                </div>
            </h1>


            {menu}

            <div className={styles.horizontal_line}>
                <a className={styles.navigation_link} href={"#our_story"}>
                    Náš příběh
                </a>
                <a className={styles.navigation_link} href={"#information"}>
                    Informace
                </a>
                <a className={styles.navigation_link}
                   onClick={() => openModal()}>
                    Pozvánka
                </a>
                <a className={styles.navigation_link} href={"#gallery"}>
                    Galerie
                </a>
                <a className={styles.navigation_link} href={"#confirmation"}>
                    Účast
                </a>
            </div>
            <div style={{position: 'fixed', top: scrollY}} id={styles.modal}>
                {openInvitationModal && <InvitationModal
                    closeInvitationModal={closeModal}
                />}
            </div>
        </nav>
    )
}