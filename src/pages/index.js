import React from "react"

import Layout from "../components/Layout"
// import "../../public/google-fonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2"
export default () => {
  return (
    <Layout>
      <header className="home-header center">
        <h1>Hi, I'm Murtuza Syed.</h1>
      </header>
      <section className="home-section">
        <h2 className="center">
          I am Full Stack Developer currently working at Cerner Corporation in
          Kansas City, MO. I love to code as I think its a great tool to make
          the world a better and efficient place. When I am not coding, I am
          mostly occupied with my two beautiful daughters.
        </h2>

        <h3 className="center blue">
          Current Focus: Acessibility, Cloud Development using AWS, TypeScript
        </h3>
      </section>
    </Layout>
  )
}
