import Carousel from 'react-bootstrap/Carousel';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { ModalFooter } from 'react-bootstrap';
import dhanush  from "../image/dhanush.jpg";
import vinyas  from "../image/vinyas.jpg";
import rajan  from "../image/rajan.jpg";
import sailaja  from "../image/sailaja.jpg";
import PP  from "../image/PP.jpg";
import pic from "../image/pic.png";
import section from "../image/section.png";
import rout from "../image/rout.png";
import service from "../image/service.png";





function HomeImg(){
    return(
        <>

        <h1>Tours and Travels</h1>

         <section id="testimonials" style={{ paddingLeft: '15%', paddingRight: '15%', paddingBottom: '5rem', marginTop:'24px' }}>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <p className="lead" style={{fontWeight:"bold", fontVariant:"petite-caps", fontSize:"50px", color:"#0066cc", textAlign:"center"}}>
  Welcome to Tour and Travel
</p>

                    <div class="carousel-inner">
                        
                        <div class="carousel-item active">
                            <img class="d-block w-100 testimonial-image" style={{ height: '25rem' }} src="https://www.toursbylocals.com/images/homepage/diagonalbanner.jpg" />
                        </div>
                        <div class="carousel-item ">
                            <img class="d-block w-100 testimonial-image" style={{ height: '25rem' }} src="https://preview.colorlib.com/theme/hepta/images/hero_1.jpg	" />
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
   

           <div class="col">
    <div class="section-intro text-center pb-90px">

      <img src={section} width="54px" height="50px"/> <br/>
      <br/>


    <h1 style={{fontFamily:"Roboto Condensed"}}>Our Popular Services</h1>
    <br/>
    <br/>
    <br/>
    </div>
    </div>
    <div class="col">
    </div>
 

<div class="container text-center">
  <div class="row align-items-start">
    <div class="col"  style={{background:"#f8f8ff"}}>
    <img src={service} class="card-img-top" alt="..." style={{width:"167px"}} />
    <div class="card-body" >
      <br/>
      <br/>
      <h2 class="card-title" style={{fontFamily:"Roboto Condensed"}}>Hotel Booking</h2>
      <br/>
    <p class="card-text">Book your dream stay with ease Find the perfect hotel for your next adventure</p>
  
  </div>
    </div>
    <div class="col">
    <img src={rout} class="card-img-top" alt="..." style={{width:"260px"}} />
    <div class="card-body">
    <br/>
    
    <h2 class="card-title" style={{fontFamily:"Roboto Condensed"}}>View Routes</h2>
    <br/>
    <p class="card-text">Discover new paths and stunning vistas with our View Routes The perfect way to explore the beauty of the world around you.</p>
  
  </div>
    </div>
    <div class="col"  style={{background:"#f8f8ff"}}>
    <img src={pic} class="card-img-top" alt="..." style={{width:"260px"}} />
    <div class="card-body">
      <br/>
      <br/>
    <h2 class="card-title" style={{fontFamily:"Roboto Condensed"}}>Cab Booking</h2>
    <br/>
    <p class="card-text">Ride in Comfort and Style with Easy Cab Booking</p>
    
  </div>
    </div>
  </div>
</div>




        
    
            <div className="container p-4" style={{ backgroundColor: '#d7f3fa', marginTop: '1.75rem' }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center mb-5">
            <h1 className="display-4">About Us</h1>
            <hr />
            <p className="lead" >
              Welcome to Tour and Travel , Looking for your next great adventure? We can help. Here is a sampling of our most popular destinations. Experience private tours with authentic local flavour.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="mb-4 lead">
              We specialize in the following package categories:
            </p>
            <ul className="list-unstyled mb-5 lead" >
              <li>Cab</li>
              <li>Route</li>
              <li>Hotel</li>
             
            </ul>
            <p className="mb-5 lead">
              Our application is currently in development, and we're constantly expanding our package range to better serve your needs.
             
            </p>
            <p className="mb-4 lead">
              Our React front-end was designed with a focus on user experience, and we leveraged the latest in web development technology to create a fast, reliable application that looks great on any device.
              On the back-end, we used Spring Boot to power our server-side API, allowing us to quickly process and serve your requests.
            </p>
          </div>
        </div>
      </div>


      <section class="team text-center py-6" style={{paddingLeft:"250px"}}>
        <div class="container">
          <div class="header my-5" style={{paddingRight:"295px"}}>
            <h1>Meet Our Team </h1>
            <p class="text-muted">Meet and Greet our Team Members</p>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-2">
              <div class="img-block mb-5">
                <img src={vinyas}
                 class="img-fluid  img-thumbnail rounded-circle" alt="vinyas" />
                <div class="content mt-2">
                  <h4>Vinyas N</h4>
                  <p class="text-muted">Developer</p>
                  <a
                    href="https://www.linkedin.com/in/vinyas-n-137035195"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-circle mt-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 ">
              <div class="img-block mb-5">
                <img src={dhanush} class="img-fluid  img-thumbnail rounded-circle" alt="image1" style={{width:"169px"}} /> 
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
            <div class="col-md-6 col-lg-2">
              <div class="img-block mb-5">
                 <img src={rajan} class="img-fluid  img-thumbnail rounded-circle" alt="image" style={{width:"181px"}} />
                <div class="content mt-2">
                  <h4>Rajan Singh</h4>
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
            <div class="col-md-6 col-lg-2">
              <div class="img-block mb-5">
                 <img src={sailaja} class="img-fluid  img-thumbnail rounded-circle" alt="image" style={{width:"169px"}} /> 
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
            <div class="col-md-6 col-lg-2">
              <div class="img-block mb-5">
                 <img src={PP} class="img-fluid  img-thumbnail rounded-circle" alt="image"  style={{width:"169px  "}}/> 
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