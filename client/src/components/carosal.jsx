import React from 'react'

const Carosal = () => {
  return (
<>
<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://th.bing.com/th/id/OIP.fFqJLIy0XVeIqPANH0HFEQHaFj?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." style={{width: '100%',
  width: 'auto   9',
  height: '70vh',
  verticalAlign: 'middle',
  border: '0',
  msInterpolationMode: 'bicubic'}}/>
      <div class="carousel-caption d-none d-md-block" style={{color:'#fff'}}>
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://th.bing.com/th/id/OIP.ElNenxoF5tAdRzcXzCLEtAHaEK?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." style={{width: '100%',
  width: 'auto   9',
  height: '70vh',
  verticalAlign: 'middle',
  border: '0',
  msInterpolationMode: 'bicubic'}}/>
      <div class="carousel-caption d-none d-md-block" style={{color:'#fff'}}>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHwwfDB8fHww" class="d-block w-100" alt="..." style={{width: '100%',
  width: 'auto   9',
  height: '70vh',
  verticalAlign: 'middle',
  border: '0',
  msInterpolationMode: 'bicubic'}}/>
      <div class="carousel-caption d-none d-md-block" style={{color:'#fff'}}>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</> 
 )
}

export default Carosal