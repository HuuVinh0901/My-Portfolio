import React, { useState, useEffect } from 'react';
import { BsFillSendFill } from "react-icons/bs";

const Navbar = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarStyle, setNavbarStyle] = useState({ transform: "translateY(0)", backgroundColor: "transparent" });

    useEffect(() => {
        const handleScroll = () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Đang cuộn xuống
                setNavbarStyle({ transform: "translateY(-100%)", backgroundColor: "transparent" }); // Ẩn navbar
            } else {
                // Đang cuộn lên
                setNavbarStyle({ transform: "translateY(0)", background:'rgba(128, 128, 128, 0.6)',
                    background:'linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(128, 128, 128, 0.7))',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backdropFilter:'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius:'3vw',width:'50%',marginLeft:'100vw'
                 }); // Hiển thị navbar
            }

            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Đảm bảo không âm
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <div className="header_menu" style={navbarStyle}>
            <ul>
                <a href="#home">
                    <li className="hover:scale-110">Home</li>
                </a>
                <a href="#about">
                    <li className="hover:scale-110">About me</li>
                </a>
                <a href="#projects">
                    <li className="hover:scale-110">Projects</li>
                </a>
                <a href="#contact">
                    <li className="hover:scale-110">
                        Contact 
                        <BsFillSendFill style={{ marginLeft: '1vw', fontSize: '1.5vw' }} />
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default Navbar;