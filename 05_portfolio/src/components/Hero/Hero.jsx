import profile from '../../assets/profle.avif'
import "./Hero.css"
export const Hero = () => {
    return <>
        <div className="container d-flex flex-column align-items-center p-2">
            <div style={{ height: 200, width: 200 }} className="d-flex border border-primary border-3 rounded-circle">
                <img className='rounded-circle object-fit-cover w-100' src={profile} alt="" />
            </div>
            <div className="text-center mt-3">
                <h2 className="fs-1">Akhil Sarkar</h2>
                <p className="fs-5">Software Devloper</p>
            </div>
            <div className="d-flex gap-2">
                <i className="ri-instagram-fill fs-3 text-primary"></i>
                <i className="ri-linkedin-box-fill fs-3 text-primary"></i>
                <i className="ri-github-fill fs-3 text-primary"></i>
                <i className="ri-twitter-x-fill fs-3 text-primary"></i>

            </div>
            <div className="mt-3 px-4 text-center col-9">
                tiis. Et, rerum. Officia ullam nesciunt autem sapiente aut fuga saepe unde corrupti sit rerum iste deserunt praesentium vel explicabo optio iure, ea porro itaque exercitationem ducimus commodi id numquam minus. Quam ratione dicta, laudantium tempora laboriosam ducimus necessitatibus nulla quisquam saepe illum assumenda voluptatum perspiciatis possimus. Et architecto laborum animi? Sunt, vel blanditiis. Suscipit amet pariatur optio modi? Dolores, neque! Consequuntur quos odit nobis nam non ducimus.
            </div>
            <div className='container my-5 d-flex justify-content-evenly'>
                <div className='text-center'>
                    <h3>256+</h3>
                    <p>Projects Completed</p>
                </div>

                <div className='text-center'>
                    <h3>256+</h3>
                    <p>Projects Completed</p>
                </div>

                <div className='text-center'>
                    <h3>256+</h3>
                    <p>Projects Completed</p>
                </div>

                <div className='text-center'>
                    <h3>256+</h3>
                    <p>Projects Completed</p>
                </div>

                <div className='text-center'>
                    <h3>256+</h3>
                    <p>Projects Completed</p>
                </div>

            </div>
            <div className='container border border-1 border-primary'></div>
        </div>
    </>
}