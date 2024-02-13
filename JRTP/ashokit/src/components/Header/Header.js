import React from "react" 
import "./Header.css"

const Header = () => {
    return(
        <div classname="header">
            <div classname="logo">
                <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://file-uploads.teachablecdn.com/5db8a999d2c343198e4b71d8213be5a1/8b60803404434a5bab890b25a7b1879b" />
            </div>
            <div classname="list">
               <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Courses</li>
                    <li>Contact US</li>
               </ul>
            </div>
        </div>
    );
}

export default Header;