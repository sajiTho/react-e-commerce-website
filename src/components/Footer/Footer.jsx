import React from 'react'
import css from "./Footer.module.css"
import Logo from "../../assets/logo.png"
import { LocationMarkerIcon, LoginIcon, UsersIcon, PhoneIcon, MailIcon, UserCircleIcon, PhoneIncomingIcon, } from "@heroicons/react/outline";

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.Logo}>
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                    <span className='Description'>Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing.</span>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>some address should be here!!!!!!!</span>
                        </span>
                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href="Tel:(+92)314-2281115">923142281115</a>
                        </span>
                        <span className={css.pngLine}>
                            <MailIcon className={css.icon} />
                            <a href="Mailto:sajid.abbas.mme@gmail.com">xyz@gmail.com</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>SignIn</span>
                        <span className={css.pngLine}>
                            <UserCircleIcon className={css.icon} />
                            <a href="Mailto:sajid.abbas.mme@gmail.com">sajid.abbas</a>
                        </span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About Us</span>
                        </span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <a href="www.amazon.com">login Now</a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                <div className={css.details}>
                        <span>Resources</span>
                    <span className={css.pngLine}>
                        <PhoneIncomingIcon className={css.icon} />
                        <span>Safty Privacy and terms</span>
                    </span>
                    <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About Us</span>
                        </span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <a href="www.amazon.com">login Now</a>
                        </span>
                </div>
                </div>


            </div>
        </div>
    )
}

export default Footer
