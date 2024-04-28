
import { Metadata } from "next";
// import PDFViewer from "../components/PDFViewer" 
// import PDFViewer from 'pdf-viewer-reactjs'
// import { PDFReader } from 'reactjs-pdf-reader';
type Props ={
    params:{
        fileName:String
    }
}

export const generateMetadata=({params}:Props):Metadata=>{
    return {
        title :`${params.fileName}`,
        description:`pdf`
    }
}

const page = ({params}:Props) => {
    return (
        <div className='page'>
            {/* <PDFViewer url={"https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/"+params.fileName+"?alt=media"} /> */}
            <iframe width={700} height={700} src={"https://ik.imagekit.io/caii01zbf/-28_4_2024-bill_sales-2.pdf?updatedAt=1714308797396"} title="description"></iframe>
            {/* <PDFViewer
            document={{
                url: `https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/${params.fileName}?alt=media`,
            }} */}
        {/* /> */}
        {/* <PDFReader url={"https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/"+params.fileName+"?alt=media"}/> */}
        </div>
    )
}

export default page
