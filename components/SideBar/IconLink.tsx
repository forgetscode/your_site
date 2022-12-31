import { Tooltip } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { useColorMode } from '../../context/ColorModeContext';

interface pageProps {
    icon: React.ReactElement<any, any>,
    link: string
    title: string,
}

const SideHeader: React.FC<pageProps> = ({title, icon, link}) => {
    const { mode } = useColorMode();

    return (
        <div className={`${mode === "dark" ? 'dark' : ''}`}>
            <Link href={link}>
                <a target="_blank">
                    <Tooltip title={title}>
                        <span className="social-icon cursor-pointer">
                            {icon}
                        </span>
                    </Tooltip>
                </a>
            </Link>
        </div>
    );
};

export default SideHeader;