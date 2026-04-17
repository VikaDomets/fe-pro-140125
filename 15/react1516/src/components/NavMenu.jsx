import React from 'react';
import { Link } from 'react-router'; // той самий лінк елемент але через реакт
const NavMenu = (props) => {
    let isLogin = true;
    let noLogin = <div className='ms-auto'>
    <button className="btn btn-primary">
        Login
    </button></div>
    let links = [
         {
             value:'Features',
             link:'test-link'
         },
         {
             value:'Enterprise',
             link:'test-link2'
         },
         {
             value:'Support',
             link:'test-link3'
         },
         {
             value:'Pricing',
             link:'test-link4'
         }
     ]
    const linkElements = links.map((item, index)=>{
        return <a key={index} className="me-3 py-2 link-body-emphasis text-decoration-none" href={item.link}>{item.value}</a>
    })

    if(props.isLogin){
        return (
                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        {/* <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Features</a>
                        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Enterprise</a>
                        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Support</a>
                        <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a> */}
                        {/* {linkElements} */}
                        <Link to='/' className="me-3 py-2 link-body-emphasis text-decoration-none">Home</Link>
                        <Link to='/about' className="me-3 py-2 link-body-emphasis text-decoration-none">About</Link>
                        <Link to='/info' className="me-3 py-2 link-body-emphasis text-decoration-none">Info</Link>

                    </nav>
        );        
    }
    else{
        return(
            noLogin
        )
    }

};

export default NavMenu;