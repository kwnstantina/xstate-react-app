import React from 'react'
import './staticFooter.css';

const StaticFooter=() =>{
    return (
    	<footer className="footer__distributed">
           
			<div className="footer__right">
				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>
			</div>
            <div className="footer__left">
				<p>XState & React, 2021</p>
			</div>

			
		</footer>
    )
}


export default StaticFooter;
