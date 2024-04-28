import { Metadata } from "next";
import PDFViewer from "../components/PDFViewer" 
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
            <iframe width={700} height={700} src={"https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/"+params.fileName+"?alt=media"} title="description"></iframe>
        </div>
    )
}

export default page
