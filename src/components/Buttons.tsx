import { useCount } from "../customHooks/useCount"

export default function Buttons() {
    const [greenCount,incremetGreen] = useCount();
    const [blueCount,incremetBlue] = useCount();
  return (
    <div>
        <div>green count: {greenCount}</div>
        <div>blue count: {blueCount}</div>
        <button style={{backgroundColor:"green"}} onClick={() => incremetGreen()}>
            green button
        </button>
        <button style={{backgroundColor:"blue"}} onClick={() => incremetBlue()}>
            blue button
        </button>
    </div>
  )
}
