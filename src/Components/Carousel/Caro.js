import React from 'react'
import './CaroApp.css'
import img1 from './images/Amazon.jpg'
import img2 from './images/Everything-Apple-Croma2.jpg'
import img3 from './images/VIVO2.jpg'


const Caro = () => {
    return (
        <>

            <div className="caroo">
                <div className="caro-top">
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <a href='https://www.amazon.in/l/29657746031?pf_rd_r=4TATAM9KTJD0CV28WP71&pf_rd_p=38092c06-8179-4027-a036-b39c51f566e4&pd_rd_r=01654291-dff6-4d3a-82d5-5580c476f4f1&pd_rd_w=85jKr&pd_rd_wg=0IZBR&ref_=pd_gw_unk'><img src={img1} class="d-block w-100" alt="..." /></a>
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <a href='https://www.flipkart.com/vivo-x90-pro-legendary-black-256-gb/p/itme1bb24e62003b'><img src={img3} class="d-block w-100" alt="..." /></a>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Caro