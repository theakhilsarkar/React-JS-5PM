import React from 'react'
import FormGIF from '../../assets/form.gif'

export default function Contact() {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="mb-5">
                    <h2 className="text-center text-primary">Contact Us</h2>
                </div>
                <div className="row">
                    <div className='col-6 d-flex flex-column justify-content-center'>
                        <div>
                            <h5>Address</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, sequi?</p>
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <p>+91 98254 86060</p>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <p>rw8.akhil@gmail.com</p>
                        </div>
                        <div>
                            <h5>Time</h5>
                            <p>Monday to Friday <br /> 09:00AM to 07:00PM</p>
                        </div>
                        <div>

                            <p>Contact us for your all type of digital problem to digital solution</p>
                        </div>
                    </div>
                    <div className='col-6 d-flex flex-column align-content-center'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className='container border border-1 border-primary my-5'></div> */}
        </div>
    )
}


// name
// phone
// email
// query