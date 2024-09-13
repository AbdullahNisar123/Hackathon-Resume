import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = (window as any).jspdf; // Type assertion for jsPDF
    const html2canvas = (window as any).html2canvas; // Type assertion for html2canvas
    
    const downloadButton = document.getElementById('download-button') as HTMLButtonElement;
  
    downloadButton.addEventListener('click', () => {
      const resumeElement = document.getElementById('static-resume') as HTMLElement;
  
      if (resumeElement) {
        html2canvas(resumeElement).then((canvas: HTMLCanvasElement) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
  
          const imgWidth = 210; // A4 width in mm
          const pageHeight = 295; // A4 height in mm
          const imgHeight = canvas.height * imgWidth / canvas.width;
          let heightLeft = imgHeight;
  
          let position = 0;
  
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
  
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
  
          pdf.save('resume.pdf');
        }).catch((err: unknown) => {
          if (err instanceof Error) {
            console.error('Error generating PDF:', err.message);
          } else {
            console.error('Error generating PDF:', err);
          }
        });
      } else {
        console.error('Resume element not found.');
      }
    });
  });