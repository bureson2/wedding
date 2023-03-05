import styles from './style.module.scss'

export const Address = () => {

    return (
        <div className={styles.center_content} id={styles.address_text}>
            <p>
                Celá svatba, obřad i následná hostina a program se bude odehrávat ve Starém mlýně u Byšic.
                Přesná adresa je 5. května 59, 277 32 Byšice zorientovat se můžete pomocí mapy níže.
            </p>
            <iframe
                title={"googleMap"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.1832426648016!2d14.628406015726227!3d50.30717237945586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470be459d214b5b5%3A0xd50aa08e1d79b101!2zU3RhcsO9IE1sw71u!5e0!3m2!1scs!2scz!4v1676130135446!5m2!1scs!2scz"
                width="800"
                height="350"
                allowFullScreen={""}
                loading={"lazy"}
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}