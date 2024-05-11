// Home.js
import React from 'react';
import Highlight from './highlight.js';
import Testimonial from './Testimonial.js';
import './home.css';
import heroImage from '../images/restauranfood.jpg';

class Home extends React.Component {
    render(props) {
        return (
            <main className="home">
                <section className="hero oddSection">
                    <article>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern twist.</p>
                        <a href="/reservations">Reserve Table</a>
                    </article>
                    <img src={heroImage} alt="restaurant food"/>
                </section>
                <section className="highlights">
                    <h2>This Weeks Specials</h2>
                    <Highlight highlightnum={1}/>
                    <Highlight highlightnum={2}/>
                    <Highlight highlightnum={3}/>
                    <button>Online Menu</button>
                </section>
                <section className="Testimonials oddSection">
                    <h2>Testimonials</h2>
                    <Testimonial 
                        name={'Laura'}
                        imageid={0}
                        description={'This food pressure fr.'}/>
                    <Testimonial 
                        name={'Jessica'}
                        imageid={1}
                        description={'This food pressure fr.'}/>
                    <Testimonial 
                        name={'James'} 
                        imageid={2}
                        description={'This food pressure fr.'}/>
                </section>
                <section className="about evenSection">
                    <article>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </article>
                </section>
            </main>
        );
    }
}

export default Home;