import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="block1"
          src="https://teletype.in/files/78/78f4381e-9d74-42c5-9b78-827256f9cabf.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='firstslide'></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block2"
          src="https://api.azbooka.ru/upload/iblock/882/8tj93ks4bzif615lfw9alvcy9kdbdi5i.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block3"
          src="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;