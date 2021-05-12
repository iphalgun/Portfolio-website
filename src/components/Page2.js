import img from '../assets/images/IMG_4016.JPG';

function Page2(){
    return(
        <div>
            <div class="content">
                <div class="d-flex">
                    <div class="col-md-6 col-lg-6 d-flex">
                        <div class="img-about img d-flex align-items-stretch">
                            <div class="img d-flex align-self-stretch align-items-center" style={{backgroundImage: 'url('+img+')'}}>
                                {/* <img src={{img}}></img> */}
                            </div>
                        </div>
                    {/* Hi */}
                    </div>
                    <div class="col-md-6 col-lg-6 pl-md-5 py-5">
                        <div class="row justify-content-start pb-3">

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2