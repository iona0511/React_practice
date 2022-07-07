import React from 'react';
import './Card.css';

function Card(){    
        return(
            <div className='course_card'>
                <div className='course_card_top'>
                    <div className='course_card_level'>1</div>
                </div>
                <div className='course_card_down'>
                    <div className='course_card_txt'>
                        <p style={{ 'fontWeight':'bolder'}}>2</p>
                        <p className='font-min' style={{'color':'#898787'}}>3</p>
                        <div className='d-flex course_card_price' >
                            <p style={{ 'fontSize': '0.75rem','letterSpacing': '0.07rem'}}>NT$</p>
                            <p style={{ 'fontSize': '1.0625rem','letterSpacing': '0.07rem'}}>4</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        }



export default Card;