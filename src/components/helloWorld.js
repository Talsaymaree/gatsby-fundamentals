import React from 'react'
import Image from "./image"


const HelloWorld = ({name}) => {
    const siteName = "Breaking Down a Component"

    return(
        <div>
            Hello {name}
        </div>
    )
}

export default HelloWorld