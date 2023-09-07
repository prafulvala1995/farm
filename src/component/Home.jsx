import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div>
        <Header />
        {/* ----------Photo Section----------- */}
        <div className='bgImg'>
          <Container>
            <div className='p-5'>
              <div className='photp-pad'>
                <h1 className='text-white p-1'> POULTRY <br /> PERFORMANCE &  <br />PRODUCTIVITY <br /> CHALLENGES </h1>
                <p className='text-white'>We make it a priority to offer flexible services to <br /> accommodate your needs.</p>
                <button className='btn-white '>READ MORE</button>
              </div>
            </div>


          </Container>
        </div>
        <div className='container '>
          <div className='padd d-flex margin '>
            <div className='width start'>
              <h3 className='font'>Quality Feeds Made OnYour Farm</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
              <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              <button className='d-flex coll'><img className='' src="/assets/images/asset14.webp"></img>
                <p className='btn-col'>We Have 35 Years Experience  <br></br>
                  READ MORE
                </p>
              </button>
            </div>
            <div className='width'>
              <img className='m-5' width={500} src="/assets/images/asset15.webp"></img>
            </div>

          </div>
        </div>

        {/* ------------Section Two ----------- */}

        <div className='d-flex'>
          <div className='start width '>
            <div className='gap d-flex'>
              <img className='width' src="/assets/images/asset16.webp"></img>
              <img className='width' src="/assets/images/asset17.webp"></img>
            </div>
            <div className=''>
              <img className='' width='102%' src="/assets/images/asset18.webp"></img>
            </div>
          </div>
          <div className='start sec-margin width'>
            <div className='p-5 bac-col height'>
              <h2>Diversified Businesses</h2>
              <p>it is a long Established fact that a reader will be Distractd by the
              </p>
              <h4><img src="/assets/images/asset50.webp"></img> Alternative Eggs</h4>
              <h4><img src="/assets/images/asset50.webp"></img> Poultry Cages</h4>
              <h4><img src="/assets/images/asset50.webp"></img> Breeder Management</h4>
              <h4><img src="/assets/images/asset50.webp"></img> Poultry Climate</h4>
              <h4><img src="/assets/images/asset50.webp"></img> Residue Treatment</h4>
              <h4><img src="/assets/images/asset50.webp"></img> Exhaust air Treatmen</h4>
            </div>
            <div className='m-2 align-end '>
              <img className='width' src="/assets/images/asset16.webp"></img>
              <img className='width' src="/assets/images/asset17.webp"></img>
            </div>
          </div>
        </div>

        {/* ---------Section Three------------ */}
        <div>
          <Container className=''>
            <Row className='start m-3'>
              <Col>
                <h2 className='dark'>Poultry Products</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
              </Col>
              <Col className='m-3'>
                <div className='justify'>
                  <button className='buton m-2'><img src="/assets/images/asset8.webp"></img></button>
                  <button className='buton'><img src="/assets/images/asset19.webp"></img></button>
                </div>
              </Col>
            </Row>
            <Row className='m-3 gap-3'>
              <Col className='col-pink'>
                <div className='img-align'>
                  <img className='m-5' height="150" src="/assets/images/asset20.webp"></img>
                  <h5 className='col-blak'>White & Brown Eggs</h5>
                  <p className='col-red1'>$ 40</p>
                </div>
              </Col>
              <Col className='col-pink'>
                <div>
                  <img className='m-5' height="150" src="/assets/images/asset22.webp"></img>
                  <h5 className='col-blak'>Little Chicks</h5>
                  <p className='col-red1'>$ 40</p>
                </div>
              </Col>
              <Col className='col-pink'>
                <div>
                  <img className='m-5 marjin' height="150" src="/assets/images/asset23.webp"></img>
                  <h5 className='col-blak'>Bovans Browns</h5>
                  <p className='col-red1'>$ 40</p>
                </div>
              </Col>
            </Row>
            <button className='butn1'>VIEW ALL< img className='m-2' height="13" src="/assets/images/asset8.webp"></img></button>
          </Container>
        </div>
        {/* ---------Section Four------------ */}

        <div>
          <Container className='start'>
            <Row className='start m-3 p-5 bgcol-red'>
              <Col className='col-white'>
                <img className='radious' width="" src="/assets/images/asset25.webp"></img>
                <h5 className='height1'>Healthy Chicken</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
              <Col className='col-white'>
                <img className='radious' src="/assets/images/asset26.webp"></img>
                <h5 className='height1'>Healthy Chicken</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
              <Col className='col-white'>
                <img className='radious' src="/assets/images/asset27.webp"></img>
                <h5 className='height1'>Healthy Chicken</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
              <Col className='col-white'>
                <img className='radious' src="/assets/images/asset28.webp"></img>
                <h5 className='height1'>Healthy Chicken</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* ---------Section Five------------ */}
        <div>
          <Container className=''>
            <Row className='start m-3'>
              <Col>
                <h2 className='dark'>Related Products</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
              </Col>
              <Col className='m-3'>
                <div className='justify'>
                  <button className='buton m-2'><img src="/assets/images/asset8.webp"></img></button>
                  <button className='buton'><img src="/assets/images/asset19.webp"></img></button>
                </div>
              </Col>
            </Row>
            <Row className='m-3 gap-3'>
              <Col className='d-flex'>
                <div className='photo-pink'>
                  <img className='m-5' height="150" src="/assets/images/asset29.webp"></img>
                </div>
                <div className=''>
                  <h5 className='col-blak'>ACTIGEN</h5>
                  <p className=''>Actigen provides a cost-effective means of maintaining gut health and integrity to support
                    overall performance.</p>
                  <p>Read More </p>
                </div>
              </Col>
              <Col className='d-flex'>
                <div className='photo-pink'>
                  <img className='m-5' height="150" src="/assets/images/asset30.webp"></img>
                </div>
                <div className=''>
                  <h5 className='col-blak'>BIOPLEX</h5>
                  <p className=''>Bioplex offers a range of trace minerals that provide mineral nutrition in a form as close to nature as possible.</p>
                  <p>Read More </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          {/* ---------Section Six------------ */}
          <Row className='start m-2'>
            <Col className='col-gren container start endd'>
              <div className='text-center'>
                <img height="180" src="/assets/images/asset31.webp"></img>
                <h2 className='col-white'>Layer Breeders</h2>
                <p className='col-white'>The Hy-Line W-80 India & The Hy-Line Brown are robust and persistent<br></br>
                  egg layers ideally suited for the consumer market.</p>
                <button className='btn-white'>Read More< img className='m-2' height="13" src="/assets/images/asset13.webp"></img></button>
              </div>
            </Col>
            <Col className='col-red'>
              <div className='text-center start endd'>
                <img height="180" src="/assets/images/asset32.webp"></img>
                <h2 className='col-white'>Broiler Breeders</h2>
                <p className='col-white p-2'>The Ross AP95 is a fast growing bird and feed efficient<br></br>
                  broiler with good meat yield.</p>
                <button className='btn-white'>Read More< img className='m-2' height="13" src="/assets/images/asset13.webp"></img></button>
              </div>
            </Col>
          </Row>

          {/* ---------Section Six------------ */}
          <Row >
            <div className='padziro' >
              <div className='start text-center'>
                <h2 className='txt-dark'>Gallery Of Our Poultry Farm</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page <br></br>
                  when looking at its layout. The point of using Lorem Ipsum</p>
              </div>
            </div>
          </Row>
          <Row className='padziro'>
            <Col><img height="330" src="/assets/images/asset36.webp"></img></Col>
            <Col><img height="330" src="/assets/images/asset37.webp"></img></Col>
            <Col><img height="330" src="/assets/images/asset5.webp"></img></Col>
          </Row>
          {/* ---------Section World------------ */}

        </div>

        {/* ---------Section World------------ */}
        <Container>
          <Row>
            <div className=''>
              <div className='start endd'>
                <img className='img-fit' height="" width="" src="/assets/images/asset60.svg"></img>
              </div>
            </div>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  )
}

export default Home
