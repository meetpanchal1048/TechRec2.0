import React from 'react'
import './GuideApp.css'

const Guide = () => {
    return (
        <>

            <div className="guide-main" id='tips'>
                <div className="guide-title">
                    Remember this point while buying Mobile
                </div>
                <div class="card-group">
                    <div class="row row-cols-1 row-cols-md-4 g-5">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Brand</h5>
                                    <p class="card-text">More popular brand has more service centre and provide better service.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Price Difference</h5>
                                    <p class="card-text">There might be big difference while buying mobile in online & <br/>offline.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Choose as per requirement</h5>
                                    <p class="card-text">Most people buy phones blindly without thinking about usage and need.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Scammer</h5>
                                    <p class="card-text">Buying phone online is quite profitable but also its risky so stay aware of scammer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Ram & Rom</h5>
                                    <p class="card-text">Phones with better & more RR is helpfull in long-run, improve overall performance.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Processor</h5>
                                    <p class="card-text">Processor plays important role in mobile performance over short & long run both.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">5G Bands</h5>
                                    <p class="card-text">This days everyone wants 5G, so while buying 5G phone check it has all indian bands.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Display</h5>
                                    <p class="card-text">There are wide range of displays with different resolution but most prefered is Amoled.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Guide