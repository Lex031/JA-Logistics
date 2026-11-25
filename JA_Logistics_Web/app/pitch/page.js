"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./PDFView'), {
    ssr: false,
    loading: () => <div>Indlæser PDF...</div>,
});

const Info = () => {

    return (
        <PDFViewer fileUrl="./pitch/JA_Logistics_Presentation.pdf" titel='Pitch' />
    );
}


export default Info;