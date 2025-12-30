import { useParams } from "react-router-dom";
import { devotionaldata } from "../data/devotionals";
import IndividualDevotional from "./individualdevotional";

const DevWrapper = () => {
  const { slug } = useParams();
  const devpage = devotionaldata.find((s) => s.slug === slug);

  if (!devpage) return <h2>Service Not Found</h2>;
  return (
    <>
      <IndividualDevotional {...devpage} />
    </>
  );
};

export default DevWrapper;
