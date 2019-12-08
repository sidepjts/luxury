import React from 'react';
import './App.css';
import {Content, Header, Layout, Navigation, Textfield} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Layout>
                <Header title={
                    <span><Link to="/">
                        <div className="gold-gradient">
                            <h1 data-heading="CarloButelli">CarloButelli</h1>
                        </div>
                    </Link></span>}
                        style={{backgroundColor: "black", borderBottom: "0.2px solid lightgray"}}
                        scroll>
                    <Navigation className="navigation-bar">
                        <Link to="/about">About Me</Link>
                        <Link to="/expertise">Expertise</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contacts">Contacts</Link>
                        <Link to="/blog">Blog</Link>
                    </Navigation>
                    <Textfield
                        value=""
                        onChange={() => {
                        }}
                        label="Search"
                        expandable
                        expandableIcon="search"
                    />
                </Header>
                {/*<Drawer title={<span><Link href="/portfolio">*/}
                {/*        <div className="gold-gradient">*/}
                {/*            <h1 style={{marginRight: "10%"}} data-heading="CarloButelli">CarloButelli</h1>*/}
                {/*        </div>*/}
                {/*    </Link></span>}*/}
                {/*>*/}
                {/*    <Navigation className="navigation-bar">*/}
                {/*        <Link to="/about">About Me</Link>*/}
                {/*        <Link to="/expertise">Expertise</Link>*/}
                {/*        <Link to="/resume">Resume</Link>*/}
                {/*        <Link to="/projects">Projects</Link>*/}
                {/*        <Link to="/contacts">Contacts</Link>*/}
                {/*        <Link to="/blog">Blog</Link>*/}
                {/*    </Navigation>*/}
                {/*</Drawer>*/}
                <Content>
                    <div className="page-content">
                        <Main/>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default App;
