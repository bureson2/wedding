import styles from './style.module.scss'
import React from "react";

export const Schedule = () => {

    return (
        <div className={styles.ul_text_align}>
            <h2 className={styles.center_content} id={styles.information_title}>Harmongoram</h2>
            <p>
                Harmonogram zde je pouze orientační, a proto se nedivte, že schválně vynecháváme informace o čase.
                Rádi bychom si to společně užili bez starostí, že nejedeme přesně podle plánu
            </p>

            <li>
                12:00 - setkání nevěsty a ženich s rodiči <br />
            </li>
            <li>
                12:00 - příjezd autobusu k ženichově rodnému bydlišti
            </li>
            <li>
                13:00 - obřad
            </li>
            <li>
                Společná fotka
            </li>
            <li>
                +/- 14:00 - Svtební hostina
            </li>
            <li>
            Skupinkové focení dle připraveného seznamu
            </li>
            <li>
                Krájení dortu a kávová pauzička
            </li>
            <li>
                Tajné překvapení - neptejte se nás, sami nevíme :)
            </li>
            <li>
                První tanec a ploužákové okénko
            </li>
            <li>
                Vystoupení - nechte se překvapit :)
            </li>
            <li>
                Volná zábava - novomanželé se od Vás během západu slunce na chvíli odpojí,
                ale nebojte, vrátíme se #ČESTNÉSKAUTSKÉ
            </li>
            <li>
                Zábava do setmění zakončená prskavkovým tancem
            </li>
            <li>
                Nechť párty započne. Pamatujte dneska* sa nejde spať
            </li>
            *myšleno v den konání
        </div>
    )
}