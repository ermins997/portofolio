"use client"
import Card from "./Card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { motion, AnimatePresence } from "framer-motion";
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaFigma, FaNodeJs, FaJava } from 'react-icons/fa'

const journey =[
    {
        type: "experience",
        company: "Asseco",
        logoUrl: "/assets/assets/journey/experience/logo-1.svg",
        position: "Full Stack Developer",
        duration: "Aug 2021 -  Oct 2024",
        description: 
        "I've optimized performance and upheld industry standards for banks including Procredit, Eurobank Direktna, NLB, Raiffeisen, Erste, and API. Programming languages: Java/JavaSpring, C#/.net, ReactJS, NodeJS."
    },
    {
        type: "experience",
        company: "Freelance",
        logoUrl: "/assets/assets/journey/experience/logo-2.svg",
        position: "Web Developer",
        duration: "Mar 2020 - Jun 2021",
        description: 
        "Developed responsive website with HTML, CSS and JavaScript. Ensured seamless user experiences."
    },
    {
        type: "experience",
        company: "Magnolia",
        logoUrl: "/assets/assets/journey/experience/logo-3.svg",
        position: "UI/UX Developer",
        duration: "Jan 2019 - Mar 2020",
        description: 
        "Designed web interfaces with cross-browser compatibility and responsiveness. Delivered pixel-perfect designs. Developed full-stack solutions using React and Node.JS."
    },
    {
        type: "experience",
        company: "B2B solutions",
        logoUrl: "/assets/assets/journey/experience/logo-4.svg",
        position: "Software Developer",
        duration: "Mar 2018 - Dec 2018",
        description: "Conducted 100+ test procedures, prioritizing quality and reliability",
    },
    {
        type: "education",
        institusion: "Udemy",
        logoUrl: "/assets/assets/journey/education/logo-1.svg",
        qualification: "Web Development Bootcamp",
        duration: "Jan 2020 - Apr 2020",
        description: "Learned full-stack development concepts, focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills",
    },
    {
        type: "education",
        institusion: "FIMEK University",
        logoUrl: "/assets/assets/journey/education/logo-2.svg",
        qualification: "Full Stack Dev Cert",
        duration: "Jan 2020 - Sep 2024",
        description: "At FIMEK University in Novi Sad, I acquired foundational knowledge in applied mechanics and industrial engineering, developing expertise in analyzing complex technical systems and utilizing computer simulations to solve engineering challenges.",
    },
    {
        type: "education",
        institusion: "Programming School by Danilo Vesovic",
        logoUrl: "/assets/assets/journey/education/institution.svg",
        qualification: "Full Stack Dev",
        duration: "Jan 2019 - Aug 2019",
        description: "Through Danilo Vesović's Programming School, I mastered modern web development technologies and software engineering principles, gaining expertise in building scalable applications using cutting-edge frameworks while developing strong problem-solving skills for real-world coding challenges.",
    },

    {
        type: "skill",
        name: "HTML",
        icon: <FaHtml5 />,
        duration: "Learned in 2017",
        description: "Crafted structured web content using HTML effectively for modern websites, ensuring semanting marckup and accessibility.",
    },
    {
        type: "skill",
        name: "CSS",
        icon: <FaCss3Alt />,
        duration: "Learned in 2017",
        description: "Styled responsice web pages using CSS, ensuring an appealing user experience with modern design principles and layouts.",
    },
    {
        type: "skill",
        name: "Javascript",
        icon: <FaJs />,
        duration: "Learned in 2018",
        description: "Implemented Javascript for interactivity, enhancing user engagement on websites through dynamic content and features.",
    },
    {
        type: "skill",
        name: "React.js",
        icon: <FaReact />,
        duration: "Learned in 2020",
        description: "Built dynamic user interfaces using React.js, optimizing component-driven design for seamless user experiences and efficiency",
    },
    {
        type: "skill",
        name: "WordPress",
        icon: <FaWordpress />,
        duration: "Learned in 2020",
        description: "Developed dynamic websites with WordPress, simplifying content management processes while ensuring scalability and performance.",
    },
    {
        type: "skill",
        name: "HTML",
        icon: <FaFigma />,
        duration: "Learned in 2018",
        description: "Designed user interfaces in Figma, facilitating collaboration and rapid prototyping to meet user needs and project goals.",
    },

]

const Cards = () =>{
    return <>
    <Tabs
     defaultValue="experience" 
     className="w-full flex flex-col items-center">
        <TabsList className="max-w-max mb-[30px]">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
            <AnimatePresence>
            <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:20}} transition={{duration: 0.3}}>
                {journey
            .filter((item) => item.type === "experience")
            .map((card, index) => {
                return <Card key={index} {...card}/>;
            })
            }
            </motion.div>
            </AnimatePresence>
            
        </TabsContent>
        <TabsContent value="education" className="w-full">
        <AnimatePresence>
            <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:20}} transition={{duration: 0.3}}>
              {journey
            .filter((item) => item.type === "education")
            .map((card, index) => {
                return <Card key={index} {...card}/>;
            })
            }
            </motion.div>
            </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
        <AnimatePresence>
            <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:20}} transition={{duration: 0.3}}>
              
            {journey
            .filter((item) => item.type === "skill")
            .map((card, index) => {
                return <Card key={index} {...card}/>;
            })
            }
            </motion.div>
            </AnimatePresence>
        </TabsContent>
    </Tabs>
    </>
};

export default Cards;