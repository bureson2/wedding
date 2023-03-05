import styles from './style.module.scss'
import collage from './collage1.png'
import mainImage from './mainImage.jpg'
import {useState} from "react";
import InvitationModal from "../InvitationModal/InvitationModal";

export const WelcomePart = () => {

    const [openInvitationModal, setOpenInvitationModal] = useState(false);
    const [scrollY, setScrollY] = useState(0);


    const openModal = () => {
        setOpenInvitationModal(true);
    };

    const closeModal = () => {
        setOpenInvitationModal(false);
    }
    return (
        <>
            <div id={styles.welcome_part}>
                <div className={styles.horizontal_line}>
                    <img id={styles.web_collage}
                         src={collage} alt="Our image"
                         width="0"
                         height="0"/>
                    <img id={styles.mobile_image}
                         src={mainImage} alt="Our image"
                         width="0"
                         height="0"/>

                    <div className={styles.center_content}>
                        <h2 className={styles.section_title}>
                            Vítejte na našich svatebních stránkách!
                        </h2>
                        <div>
                            Vážení hosté,
                            <p>
                                srdečně Vás vítáme na našich svatebních stránkách, které Vám sdělí všechny důležité informace
                                o naší svatbě. Na náš velký den se extrémně těšíme a jsme rádi,
                                že se s Vámi můžeme podělit o tuto výjimečnou událost našich životů.
                            </p>
                            <p>
                                Snažili jsme se, aby tyto stránky byly užitečným zdrojem informací,
                                proto Vás žádáme, abyste si je prošli celé, abyste se dozvěděli vše, co jsme si pro Vás
                                připravili.
                                Budete-li mít jakékoliv otázky, neváhejte se na nás obrátit.
                            </p>
                            <p>
                                Doufáme, že si prohlížení těchto stránek a celý náš velký den užijete
                                a my se těšíme na naše společné setkání.
                            </p>
                            <p>
                                S láskou
                            </p>
                            <p> Sonička a Ondra
                            </p>
                        </div>

                        <div className={styles.button_right}>
                            <input id={styles.welcome_button} type="button" value="♥"
                                   onClick={() => openModal()}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{position: 'fixed', top: scrollY}} id={styles.modal}>
                {openInvitationModal &&
                    <InvitationModal closeInvitationModal={closeModal}/>
                }
            </div>
        </>
    )
}