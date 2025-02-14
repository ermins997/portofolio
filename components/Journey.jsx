import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";


const Journey = () => {
    return <section id="journey">
        <div className="container mx-auto py-20">
            <AnimatedText
            text="My Proffesional Journey"
            textStyles="h2 mb-[]30px text-center"
            />
            <div className="mb-6"></div>
            <Cards />
        </div>
        </section>;
}

export default Journey;