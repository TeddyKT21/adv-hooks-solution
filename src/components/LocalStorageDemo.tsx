import { useLocalStorage } from "../customHooks/useLocalStorage"
import { useState } from 'react'

export default function LocalStorageDemo() {
    const [save,get,remove] = useLocalStorage();
    const [text,setText] = useState('');

  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() =>{
            save('key',text)
        }}>save</button>
        <button onClick={() => remove('key')}>delete</button>
        <div>{get('key')}</div>
    </div>
  )
}
