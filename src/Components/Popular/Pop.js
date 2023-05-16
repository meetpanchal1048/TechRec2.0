import React from 'react'
import img1 from './images/iqoo-z7-5g.jpg'
import img2 from './images/google-pixel-6a.jpg'
import img3 from './images/poco-x4-pro-5g-8gb-r1.jpg'
import img4 from './images/realme-c55-8gb-ram-1.jpg'
import img5 from './images/vivo-v271.jpg'
import img6 from './images/samsung-galaxy-s23-u.jpg'
import './PopApp.css'

const Pop = () => {
    return (
        <>

            <div className="pop-main">

                <div class="card-group">
                    <div class="row row-cols-1 row-cols-md-4 g-5">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div className="pop-top">
                                        <h2>Popular Mobile</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">iQOO Z7</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Pixel 6A</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Poco X4</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img4} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Realme c55</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img5} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Vivo v27</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img6} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">S23 Ultra</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div className="pop-top">
                                        <p><a href="https://meetpanchal1048.github.io/techrec2blgs.github.io/">View All →</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div className="pop-top">
                                        <p><a href="https://meetpanchal1048.github.io/techrec2blgs.github.io/#config">Configure →</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pop