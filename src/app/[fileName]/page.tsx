import { Metadata } from "next";
import PDFViewer from "../components/PDFViewer"
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

const page = async ({ params }: Props) => {
  return (
    <div className="page">
      <PDFViewer fileName={params.fileName} />
    </div>
  );
};

export default page;
