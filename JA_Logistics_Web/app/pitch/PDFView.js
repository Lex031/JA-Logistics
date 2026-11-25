'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { pdfjs } from 'react-pdf';
import { isMobileOnly } from 'react-device-detect';
try {
    require('react-pdf/dist/Page/AnnotationLayer.css');
    require('react-pdf/dist/Page/TextLayer.css');
} catch (e) {
    // CSS files not found, will work without them but with warnings
    console.warn('PDF CSS files not found - text selection may not work properly');
}
import './button.module.css';
// Import CSS - try this approach first
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Box } from '@mui/material';
import Buttons from './button';

// Set up PDF.js worker - use dynamic import for exact version matching
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

// Dynamic imports with better error handling
const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), {
    ssr: false,
    loading: () => <p>Loading PDF viewer...</p>
});
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), {
    ssr: false
});

export default function PDFViewer({ fileUrl, titel }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(isMobileOnly ? 0.7 : 1.5);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [documentLoaded, setDocumentLoaded] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
        if (!documentLoaded) {
            setNumPages(numPages);
            setLoading(false);
            setError(null);
            setDocumentLoaded(true);
        }
    }

    const buttonSideTilbage = {
        padding: '8px 12px',
        border: '1px solid #ccc',
        backgroundColor: pageNumber <= 1 ? '#f5f5f5' : '#fff',
        cursor: pageNumber <= 1 ? 'not-allowed' : 'pointer'
    }

    const buttonSideFrem = {
        padding: '8px 12px',
        border: '1px solid #ccc',
        backgroundColor: pageNumber >= numPages ? '#f5f5f5' : '#fff',
        cursor: pageNumber >= numPages ? 'not-allowed' : 'pointer'
    }

    function onDocumentLoadError(error) {
        if (!documentLoaded) {
            setError(error.message);
            setLoading(false);
        }
    }

    if (error) {
        return <Box sx={{ p: 2, color: 'error.main' }}>Error loading PDF: {error}</Box>;
    }

    return (
        <Box id={titel}>
            {/* Navigation Controls */}
            {numPages > 1 &&
                <Buttons
                    texttilbage='◀ Previous'
                    titel={titel}
                    tilbage={() => setPageNumber(p => Math.max(p - 1, 1))}
                    disabledtilbage={pageNumber <= 1}
                    styletilbage={buttonSideTilbage}
                    midt={`Page ${pageNumber} of ${numPages || '...'}`}
                    frem={() => setPageNumber(p => Math.min(p + 1, numPages))}
                    disabledfrem={pageNumber >= numPages}
                    stylefrem={buttonSideFrem}
                    textfrem='Next ▶'
                />
            }
            {/* Zoom Controls */}
            <Buttons
                texttilbage='🔍+ Zoom in'
                tilbage={() => setScale(s => Math.min(s + 0.1, 3))}
                styletilbage={{ padding: '8px 16px', border: '1px solid #ccc', backgroundColor: '#fff' }}
                midt={`${Math.round(scale * 100)}%`}
                frem={() => setScale(s => Math.max(s - 0.1, 0.5))}
                stylefrem={{ padding: '8px 16px', border: '1px solid #ccc', backgroundColor: '#fff' }}
                textfrem='🔍- Zoom out'
            />

            {/* PDF Document */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: '600px',
                padding: isMobileOnly ? '0.2px' : '20px',
            }}>
                {loading && <Box sx={{ p: 4 }}>Indlæser PDF...</Box>}
                <Box sx={{
                    maxWidth: '100%',
                    display: 'flex',
                    m: '0 auto',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: 'white'
                }}>
                    <Document
                        file={fileUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={<Box sx={{ p: 2 }}>Indlæser dokument...</Box>}
                    >
                        <Page
                            id={titel}
                            pageNumber={pageNumber}
                            scale={scale}
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                        />
                    </Document>
                </Box>
            </Box>
            {numPages > 1 &&
                <Buttons
                    texttilbage='◀ Previous'
                    titel={titel}
                    tilbage={() => setPageNumber(p => Math.max(p - 1, 1))}
                    disabledtilbage={pageNumber <= 1}
                    styletilbage={buttonSideTilbage}
                    midt={`Page ${pageNumber} of ${numPages || '...'}`}
                    frem={() => setPageNumber(p => Math.min(p + 1, numPages))}
                    disabledfrem={pageNumber >= numPages}
                    stylefrem={buttonSideFrem}
                    textfrem='Next ▶'
                />
            }
        </Box>
    );
}