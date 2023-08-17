import style from './footer.module.css'

const Footer = (props) =>{

    return (
        <footer className={style.footer}>
            <div className={style.container1}>
                <h1 className={style.footerLogo}>
                    Wordlens
                </h1>
            </div>
            <div>
            <p>The API used to serve this data was provided by dictionaryapi.dev, click on the link below to read more</p>
                <a className={style.footerCta} href="#">Visit API documentation</a>
            </div>
            <div className={style.socialLogo}>
                <span>fb</span>
                <span>in</span>
                <span>tw</span>
                <span>is</span>
            </div>
            <div>
                <h1 className={`${style.miniLogo} style.mobileVisible`}>Wordlens</h1>
                <p>copyright © 2021 Wordlens. All rights reserved</p>
                <p className={`${style.footerPrivacy} ${style.mobileVisible}`}>Terms of use Privacy Policy</p>
            </div>
        </footer>
    )
};

export default Footer;