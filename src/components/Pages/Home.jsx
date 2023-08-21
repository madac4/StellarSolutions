import React, { useEffect, useState } from 'react';
import Hero from '../Hero';
import { pageTitle } from '../../helper';
import Div from '../Div';
import FunFact2 from '../FunFact/FunFact2';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import MovingText2 from '../MovingText/MovingText2';
import VideoModal from '../VideoModal';
import Portfolio from '../Portfolio';
import { Icon } from '@iconify/react';
import Cta from '../Cta';
import LogoList from '../LogoList';

export default function Home() {
    const [itemShow, setItemShow] = useState(6);
    pageTitle('Web Solutions');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const funfaceData = [
        {
            title: 'Digital products',
            factNumber: '20',
        },
        {
            title: 'Happy clients',
            factNumber: '10',
        },
        {
            title: 'Project completed',
            factNumber: '10',
        },
        {
            title: 'Team members',
            factNumber: '4',
        },
    ];
    const serviceData1 = [
        {
            title: 'UI/UX Design',
            href: '/service/service-details',
        },
        {
            title: 'Wordpress Websites',
            href: '/service/service-details',
        },
        {
            title: 'SEO',
            href: '/service/service-details',
        },
    ];
    const serviceData2 = [
        {
            title: 'Branding',
            href: '/service/service-details',
        },
        {
            title: 'App design',
            href: '/service/service-details',
        },
        {
            title: 'React Developer',
            href: '/service/service-details',
        },
    ];
    const portfolioData = [
        {
            title: 'MDED Website',
            subtitle: 'Vezi Detalii',
            href: '/portfolio/portfolio-details',
            src: '/images/mded.png',
            category: 'ui_ux_design',
        },
        
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_13.jpeg',
            category: 'web_design',
        },
        
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_14.jpeg',
            category: 'mobile_apps',
        },
        {
            title: 'Franzeluța',
            subtitle: 'Vezi Detalii',
            href: '/portfolio/portfolio-details',
            src: '/images/franzeluta.png',
            category: 'logo_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_15.jpeg',
            category: 'ui_ux_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_16.jpeg',
            category: 'web_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_11.jpeg',
            category: 'ui_ux_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_12.jpeg',
            category: 'logo_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_13.jpeg',
            category: 'web_design',
        },
    ];
    return (
        <>
            {/* Start Hero Section */}
            <Hero
                title="We Are <span>S</span>tellar <span>S</span>olutions <br />Web Agency"
                subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
                scrollDownId="#service"
                phoneNumber="+373 69 2627 12"
                email="contact@stellarsolutions.com"
            />
            {/* End Hero Section */}

            {/* Start Funfact Section */}
            <Div className="container">
                <FunFact2
                    data={funfaceData}
                    variant="cs-type1"
                    bgUrl="/images/funfact_shape_bg.svg"
                />
            </Div>
            {/* End Funfact Section */}

            {/* Start Services Section */}
            <Spacing lg="145" md="80" />
            <Div className="container">
                <SectionHeading
                    title="What we provide"
                    subtitle="Services"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="65" md="45" />
            </Div>
            {/* End Services Section */}

            {/* Start Moving Text Section */}
            <MovingText2 data={serviceData1} />
            <Spacing lg="20" md="10" />
            <MovingText2 reverseDirection data={serviceData2} />
            {/* End Moving Text Section */}

            {/* Start About Section */}
            <Div className="cs-shape_wrap_4">
                <Div className="cs-shape_4"></Div>
                <Div className="cs-shape_4"></Div>
                <Spacing lg="150" md="80" />
                <Div className="container">
                    <Div className="row">
                        <Div className="col-lg-5 col-xl-4">
                            <SectionHeading
                                title="Uk’s best digital agency ever"
                                subtitle="Why Choose Us"
                                btnText="Learn More"
                                btnLink="/about"
                            />
                            <Spacing lg="45" md="45" />
                        </Div>
                        <Div className="col-lg-7 offset-xl-1">
                            <Div className="cs-half_screen">
                                <VideoModal
                                    videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                                    bgUrl="/images/video_bg.jpeg"
                                    variant="cs-style1 cs-size1"
                                />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
            {/* End About Section */}

            {/* Start Projects Section */}
            <Spacing lg="145" md="80" />
            <Div className="container">
                <SectionHeading
                    title="Portfolio to explore"
                    subtitle="Latest Projects"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="90" md="45" />
                <Div className="row">
                    {portfolioData.slice(0, itemShow).map((item, index) => (
                        <Div
                            className={`${
                                index === 0 || index === 3 || index === 4 ? 'col-lg-8' : 'col-lg-4'
                            }`}
                            key={index}>
                            <Portfolio
                                title={item.title}
                                subtitle={item.subtitle}
                                href={item.href}
                                src={item.src}
                                variant="cs-style1 cs-type1"
                            />
                            <Spacing lg="25" md="25" />
                        </Div>
                    ))}
                </Div>

                <Div className="text-center">
                    {portfolioData.length <= itemShow ? (
                        ''
                    ) : (
                        <>
                            <Spacing lg="65" md="40" />
                            <span className="cs-text_btn" onClick={() => setItemShow(itemShow + 3)}>
                                <span>Load More</span>
                                <Icon icon="bi:arrow-right" />
                            </span>
                        </>
                    )}
                </Div>
            </Div>
            <Spacing lg="140" md="80" />
            {/* End Projects Section */}

            {/* Start LogoList Section */}
            <Div className="container">
                <SectionHeading
                    title="Our reputed partner"
                    subtitle="Top Clients"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="70" md="45" />
                <LogoList />
            </Div>
            <Spacing lg="150" md="80" />
            {/* End LogoList Section */}

            {/* Start CTA Section */}
            <Div className="container">
                <Cta
                    title="Let’s disscuse make <br />something <i>cool</i> together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
            {/* End CTA Section */}
        </>
    );
}
