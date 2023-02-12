import React from 'react'
import "./portfolio.css"
import Projects from './Projects'

const Portfolio = () => {
    return (
        (
            <section className="work section" id="portfolio">
                {/* header */}
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent works</span>

                {/* body */}
                <Projects />
            </section>
        )
    )
}

export default Portfolio