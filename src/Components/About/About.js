import React from 'react'
import './AboutApp.css'

const About = () => {
    return (
        <>

            <div className="about-main">
                <h2 id='about'>About</h2>
                <p className='p-3 my-5 text-center fs-3'>Welcome to TechRec, your ultimate source for technology recommendations! Our website is designed to help you make informed decisions when it comes to purchasing technology products. We provide a variety of resources, including buying guides, product reviews, popular products, and the latest offers.</p>
                <p className='p-3 my-5 text-center fs-3'>One of our main highlights is our product configurator tool, which allows users to customize a product to their specific needs. With this tool, you can choose the specifications, features, and accessories that matter most to you, and get a product recommendation tailored to your unique requirements.</p>

                <div className="abtt-sec">
                    <div className="about-section text-center">
                        <h1 className="header">Technologies Used</h1>
                        <div className="abtt m-0 d-flex">
                            <h3 className='abt-tec'>HTML / JSX</h3>
                            <h3 className='abt-tec'>CSS</h3>
                            <h3 className='abt-tec'>JS</h3>
                            <h3 className='abt-tec'>React</h3>
                            <h3 className='abt-tec'>Bootstrap</h3>
                        </div>
                    </div>

                    <div className="about-section text-center">
                        <h1 className="header">More About Me</h1>
                        <div className="abtt m-0 d-flex">
                            <a href="https://meetpanchal1048.github.io/Portfolio_2_/">Portfolio</a>
                        </div>
                    </div>
                </div>



                <a href="#"><button className="guide-foot">↑</button></a>

            </div>

        </>
    )
}

export default About