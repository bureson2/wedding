import styles from './style.module.scss'
import React, {useState} from "react";
import {Dresscode} from "./Dresscode";
import {Pressents} from "./Pressents";
import {Schedule} from "./Schedule";
import {Address} from "./Address";

export const InformationPart = () => {

    const [showAddress, setShowAddress] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showPressents, setShowPressents] = useState(false);
    const [showDresscode, setShowDresscode] = useState(false);

    return (
        <div className={styles.information} id={'information'}>
            <h2 className={styles.center_content} id={styles.information_title}>Informace</h2>
            <p className={styles.center_content}>
                <p>
                    Zde Vás budeme průběžně informovat o všem možném i nemožném.
                </p>
                <ul className={styles.ul_text_align}>
                    <li className={styles.bold}>
                        Upozorňujeme na změnu. Obřad jsme posunuli ze 14:00 na 13:00.
                    </li>
                    <li className={styles.bold}>
                        Pro všechny je zařízen společný odvoz autobusem. Odjezd bude ve 12 hodin z Neratovic
                        v Ulici Na Výsluní a dále z Libiše od rodinného domu. Ti, ktetých se tato doprava netýká to od nás budou vědět včas.
                    </li>
                    <li>
                        Odvoz bude zajištěn formou 2 aut s řidiči, kteří budou k dispozici do 30 minut od prvního zavolání.
                        Z kapacitních důvodů, prosím, mějte na paměti,
                        že kapacita bude v jednu chvíli omezená a proto počítejte s určitou časovou prodlevou.
                    </li>
                    <li>
                        Pro zájemce o tajná taneční překvapení uvedeme, že se mohou podívat na krátký taneček k písničce <a className={styles.no_underline} href={"https://www.youtube.com/shorts/D4b9yYToU5o"}>Blinding lights</a>.
                    </li>
                    <li>
                        Pro milovníky hudby máme na pozdní hodiny připravené kartičky s možností písničky na přání.
                    </li>
                    <li>
                        Na závěr bychom si dovolili všechny požádat, aby případně poslouchali instrukce fotografky, kameramana,
                        svědků a malé hlasité blondýnky, Aničky, kterou jistě poznáte velmi rychle ;)
                    </li>
                    <hr />
                    <li>
                        Na svatbě budeme mít profesionální fotografku a profesionálního kameramana.
                        Proto Vás moc žádáme, abyste v důležité momenty odolali a nechali své mobilní telefony v kapsách a
                        prožili tyto jedinečné chvíle s námi. Uvidíte, že výsledné fotky a videa budou bez telefonů v záběrech
                        místo Vašich tváří vypadat mnohem lépe. A to platí i pro otce nevěsty!!!
                    </li>
                    <li>
                        Pokud byste nám chtěli udělat radost házením konfet, rýže nebo jiných věcí,
                        berte prosím na vědomí, že jsou
                        naším svatebním místem ZAKÁZÁNY. Na novomanželský špalír budeme mít pro Vás v
                        omezeném množství k dispozici bublifuky
                        a sušené lístky. Pokud byste něco ze zmíněného měli doma navíc, můžete si je
                        přinést.
                    </li>
                    <li>
                        Pokud máte nějaké alergie, intolerance nebo jiná omezení v jídle, dejte nám prosím vědět co
                        nejdříve.
                    </li>
                    <li>
                        Svatba bude v letním období u rybníčku. Svatbu jsme tam zatím ještě neměli, tak Vám
                        nedokážeme říct, jaké podmínky
                        tam pro nás budou nastražené, proto prosím myslete na to, abyste si s sebou vzali pro
                        jistotu repelent.
                    </li>
                    <li>
                        Někdy v průběhu večera, bychom si přáli mít jako vsuvku hraní na kytary. Proto, pokud nějakou
                        máte a hrajete rádi,
                        si ji můžete vzít s sebou, určitě se neztratí.
                    </li>
                    <li>Jste-li milovníky nějaké konkrétní písničky, napiště nám a zařadíme ji mezi
                        náš svatební playlist.
                    </li>
                    <li>
                        Všechny hosty, kteří kouří, prosíme, abyste byli k ostatním ohleduplní a předem si
                        ověřili,
                        na jakém místě bude kouření povoleno.
                    </li>
                    <li>
                        Jestli máte v plánu vymyslet nějakou zábavu pro ženicha s nevěstou, dejte o tom vědět svědkům,
                        aby se na to myslelo v harmonogramu a zbyl na to čas.
                    </li>
                </ul>

            </p>
            <div className={styles.horizontal_lines}>
                <div onClick={() => {
                    setShowAddress(!showAddress);
                    setShowSchedule(false);
                    setShowPressents(false);
                    setShowDresscode(false);
                }
                }
                >Adresa
                </div>
                <div onClick={() => {
                    setShowAddress(false);
                    setShowSchedule(!showSchedule);
                    setShowPressents(false);
                    setShowDresscode(false);
                }
                }
                >Program
                </div>
                <div onClick={() => {
                    setShowAddress(false);
                    setShowSchedule(false);
                    setShowPressents(!showPressents);
                    setShowDresscode(false);
                }

                }
                >Dárky
                </div>
                <div onClick={() => {
                    setShowAddress(false);
                    setShowSchedule(false);
                    setShowPressents(false);
                    setShowDresscode(!showDresscode);
                }
                }
                >Dresscode
                </div>
            </div>
            <div id={styles.information_content}>
                {showAddress ? <Address/> : ""}
                {showSchedule ? <Schedule/> : ""}
                {showPressents ? <Pressents/> : ""}
                {showDresscode ? <Dresscode/> : ""}
            </div>
        </div>
    )
}