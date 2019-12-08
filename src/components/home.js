import React, { Component } from 'react'
import {Cell, Grid} from "react-mdl";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

class Home extends Component {
    render() {
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12} className="landing-cell">
                        <div className="banner-text">
                            <img src={process.env.PUBLIC_URL + '/images/profile.jpg'}
                                 alt='img-profile'
                            />
                            <h1>Software Engineer</h1>

                            <hr/>

                            <p>Java | Python | Angular4 | React | Databases | DevOps | AWS</p>
                            <div className='my-social-links'>
                                <a href="https://www.facebook.com/carlo.butelli"
                                   rel='noopener noreferrer'
                                   target='_blank'
                                   aria-hidden="true"
                                >
                                    <FaFacebook className="fab fa-facebook icon-circle-background" />
                                </a>
                                <a href="https://twitter.com/e9512071d0c44f1"
                                   rel='noopener noreferrer'
                                   target='_blank'
                                >
                                    <FaTwitter className="fab fa-twitter icon-circle-background" />
                                </a>
                                <a href="https://www.instagram.com/carlobutelli/"
                                   rel='noopener noreferrer'
                                   target='_blank'
                                >
                                    <FaInstagram className="fab fa-instagram icon-circle-background" />
                                </a>
                                <a href="https://www.linkedin.com/in/carlo-butelli-281a29b7/"
                                   rel='noopener noreferrer'
                                   target='_blank'
                                >
                                    <FaLinkedin className="fab fa-linkedin icon-circle-background" />
                                </a>
                                <a href="https://github.com/butellicarlo"
                                   rel='noopener noreferrer'
                                   target='_blank'
                                >
                                    <FaGithub className="fab fa-github icon-circle-background" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;
