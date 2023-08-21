import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
    const copyrightLinks = [
        {
            title: 'FAQ',
            href: '/faq',
        },
    ];

    const serviceMenu = [
        {
            title: 'UI/UX design',
            href: '/service/service-details',
        },
        {
            title: 'WP development',
            href: '/service/service-details',
        },
        {
            title: 'Digital marketing',
            href: '/service/service-details',
        },
        {
            title: 'React development',
            href: '/service/service-details',
        },
    ];

    return (
        <footer className="cs-fooer">
            <Div className="cs-fooer_main">
                <Div className="container">
                    <Div className="row">
                        <Div className="col-lg-5 col-sm-6">
                            <Div className="cs-footer_item">
                                <TextWidget
                                    logoSrc="/images/footer_logo.svg"
                                    logoAlt="Logo"
                                    text="Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium."
                                />
                                <SocialWidget />
                            </Div>
                        </Div>
                        <Div className="col-lg-3 col-sm-6">
                            <Div className="cs-footer_item">
                                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
                            </Div>
                        </Div>
                        <Div className="col-lg-4 col-sm-6">
                            <Div className="cs-footer_item">
                                <ContactInfoWidget title="Contact Us" />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Div className="container">
                <Div className="cs-bottom_footer">
                    <Div className="cs-bottom_footer_left">
                        <Div className="cs-copyright">Copyright © 2023 Stellar Solutions.</Div>
                    </Div>
                    <Div className="cs-bottom_footer_right">
                        <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
                    </Div>
                </Div>
            </Div>
        </footer>
    );
}
