import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faJava } from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
export const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" on icon={faDesktop} size="2x" />    
                                </div>     
                                <h1>Web Design</h1>
                                <p>I approach each project individually and always focus on the result.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                </div> 
                                <h1>Web Development</h1>
                                <p>Your website will be build with an new proven Technologies</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faAws} size="2x" />
                                </div> 
                                <h1>AWS</h1>
                                <p>I'm Certified AWS Developer. I will ensure effective Design, Development, Validation and Support activities. Will develop cost oriented design for the client and Help the client in Migration to AWS. </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faJava} size="2x" />
                                </div> 
                                <h1>RestAPI Development</h1>
                                <p>As, I'm a Fullstack developer. Will develop a RestAPI using different technologies like SpringBoot, NodeJS and Express</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
