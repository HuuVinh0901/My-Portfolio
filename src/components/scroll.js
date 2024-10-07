import React, { useState, useEffect } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";

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
                setNavbarStyle({
                    transform: "translateY(0)",
                    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15), rgba(128, 128, 128, 0.4))', // Giảm độ đậm của màu trong suốt
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    // borderRadius: '10px',
                    width: '100%',  // Phủ toàn bộ chiều ngang
                    padding: '1rem 0', // Tăng chiều cao
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    zIndex: 1000, // Đảm bảo nó nằm trên cùng
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
            <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <a href="#home">
                    <li className="hover:scale-110"><IoHomeOutline style={{ marginRight: '0.5vw' ,height:'1.5vw',width:'1.5vw'}} />Home</li>
                </a>
                <a href="#about">
                    <li className="hover:scale-110"><FaRegUser style={{ marginRight: '0.5vw' ,height:'1.5vw',width:'1.5vw'}}/>
                        About me</li>
                </a>
                <a href="#projects">
                    <li className="hover:scale-110"> <AiOutlineFundProjectionScreen style={{ marginRight: '0.5vw' ,height:'1.5vw',width:'1.5vw'}}/>Projects</li>
                </a>
                <a href="#contact">
                    <li className="hover:scale-110">
                    <MdConnectWithoutContact style={{ marginRight: '0.5vw' ,height:'1.5vw',width:'1.5vw'}}/>
                        Contact
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default Navbar;
