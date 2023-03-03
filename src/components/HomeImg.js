import Carousel from 'react-bootstrap/Carousel';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { ModalFooter } from 'react-bootstrap';

function HomeImg(){
    return(
        <>
         <section id="testimonials" style={{ paddingLeft: '15%', paddingRight: '15%', paddingBottom: '5rem', marginTop:'88px' }}>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 testimonial-image" style={{ height: '25rem' }} src="	https://www.toursbylocals.com/images/homepage/diagonalbanner.jpg" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 testimonial-image" style={{ height: '25rem' }} src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 testimonial-image" style={{ height: '25rem' }} src="https://mobirise.com/extensions/commercem4/assets/images/gallery02.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section> 
        <CardHeader />
           
    
            <div className="container p-4" style={{ backgroundColor: '#d7f3fa', marginTop: '1.75rem' }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center mb-5">
            <h1 className="display-4">About Us</h1>
            <hr />
            <p className="lead">
              Welcome to Tour and Travel , Looking for your next great adventure? We can help. Here is a sampling of our most popular destinations. Experience private tours with authentic local flavour.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="mb-4">
              We specialize in the following package categories:
            </p>
            <ul className="list-unstyled mb-5">
              <li>cab</li>
              <li>route</li>
              <li>stay</li>
             
            </ul>
            <p className="mb-5">
              Our application is currently in development, and we're constantly expanding our package range to better serve your needs.
             
            </p>
            <p className="mb-4">
              Our React front-end was designed with a focus on user experience, and we leveraged the latest in web development technology to create a fast, reliable application that looks great on any device.
              On the back-end, we used Spring Boot to power our server-side API, allowing us to quickly process and serve your requests.
            </p>
          </div>
        </div>
      </div>


      <section class="team text-center py-5">
        <div class="container">
          <div class="header my-5">
            <h1>Meet our Team </h1>
            <p class="text-muted">Meet and Greet our Team Members</p>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="img-block mb-5">
                {/* <img src={"C:\Users\D109\Documents\react\ecommerceapp\src\images\Rahul.jpg"}
                 class="img-fluid  img-thumbnail rounded-circle" alt="image1" /> */}
                <div class="content mt-2">
                  <h4>Vinyas N</h4>
                  <p class="text-muted">Developer</p>
                  <a
                    href="https://www.linkedin.com/in/swarnim-rajput-4340231b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-circle mt-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 ">
              <div class="img-block mb-5">
                {/* <img src={""} class="img-fluid  img-thumbnail rounded-circle" alt="image1" /> */}
                <div class="content mt-2">
                  <h4>Dhanush</h4>
                  <p class="text-muted">Developer</p>
                  <a
                    href="https://www.linkedin.com/in/utsab-mukherjee-9115241b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-circle mt-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="img-block mb-5">
                {/* <img src={""} class="img-fluid  img-thumbnail rounded-circle" alt="image" /> */}
                <div class="content mt-2">
                  <h4>Rajan Kumar Singh</h4>
                  <p class="text-muted">Developer</p>
                  <a
                    href="https://www.linkedin.com/in/developer3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-circle mt-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="img-block mb-5">
                {/* <img src={""} class="img-fluid  img-thumbnail rounded-circle" alt="image" /> */}
                <div class="content mt-2">
                  <h4>Sailaja Somu</h4>
                  <p class="text-muted">Developer</p>
                  <a
                    href="https://www.linkedin.com/in/developer4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-circle mt-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="img-block mb-5">
                {/* <img src={""} class="img-fluid  img-thumbnail rounded-circle" alt="image" /> */}
                <div class="content mt-2">
                  <h4>Hasita Yadla</h4>
                  <p class="text-muted">Developer</p>
                  <a
                    href="https://www.linkedin.com/in/developer4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-circle mt-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            <ModalFooter />
        </>

    );
}

export default HomeImg;