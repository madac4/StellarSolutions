import React from 'react';
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
    return (
        <>
            {title && <h2 className="cs-widget_title">{title}</h2>}
            <ul className="cs-menu_widget cs-style1 cs-mp0">
                <li>
                    {withIcon ? (
                        <span className="cs-accent_color">
                            <Icon icon="material-symbols:add-call-rounded" />
                        </span>
                    ) : (
                        ''
                    )}
                    +373 69 2627 12
                </li>
                <li>
                    {withIcon ? (
                        <span className="cs-accent_color">
                            <Icon icon="mdi:envelope" />
                        </span>
                    ) : (
                        ''
                    )}
                    contact@stellarsolutions.com
                </li>
                <li>
                    {withIcon ? (
                        <span className="cs-accent_color">
                            <Icon icon="mdi:map-marker" />
                        </span>
                    ) : (
                        ''
                    )}
                    str. Mitropolit Bănulescu Bodoni, 59/B, Chișinău
                </li>
            </ul>
        </>
    );
}
