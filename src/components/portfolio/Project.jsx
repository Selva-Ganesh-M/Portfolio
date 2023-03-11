import React from 'react'
import github from "../../assets/github.svg";
const Project = ({ item }) => {
    return (
        <div className="work__card" key={item.id} >

            {/* project image */}
            <img src={item.image} alt="project-thumbnail" className='work__img' />

            {/* title */}
            <h3 className="work__title">{item.title}</h3>

            {/* links  */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                {/* demo link */}
                <a href={item.link} style={{ all: "unset", cursor: "pointer" }} target={"_blank"} >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "3px"
                    }}>
                        Demo <i className="bx bx-right-arrow-alt work__button-icon "></i>
                    </div>
                </a>

                {/* source code decider */}
                {
                    item.category === "MERN" ? (<>


                        {/* if mern stack project */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            fontSize: "12px"
                        }}>

                            {/* github logo */}
                            <img src={github} alt="" />

                            {/* client and server links */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "5px",
                                }}
                            >
                                <a style={{
                                    all: "unset",
                                    cursor: "pointer"
                                }}
                                    href={item.clientLink}
                                    target={"_blank"}
                                >client</a>


                                <span>/</span>


                                <a style={{
                                    all: "unset",
                                    cursor: "pointer"
                                }}
                                    href={item.serverLink}
                                    target={"_blank"}
                                >server</a>

                            </div>

                        </div>
                    </>) : (<>


                        {/* if static site project */}
                        <a
                            href={item.clientLink}
                            style={{ all: "unset", margin: "0px", padding: "0px" }}
                            target={"_blank"}
                        >
                            <img src={github} alt="github-img" style={{
                                cursor: "pointer"
                            }}>
                            </img>
                        </a>
                    </>)
                }

            </div>
        </div>
    )
}

export default Project