import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';
import axios from 'axios';

export default function TeamPage() {
    pageTitle('Team');
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const getTeam = async () => {
            await axios
                .get('http://localhost:1337/api/team-members?populate=avatar')
                .then((res) => setTeam(res.data.data))
                .catch((error) => console.log(error));
        };
        getTeam();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageHeading title="Our Team" bgSrc="images/team_hero_bg.jpeg" pageLinkText="Team" />
            <Spacing lg="145" md="80" />
            <Div className="container">
                <SectionHeading
                    title="Meet our awesome <br/>team members"
                    subtitle="Our Team"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="90" md="45" />
                <Div className="row">
                    {team.map((item, index) => (
                        <Div key={index} className="col-lg-3 col-sm-6">
                            <Team member={item.attributes} />
                            <Spacing lg="80" md="30" />
                        </Div>
                    ))}
                </Div>
                <Spacing lg="70" md="50" />
                <Div className="container">
                    <Cta
                        title="Let’s disscuse make <br />something <i>cool</i> together"
                        btnText="Apply For Meeting"
                        btnLink="/contact"
                        bgSrc="/images/cta_bg.jpeg"
                    />
                </Div>
            </Div>
        </>
    );
}
