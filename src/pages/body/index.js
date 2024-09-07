import { memo } from "react";
import "./style.scss";
import TypingEffect from '../../components/TypingEffect';
import IUHLogo from "../../assets/img/Logo-IUH-removebg.png";
import Repositories from "../../api/github.js";
import { BsArrowRight } from "react-icons/bs";
const Body = () => {
    return (
        <>


            <div id="about" className="sub_about">
                <div className="sub_title">
                    <p>Hola, I'm Huu Vinh</p>
                </div>

            </div>
            <div className="sub">
                <div className="sub_content">
                    <p>I'm 20 years old and studying Software Engineering at the Industrial University of Ho Chi Minh
                        City in Viet Nam. I aspire to advance in web programming, driven by a relentless pursuit of knowledge
                        andexposure to emerging technologies. Embracing the belief that one's limits are boundless, Icontinuous learning and exploration.
                        In the future, I contemplate delving into AI or blockchain
                        in order to staying abreast of evolving trends within the information technology sector. </p>
                </div>

            </div>
            <div>
                <TypingEffect />
            </div>
            <div className="job">
                <p>Developer</p>
            </div>
            <div className="timeline">
                <div className="time">
                    <p>August 2021 - Present</p>
                </div>
                <div className="activity ">

                    <a className="activity_title hover:text-slate-300" href="https://iuh.edu.vn/">
                        <img  alt="" className="logo" src={IUHLogo} />
                        <p>Industrial University of Ho Chi Minh City (IUH) - Student</p>
                    </a>


                    <div className="activity_content">
                        <p>I'm studying Sortware
                            Engineering at the Industrial
                            University of Ho Chi Minh City, with focusing on web development using Java and data
                            integration
                            on cloud platforms.</p>
                    </div>

                </div>
            </div>

            
            <div id="projects" className="repos_title">
                <p id="projects" >MY PROJECTS</p>
                <a href="https://github.com/HuuVinh0901?tab=repositories" class="flex justify-center items-center text-center hover:text-slate-300 font-extralight"
                >View all <BsArrowRight style={{ marginLeft: '1vw' }} /></a>
            </div>
            <Repositories /> 
            
        </>

    );

};
export default memo(Body);