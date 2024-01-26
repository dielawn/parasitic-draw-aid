// import { TestResults } from "./Results";
// import ReactPDF from '@react-pdf-viewer/core'; // Import Worker from '@react-pdf-viewer/core'
// import { render, Worker } from '@react-pdf-viewer/core';
// import { useEffect } from "react";

// export const DownloadPDF = ({ batTestResults, codeArray, drawResults, timeLog, ampsLog, noteObj }) => {
   
//         const downloadPDF = async () => {
//             try {
//                 await render(
//                     <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${ReactPDF.version}/build/pdf.worker.min.js`}>
//                         <TestResults 
//                             batTestResults={batTestResults} 
//                             codeArray={codeArray}
//                             drawResults={drawResults}
//                             timeLog={timeLog}
//                             ampsLog={ampsLog}
//                             noteObj={noteObj}
//                         />
//                     </Worker>, 
//                     `${window.location.origin}/parasitic-draw-report.pdf`
//                 );
//             } catch (error) {
//                 console.error(`Error rendering PDF: ${error}`)
//             }
//         }
//         useEffect(() => {
//             downloadPDF()
//         }, [batTestResults, codeArray, drawResults, timeLog, ampsLog, noteObj])

//     return (
//         <div>
//             <button onClick={downloadPDF}>Download PDF</button>
//         </div>
//     );
// };

import { useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs, Worker as PdfWorker } from 'react-pdf-viewer'; // Import Worker from '@react-pdf-viewer/core'

import { TestResults } from './Results';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const DownloadPDF = ({ batTestResults, codeArray, drawResults, timeLog, ampsLog, noteObj }) => {
    
        const downloadPDF = async () => {
            try {
                // Use PdfWorker from react-pdf-viewer
                const pdfWorker = new PdfWorker({ workerUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js` });

                // Render PDF using the Worker
                await pdfWorker.load(
                    <TestResults
                        batTestResults={batTestResults}
                        codeArray={codeArray}
                        drawResults={drawResults}
                        timeLog={timeLog}
                        ampsLog={ampsLog}
                        noteObj={noteObj}
                    />
                );

                // Create a download link
                const blob = await pdfWorker.getBlob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'parasitic-draw-report.pdf';
                link.click();
            } catch (error) {
                console.error(`Error rendering PDF: ${error}`);
            }
        };
        useEffect(() => {
        downloadPDF();
    }, [batTestResults, codeArray, drawResults, timeLog, ampsLog, noteObj]);

    return (
        <div>
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    );
};

