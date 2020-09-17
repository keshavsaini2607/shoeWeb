import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className="card">
            <img src="https://media.gq.com/photos/5ad93798ceb93861adb912d8/16:9/w_2560%2Cc_limit/kanye-west-0814-GQ-FEKW01.01.jpg" alt="" />
            <div className="card__content">
                <h2>Kanye West And Sneakers</h2>
                <p>"Cause it's Louis VUitton Don Night"</p>
                <p><strong>@kanyewest</strong></p>
                <div className="lastseen">
                    <span id="time">5 min ago </span>
                    <span id="views">. 5 views</span>
                </div>
            </div>
        </div>
    )
}

export default Card
