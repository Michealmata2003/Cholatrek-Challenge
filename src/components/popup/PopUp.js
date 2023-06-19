import React from 'react';
import './Popup.css';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';


const PopUp = () => {
    const navigate = useNavigate()

    const handleReturn = () =>{
        navigate('/')

    }

    return (
        <div className='full-pop'>
            <div className='container'>
                <div className='hero'>
                    <div className='popup'>
                        <h2>Form has been Submitted Successfully!</h2>
                        <h6>please check your Email to confirm the Details.</h6>
                        <Button onClick={handleReturn} text={'Click Okay'} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp