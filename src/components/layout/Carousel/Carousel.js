import Img1 from "./Carousel-img/Carousel-1.jpg"
import Img2 from "./Carousel-img/Carousel-2.jpg"
import Img3 from "./Carousel-img/Carousel-3.jpg"
import Img4 from "./Carousel-img/Carousel-4.jpg"
export default function Carousel() {
    return (
        <div>
            <div id="demo" class="carousel slide p-5" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Img1} alt="Los Angeles" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src={Img2} alt="Chicago" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src={Img3} alt="New York" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src={Img4} alt="New York" class="d-block w-100" />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}