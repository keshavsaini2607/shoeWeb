import React from 'react'
import './BlogPost.css'

function BlogPost({heading, para, username, time, views}) {
    return (
        <div className="blogpost">
            <h2>{heading}</h2>
            <p>{para}</p>
            <p><strong>{username}</strong></p>
            <div className="lastseen">
                <span id="time">{time}</span>
                <span id="views">{views}</span>
            </div>
        </div>
    )
}

export default BlogPost
