import react, { useState } from 'react'

function Checkbox () {
    const [checked, setChecked] = useState(false)
    return(
        <input 
        type="checkbox"
        onChange={e => setChecked(e.target.checked)} />
    )
}

export default Checkbox