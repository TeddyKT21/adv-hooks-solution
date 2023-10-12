import { useState } from "react";

export const useCount = ():[number,()=>void,()=>void] =>{
    const [count, setCount] = useState(0);
    const incremet = () => setCount(count + 1);
    const decremet = () => setCount(count - 1);
    return [count, incremet,decremet]
}