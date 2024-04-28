"use client";
import React, { useEffect, useState } from 'react';


function PDFViewer({ url }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        window.location.href = url;
      }, [url]);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div>
       
      </div>
    );
  }
  
  export default PDFViewer;