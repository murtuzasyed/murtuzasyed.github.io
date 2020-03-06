import React from "react"
import Layout from "../../components/Layout"
import EducationSection from "../../components/EducationSection"
import { graphql } from "gatsby"
const education = [{
    universityName: "Northwest Missouri State University",
    degree: "Masters of Science in Applied Computer Science",
    universityLocation: "Maryville, MO, USA",
    gpa: "3.9"
}, {
    universityName: "Global Institute of Engineering & Technology(JNTUH affiliated)",
    degree: "Bachelors of Technology in Information Technology",
    universityLocation: "Hyderabad, Telangana, India",
    gpa: "3.3"
}];

export default () => {
  return (
    <Layout sectionTitle="Education">
      {education.map(
        ({ universityLocation, universityName, degree, gpa }) => (
          <section className="education-container">
            <EducationSection
              universityName={universityName}
              universityLocation={universityLocation}
              gpa={gpa}
              degree={degree}
            />
          </section>
        )
      )}
    </Layout>
  )
}