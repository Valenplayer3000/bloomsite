import QuaverStats from "../../components/quaver";
import { useParams } from "react-router-dom";

const Quaverfy = () => {
  let { id, mode } = useParams();
  return (
    <div
      style={{
        marginTop: "300px",
      }}
    >
      <QuaverStats
        id={id}
        mode={mode}
      />
    </div>
  );
};

export default Quaverfy;
