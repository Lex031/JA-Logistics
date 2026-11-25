'use client';

import { Box } from '@mui/material';
import Link from 'next/link';
import './button.module.css';


export default function Buttons({ titel, styletilbage, texttilbage, textfrem, midt, tilbage, disabledtilbage, frem, disabledfrem, stylefrem }) {

    return (
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Link href={`#${titel}`} id='button'>
                <button
                    onClick={tilbage}
                    disabled={disabledtilbage}
                    style={styletilbage}
                >
                    {texttilbage}
                </button>
            </Link>
            <Box component='span' sx={{ mx: 2, fontWeight: 'medium' }}>
                {midt}
            </Box>
            <Link href={`#${titel}`} id='button'>
                <button
                    onClick={frem}
                    disabled={disabledfrem}
                    style={stylefrem}
                >
                    {textfrem}
                </button>
            </Link>
        </Box>
    );
}