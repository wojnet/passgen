import React from 'react'

const Password = ({ value }) => {

    const [isHidden, setIsHidden] = React.useState(true)

    const eyeClick = () => {
        setIsHidden(prev => !prev)
    }

    return (
        <div className='Password'>
            { value !== "" && <div className='Password--eye' onClick={eyeClick}></div> }
            <input readOnly type={isHidden === true ? "password" : "text"} value={value} />
        </div>
    )
}

export default Password
