import React from 'react';
import Whatwedo from '../../images/whatwedo.png';
import WhoweAre from '../../images/whowearee.png'

const Ourstory = () => {
    return (<>
        <div className="container-fluid lead">
            <div className="py-5 text-center">
            <span className="badge text-dark px-3 py-1" style={{backgroundColor:"#eeff41"}}>
                        OUR STORY
                    </span>
                <br />
                <br />
                <h2 className="fw-bold">We’re building a <span className='text-danger'>new generation</span> of strong, smart, and bold leaders.</h2>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card border-0">
                        <img src={Whatwedo} className="card-img-top" alt="Meet Our Team" />
                        <div className="card-body">
                            <h6 className="text-uppercase text-warning font-weight-bold">What we do</h6>
                            <p className="card-text">
                                We equip girls to reach their full potential while advocating with and for them to end inequity and discrimination.
                            </p>
                            <a href="#our-team" className="btn btn-danger">What We Do &rarr;</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                </div>
                <div className="col-md-4 mb-4">
                    <div className="card border-0">
                        <img src={WhoweAre} className="card-img-top" alt="Annual Reports" />
                        <div className="card-body">
                            <h6 className="text-uppercase text-warning font-weight-bold">Who we are</h6>
                            <p className="card-text">
                                We're the longest-running girls’ leadership program, evolving with girls to meet the challenges and opportunities of the day.
                            </p>
                            <a href="#our-financials" className="btn btn-danger">Who We Are &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
export default Ourstory;