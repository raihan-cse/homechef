import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialLinks() {
    return (
        <>
            <div className="social-links">
                <a href="https://www.twitter.com/" className="twitter" target="_blank"></a>
                <a href="https://www.facebook.com/" className="facebook" target="_blank"></a>
                <a href="https://www.linkedin.com/" className="linkedIn" target="_blank"></a>
                <a href="https://www.instagram.com/" className="instagram" target="_blank"></a>
                {/* <Link to='https://www.facebook.com/' className="twitter" target="_blank"></Link>
                <Link to='facebook.com' className="facebook" target="_blank"></Link>
                <Link to='facebook.com' className="linkedIn" target="_blank"></Link>
                <Link to='facebook.com' className="instagram" target="_blank"></Link> */}
            </div>
        </>
    )
}
