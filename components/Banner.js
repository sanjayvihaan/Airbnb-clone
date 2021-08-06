import Image from "next/image";
import HeroImage from "../images/Hero.jpg"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]
        2xl:h-[700px]">
            <Image src={HeroImage}
            layout="fill"
            objectFit="cover"
            className="h-300"
            />
            <div className="absolute top-1/4 md:top-1/3 left-5 lg:left-20 md:1/4 w-auto">
                <p className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-bold text-white max-w-md md:leading-[45px] lg:leading-[60px]">Not sure where to go? Perfect.</p>

                <button className="hidden sm:block rounded-md text-gray-800 text-center px-4 py-1 mt-8 border-2 bg-white shadow-lg hover:shadow-md hover:scale-90 transition duration-200 font-semibold">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
