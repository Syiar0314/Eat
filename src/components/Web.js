import React from 'react'
import AboutImage from './images/about-photo.jpg';
import Food1 from './images/food1.jpg';
import Food2 from './images/food2.jpg';
import Food3 from './images/food3.jpg';
import Food4 from './images/food-menu1.jpg'
import Food5 from './images/food-menu2.jpg'
import Food6 from './images/food-menu3.jpg'
import Food7 from './images/food-menu5.jpg'
import Food8 from './images/food-menu6.jpg'
import Food9 from './images/food-menu4.jpg'
import Male from './images/male-photo1.jpg'
import Male1 from './images/male-photo2.jpg'
import Male2 from './images/male-photo3.jpg'
import Res from './images/restraunt-image.jpg'
export default function Web() {
  return (
    <div>
       <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-item">
                <li><a href="#showcase">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#food">Category</a></li>
                <li><a href="#food-menu">Menu</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <h1 class="logo">SA</h1>

        </div>
    </nav>


    <section class="showcase-area" id="showcase">
        <div class="showcase-container">
            <h1 class="main-title">Eat With US</h1>
            <p> Eat Healty Food, it is good for your health</p>
            <a href="food-menu" class="btn btn-primary">Menu</a>
        </div>

    </section>
    <section id="about">
        <div class="about-wrapper container">
            <div class="about-text">
                <p class="small">About Us </p>
                <h2>we've been Making Healthy Food For Last 10 Years</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus fuga culpa voluptate,
                    sint voluptas ullam magni soluta aliquam dolores labore architecto ex, similique laudantium
                    cupiditate eveniet nesciunt explicabo corrupti amet aliquid molestias tempora esse quis quasi!
                    Ratione, excepturi qui.</p>
            </div>
            <div className="about-img">
            <img src={AboutImage} alt="About Us" />
            </div>
        </div>

    </section>
    <section id="food">
        <h2>Type of Food</h2>
        <div class="food-container container">
            <div class="food-type fruit">
                <div class="img-container">
                <img src={Food1} alt="Fruit" />
                    <div class="img-content">
                        <h3>Fruit</h3>
                        <a href="https://en.wikipedia.org/wiki/Fruit" class="btn btn-primary" target="-blank"> Learn
                            More</a>
                    </div>
                </div>
            </div>
            <div class="food-type vegetable">
                <div class="img-container">
                <img src={Food2} alt="Vegetable" />
                    <div class="img-content">
                        <h3>Vegetable</h3>
                        <a href="https://en.wikipedia.org/wiki/vegetable" class="btn btn-primary" target="-blank"> Learn
                            More</a>
                    </div>
                </div>
            </div>
            <div class="food-type grain">
                <div class="img-container">
                <img src={Food3} alt="Grain" />
                    <div class="img-content">
                        <h3>Grain</h3>
                        <a href="https://en.wikipedia.org/wiki/Grain" class="btn btn-primary" target="-blank"> Learn
                            More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="food-menu">
        <h2 class="food-menu-heading">
            Food Menu
        </h2>
        <div class="food-menu-container container">
            <div class="food-menu-item">
                <div class="food-image">
                <img src={Food4} alt="Fruit" />
                </div>
                <div class="food-discription">
                    <h2 class="food-title">
                        Food Menu Item 1
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, odio!
                    </p>
                    <p class="food-price">Price: &#8360; 250</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                <img src={Food5} alt="Fruit" />
                </div>
                <div class="food-discription">
                    <h2 class="food-title">
                        Food Menu Item 2
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, odio!
                    </p>
                    <p class="food-price">Price: &#8360; 250</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                <img src={Food6} alt="Fruit" />
                </div>
                <div class="food-discription">
                    <h2 class="food-title">
                        Food Menu Item 3
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, odio!
                    </p>
                    <p class="food-price">Price: &#8360; 250</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                <img src={Food7} alt="Fruit" />
                </div>
                <div class="food-discription">
                    <h2 class="food-title">
                        Food Menu Item 4
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, odio!
                    </p>
                    <p class="food-price">Price: &#8360; 250</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                <img src={Food8} alt="Fruit" />
                </div>
                <div class="food-discription">
                    <h2 class="food-title">
                        Food Menu Item 5
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, odio!
                    </p>
                    <p class="food-price">Price: &#8360; 250</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                <img src={Food9} alt="Fruit" />
                </div>
                <div class="food-discription">
                    <h2 class="food-title">
                        Food Menu Item 6
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, odio!
                    </p>
                    <p class="food-price">Price: &#8360; 250</p>
                </div>
            </div>
        </div>
    </section>


    <section id="testimonials">
        <h2 class="testimonial-title">
            What Our Customers Say
        </h2>
        <div class="testimonial-container container">
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p class="testimonial-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                    exercitationem quo voluptatum, neque minima temporibus.</p>
                <div class="customer-detail">
                    <div class="photo">
                    <img src={Male} alt=""/>
                        <p class="customer-name">Jhone Doe</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p class="testimonial-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                    exercitationem quo voluptatum, neque minima temporibus.</p>
                <div class="customer-detail">
                    <div class="photo">
                    <img src={Male1} alt=""/>
                        <p class="customer-name">J.Root</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p class="testimonial-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                    exercitationem quo voluptatum, neque minima temporibus.</p>
                <div class="customer-detail">
                    <div class="photo">
                    <img src={Male2} alt=""/>
                        <p class="customer-name">Miller</p>
                    </div>
                </div>
            </div>
        </div>
    </section>



<section id="contact">
    <div class="contact-container container">
    <div class="contact-image">
    <img src={Res} alt=""/>
    </div>
    <div class="form-container">
        <h2>Contact Us</h2>
        <input type="text" name="" id="" placeholder="Name" required/>
        <input type="email" name="" id="" placeholder="E-Mail" required/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Type Your Massage Here"></textarea>
        <a href="#" class="btn btn-primary">Submit</a>
    </div>
    </div>
  
    

</section>


<footer id="footer">
    <h2>Restraunt Website &copy; all rights reserved 2024</h2>
</footer>

    </div>
  )
}

