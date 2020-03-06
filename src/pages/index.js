import React from "react"
import Layout from "../components/Layout"
import "./index.scss";
export default () => (
  <Layout>
    <section id="homePage">
      <h1 className="page-header">Hi, I'm Murtuza Syed.</h1>
    <div className="home-section">
        <p>I'm an <i><b>Impact-driven</b></i> Full Stack Engineer currently working at Cerner Corporation in
        Kansas City, MO. I've extensive experience working on Single Page
        Applications using JavaScript(ES6), ReactJS, CSS, HTML as well as Backend
        applications using Java(J2EE), NodeJS.
        </p>
        <p>
        The key to my motivation is <i><b>User Satisfaction</b></i>. If I can make someone's life better than I have got my job done. As a software engineer, I enjoy using my attention to detail, my love for building things from scratch, and my `Impact-driven` mission to literally make the world a better place to live.
        </p>
        <p>
        When I am not in front of the computer, I focus on enhancing my
        motivational public speaking skills by speaking at a Toastmaster's
        club at Cerner.
        </p>
      <p className="blue">
        Current Focus: Accessibility, Cloud Development using AWS, TypeScript
      </p>
    </div>
    </section>
    
  </Layout>
)
