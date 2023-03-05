import styles from './style.module.scss'
import pic from './ninja.JPG'
import emailjs from 'emailjs-com';
import {useRef, useState} from "react";

export const ContactPart = () => {

    const FORM_ENDPOINT = "";
    const [submitted, setSubmitted] = useState(false);
    const form = useRef();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleName(event) {
        setName(event.target.value);
    }

    function handleMessage(event) {
        setMessage(event.target.value);
    }

    const sendEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_58y5umb', 'template_e3g4ug5', form.current, 'LViDrZUiU2RNTKi96')
            .then((result) => {
                console.log(result.text);
                setName("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
            });
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    return (
        <div className={styles.confirmation} id={'confirmation'}>
            <h2 className={styles.center_content} id={styles.contact_title}>
                Už se nemůžeme dočkat, až to s Vámi společně oslavíme!
            </h2>
            <div className={styles.horizontal_line}>
                <img src={pic} alt="Our image"
                     height={"0"} width={"0"}
                />
                <div className={styles.vertical_line}>
                    <div className={styles.contact_text}>Prosíme, dejte nám proto vědět, zda s Vámi můžeme počítat.
                    </div>
                    <div className={styles.contact_text}>Nebojte se, nezlobíme se, pokud byste z jakéhokoli důvodu
                        nemohli dorazit.
                    </div>
                    <form ref={form}
                          onSubmit={sendEmail}
                          id={styles.form}
                          action={FORM_ENDPOINT}
                          method="POST"
                          target="_blank"
                    >
                        <label htmlFor="name">Jméno/a:</label>
                        <input type="text" id="name" name="name"
                               value={name} onChange={handleName}/>
                        <br/>
                        <div><input type="radio" id="yes" name="radio" value="yes"/>
                            <label htmlFor="yes">Ano, určitě dorazím, už se nemůžu dočkat!</label></div>
                        <div>
                            <input type="radio" id="no" name="radio" value="no"/>
                            <label htmlFor="no">Bohužel nedorazím, mrzí mě to. :(</label>
                        </div>
                        <div>
                            <input type="radio" id="maybe" name="radio" value="maybe"/>
                            <label htmlFor="maybe">Až do poslední chvíle budu tvrdit, že dorazím, ale potom si to náhle
                                rozmyslím. :D</label>
                        </div>

                        <label htmlFor="note">Zpráva novomanželům:</label>
                        <br/>

                        <textarea id="note" name="note" rows="4" cols="50" placeholder={"Zde nám můžete sdělit cokoliv Vás napadne"}
                                  value={message}  onChange={handleMessage}>
                        </textarea>

                        <div className={styles.button_right}>
                            <button id={styles.send_button}
                                    type="submit">
                                Odeslat
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}