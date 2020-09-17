import React from 'react'
import Header from './Header'
import Card from './Card'
import './Blog.css'
import BlogPost from './BlogPost'

function Blog() {
    return (
        <div className="blog">
            <Header />
            <div className="blog__content">
                <div className="container">
                    <div className="heading">
                        <h1>Featured</h1>
                    </div>
                    <div className="cards">
                        <Card />
                        <Card />
                    </div>
                </div>

                <div className="sidebar">
                    <h2>Trending</h2>
                    <div className="blogpost">
                        <BlogPost
                        heading="Kanye West and Sneakers"
                        para="Cause it's Louis VUitton Don Night"
                        username="@kanyewest"
                        time="5 min ago "
                        views=". 5 views"
                        />

                        <BlogPost
                        heading="Influence of Sneakers"
                        para="back to the Nokia 3310 era, back
                        then they were an 'accessory'"
                        username="@kanyewest"
                        time="5 feb "
                        views=". 150 views"
                        />

                        <BlogPost
                        heading="Yeezy Sneak Peak"
                        para="A look at the revolutionary Sneakers"
                        username="@kanyewest"
                        time="1 jan "
                        views=". 230 views"
                        />
                    </div>
                </div>
            
            </div>
            

            
        </div>
    )
}

export default Blog
