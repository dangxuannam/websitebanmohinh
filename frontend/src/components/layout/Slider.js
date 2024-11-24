import React, { Component } from 'react';

class Sliderr extends Component {
    render() {
        return (

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://theme.hstatic.net/1000231532/1001284523/14/slideshow_1.jpg?v=94" height={500} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://theme.hstatic.net/1000231532/1001284523/14/slideshow_2.jpg?v=94" height={500} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://theme.hstatic.net/1000231532/1001284523/14/slideshow_3.jpg?v=94" height={500} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://theme.hstatic.net/1000231532/1001284523/14/slideshow_4.jpg?v=94" height={500} alt="Four slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://theme.hstatic.net/1000231532/1001284523/14/slideshow_5.jpg?v=94" height={500} alt="Four slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Sliderr;