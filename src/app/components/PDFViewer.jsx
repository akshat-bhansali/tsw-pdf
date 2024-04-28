"use client";
import React, { useEffect, useState } from 'react';
import { db, storage } from "./firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  snapshotEqual,
  updateDoc,
  where,
} from "firebase/firestore";


function PDFViewer({ fileName }) {
  const getData = async()=>{
    try{
      const pdfCollection = collection(db, "pdf");
      const q = query(pdfCollection, where("fileName", "==", fileName));
      const querySnapshot = await getDocs(q);
      const pdfData = [];
      querySnapshot.forEach((doc) => {
          const data = doc.data();
          pdfData.push(data);
      });

      window.location.href = pdfData[0].fileId;
    }catch(e){
      console.log(e);
    }
  }
    useEffect(() => {
      getData();
      }, [fileName]);
  
    return (
      <div>
       
      </div>
    );
  }
  
  export default PDFViewer;