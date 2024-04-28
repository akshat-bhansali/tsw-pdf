import { Metadata } from "next";
// import PDFViewer from "../components/PDFViewer"
// import PDFViewer from 'pdf-viewer-reactjs'
// import { PDFReader } from 'reactjs-pdf-reader';
type Props = {
  params: {
    fileName: String;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.fileName}`,
    description: `pdf`,
  };
};

const page = ({ params }: Props) => {
  return (
    <div className="page">
      {/* <PDFViewer url={"https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/"+params.fileName+"?alt=media"} /> */}
      <div className="relative w-full h-screen">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={
            "https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/" +
            params.fileName +
            "?alt=media"
          }
          title="description"
        ></iframe>
      </div>

      {/* <PDFViewer
            document={{
                url: `https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/${params.fileName}?alt=media`,
            }} */}
      {/* /> */}
      {/* <PDFReader url={"https://firebasestorage.googleapis.com/v0/b/zomato-clone-417913.appspot.com/o/"+params.fileName+"?alt=media"}/> */}
    </div>
  );
};

export default page;
