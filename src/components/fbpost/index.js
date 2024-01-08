import { useState } from 'react'
import phone from '../../Assets/smartphone.png'
import './index.css'
import FbImageLibrary from 'react-fb-image-grid'
import like from '../../Assets/thumbs-up.png'
import comment from '../../Assets/message-circle.png'
import share from '../../Assets/share-2.png'


function FBPost(props) {



    return <div className='div1'>
        <ul>
            <li><img className='phone-logo' src={phone} /></li>
            <li className='nav-title'>{props.brand}
                <br />
                <span className='title-date'>Jan 6, 2024.     </span>
            </li>
        </ul>
        <div className='div2'><p> <strong>Name</strong> : {props.title} <br /> <strong>Price</strong> : {props.price} $ <br /> {props.description}</p></div>
        <div><FbImageLibrary renderOverlay ={() => <h4>Preview</h4>} images={props.images} /></div>
        <br/>
        <div className='div3'><button className='btns like-button'><span className='emoji'></span><img className='imgs' src={like}/> Like </button>
            <button className='btns'><img className='imgs' src={comment}/> Comment</button>
            <button className='btns'><img className='imgs' src={share}/> Share</button></div>





    </div>






}
export default FBPost;