import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";




const About = () => {
    return (
    <section className="relative pt-12 pb-24" id="about">
        <div className="container mx-auto h-full">
            <div className="h-full flex items-center justify-center">
                {/* image + shapes */}
                <div className="hidden xl:flex flex-1 pl-8">
                    <div className="relative w-full max-w-[380px]">
                       {/*shape*/}
                        <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5
                        -z-10"></div> 
                        <div className="rounded-tl-[8px] rounded-tr-[120px] w-full 
                        bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                            <Image
                            src="/assets/assets/about/img.png" 
                            width={350} 
                            height={478} 
                            quality={100}
                            priority
                            alt=""/>
                        </div>
                        {/* rotating shape */}
                        <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                        <motion.div animate={{
                            rotate: [0,360],
                        }} transition={{duration: 10, ease: "linear", repeat: Infinity}}>
                        <Image
                        src="/assets/assets/about/shape-1.svg"
                        width={160}
                        height={160}
                        alt=""
                        ></Image>
                        </motion.div>
                        <div className="absolute text-center text-white">
                            <div className="text-5xl font-bold leading-none">5+</div>
                            <div>
                                Years of <br/> Experience
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                 <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0
                 flex flex-col gap-6">
                    <div>
                        <AnimatedText
                            text="My name is Ermin"
                            textStyles="h2 mb-2"
                        />
                        <p className="text-lg">Fullstack Developer & Designer</p>
                        </div>
                        <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
                            I create visually stunning and functional websites using modern
                            technologies and design principles. Explore my work to see how I combine
                            creativity with techinal skill to deliver exceptional digital experiences.
                        </p>
                        {/* info items */}
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 
                w-full lg:justify-between mx-auto xl:mx-0 items-center">
                        <div className="whitespace-nowrap">
                            <div className="uppercase font-bold text-primary">Age</div>
                            <p>27 Years</p>
                        </div>

                        <div className="whitespace-nowrap">
                            <div className="uppercase font-bold text-primary">Born in</div>
                            <p>Dortmund, Germany</p>
                        </div>

                        <div className="whitespace-nowrap">
                            <div className="uppercase font-bold text-primary">Phone</div>
                            <p>+387 603 441 114</p>
                        </div>

                        <div className="whitespace-nowrap">
                            <div className="uppercase font-bold text-primary">Email</div>
                            <p>erminsacic28@gmail.com</p>
                        </div>
                    </div>

                </div>       
            </div>
        </div>
    </section>
    );
}

export default About;