import { useCount } from "../customHooks/useCount";

export default function MyDiv() {
  const [enterCount, incremet] = useCount();
  return (
    <div>
      <div
        style={{ backgroundColor: "lightgray", width: "50px", height: "50px" }}
        onMouseEnter={() =>incremet()}
      >
        count:{enterCount}
      </div>
    </div>
  );
}
