import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import Project from './Project'

const Projects = () => {
    // declarations
    const [category, setCategory] = useState({
        name: "all"
    })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)


    // side effects
    useEffect(() => {
        if (category.name === "all") {
            setProjects(projectsData)
        }
        else {
            const filteredProjects = projectsData.filter(project => {
                return project.category === category.name;
            })
            setProjects(filteredProjects)
        }
    }, [category])

    // functions
    const handleClick = (e, index) => {
        setCategory({ name: e.target.textContent })
        setActive(index)
    }


    // actual jsx
    return (
        <div>
            {/* nav items */}
            <div className="work__filters">
                {
                    projectsNav.map((item, index) => {
                        return (
                            <span
                                onClick={(e) => handleClick(e, index)}
                                className={`${active === index ? "active-work" : ""} work__item`}
                                key={index}
                            >
                                {item.name}
                            </span>
                        )
                    })
                }
            </div>

            {/* content */}
            <div className="work__container container grid">
                {projects.map((item) => {
                    return (
                        <Project item={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects