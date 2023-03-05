import styles from './style.module.scss'
export const Footer = () => {

    return (
        <>
            <div className={styles.center_content} id={styles.big_font_size}>
                Těšíme se na Vás a pamatujte,
            </div>
            <div className={styles.center_content} id={styles.font1}>
                kdo leží v posteli, nikdy nezakopne,
            </div>
            <div className={styles.center_content} id={styles.font2}>
                tak si s námi pojďte nabít čumu!
            </div>
            <div id={styles.footer}>
                <div className={styles.size_corrector} id={styles.mobile_hidder}></div>
                <div className={styles.size_corrector}>♥</div>
                <div className={styles.size_corrector}>created by Sóňa & Óňa</div>
            </div>
        </>
    )
}