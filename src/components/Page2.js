import img from "../assets/images/IMG_4016.JPG";
import img2 from "../assets/images/IMG_4016-removebg-preview.png"
import img3 from "../assets/images/IMG_4016-bg.png"

function Page2() {
  return (
    <div>
      <div class="content">
        <div class="d-flex">
          <div class="col-md-6 col-lg-6 d-flex">
            <div class="img-about img d-flex align-items-stretch">
              <div class="overlay"></div>
              <div
                class="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(" + img + ")" }}
              ></div>
            </div>
          </div>

          <div class="col-md-6 col-lg-6 pl-md-5 py-5 px-5">
            <div class="row justify-content-start pb-3">
              <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                {/* <h1 class="big">About</h1> */}
                <h2
                  class="mb-4"
                  style={{ fontSize: "50px", fontWeight: "700" }}
                >
                  About Me
                </h2>
                <p>
                  A Software Engineer with an excellent problem-solving skills
                  and ability to perform well in a team.
                </p>
                <ul class="about-me mt-4 px-md-0 px-2">
                  <li class="d-flex">
                    <span>Name:</span> <span>Phalgun Mittal</span>
                  </li>
                  <li class="d-flex">
                    <span>Date of birth:</span> <span>June 02, 1999</span>
                  </li>
                  <li class="d-flex">
                    <span>Address:</span>{" "}
                    <span>Baddi, Himachal Pradesh, India</span>
                  </li>
                  <li class="d-flex">
                    <span>Zip code:</span> <span>173205</span>
                  </li>
                  <li class="d-flex">
                    <span>Email:</span> <span>phalgun99@gmail.com</span>
                  </li>
                  <li class="d-flex">
                    <span>Phone: </span> <span>+91-7018156589</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex mt-md-3">
              <div class="text">
                <p class="mb-4">
                  {/* <span class="number" data-number="120">120</span> */}
                  <span>Have a look at my resume!</span>
                </p>
                <p>
                  <a href="#" class="btn btn-primary py-3 px-3">
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
