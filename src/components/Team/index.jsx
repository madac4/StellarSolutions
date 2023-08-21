import React from 'react';
import { Icon } from '@iconify/react';
import './team.scss';
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function Team({ member }) {
    console.log(member.socialMedia);
    return (
        <Div className="cs-team cs-style1">
            <Div className="cs-member_thumb">
                <img
                    src={`http://localhost:1337${member.avatar.data.attributes.url}`}
                    alt={member.name}
                />
                <Div className="cs-member_overlay" />
            </Div>
            <Div className="cs-member_info">
                <h2 className="cs-member_name">{member.name}</h2>
                <Div className="cs-member_designation">{member.role}</Div>
            </Div>
            {member.socialMedia && (
                <Div className="cs-member_social cs-primary_color">
                    {member.socialMedia.map((social) => (
                        <Link to={social.url} target="_blank">
                            <Icon icon={social.icon} />
                        </Link>
                    ))}
                </Div>
            )}
        </Div>
    );
}
