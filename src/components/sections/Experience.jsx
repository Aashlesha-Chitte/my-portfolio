import React, { useEffect } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "./utils/styles";
import { experiences } from "../constant";
import SectionWrapper from "./SectionWrapper";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { textVariant } from "./utils/motion";
import { RevealOnScroll } from "../RevealOnScroll";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#0d0c0d",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: '#2b7fff' }}
            className="experience-card-container"
            icon={
                <WorkOutlineIcon fontSize="large" />
            }
        >
            <div>
                <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
            </div>

            <ul className="ml-5 mt-5 list-disc space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="pl-1 text-[14px] tracking-wider text-white-100"
                    >
                        {point}
                    </li>
                ))}
            </ul>
            <style jsx>{`
        .experience-card-container:hover .vertical-timeline-element-content {
          background: linear-gradient(to right, #3b82f6, #22d3ee) !important;
          transition: background 0.3s ease;
        }
      `}</style>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    useEffect(() => {
        const verticalTimeline = document.querySelector('.vertical-timeline');
        if (verticalTimeline) {
            verticalTimeline.style.margin = '0';
            verticalTimeline.style.width = '100%';
            verticalTimeline.style.maxWidth = '100%';
        }
    }, []);
    return (
        <section
            id="timeline"
            className="min-h-screen flex items-center justify-center"
        >
            <RevealOnScroll>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} text-center`}>
                        What I have done so far
                    </p>
                    <h2 className={`${styles.sectionHeadText} text-center`}>
                        Work Experience.
                    </h2>
                </motion.div>

                <motion.div variants={textVariant()} className="flex flex-col w-full max-w-7xl mx-auto">
                    <VerticalTimeline style={{ width: "100%" }}>
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </motion.div>
            </RevealOnScroll>
        </section>
    );
};

export default SectionWrapper(Experience, "technicalSkills");
