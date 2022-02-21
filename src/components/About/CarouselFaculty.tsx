import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent } from 'react-responsive-carousel';


// bgColor should be valid tailwind bg color class
// reverse is boolean determining the orientation of the carousel
export default function CarouselFaculty({ images, title, bgColor, reverse = false }) {
    return (
        <>
            {/* @ts-ignore */}
            <CarouselComponent
                showThumbs={false}
                showStatus={false}
            >
                {images.map((image) => (
                    <div className={`flex gap-24 h-fit py-24 ${bgColor} ${reverse && 'flex-row-reverse'}`}>
                        <div className={`w-full md:w-2/4 flex flex-col justify-center items-center ${reverse ? 'md:items-start' : 'md:items-end'}`}>
                            <div className="w-full block md:hidden">
                                <h1 className="text-4xl font-display font-bold text-csPrimary text-center">{title}</h1>
                            </div>
                            <div className="bg-gray-500 w-full max-w-sm md:w-96">
                                <div key={image.title} className="w-auto relative">
                                    <img className="h-auto md:h-[600px] brightness-75" src={image.backgroundImage} />
                                    <div className="absolute md:text-left bg-csBGSpeakers py-4 md:left-0 bottom-[3rem] h-fit flex flex-col justify-center items-center md:items-start w-full">
                                        <h1 className="text-2xl pl-3 font-bold italic text-csPrimary">{image.title}</h1>
                                        <p className="text-xl pl-3 text-white">{image.shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`hidden md:flex md:w-5/6 flex-col items-start justify-center items-center ${reverse ? 'md:items-end' : 'md:items-start'}`}>
                            <h1 className="text-4xl font-display font-bold text-csPrimary text-center w-4/5">{title}</h1>
                            <div className="p-8 rounded border-2 border-csSecondary w-4/5">
                                <p className="text-white text-justify">
                                    {image.longDescription}
                                </p>
                                <br />
                                <blockquote className={`${!image.message && "hidden"} text-justify`}>
                                    {`"${image.message}"`}
                                </blockquote>
                            </div>
                        </div>
                    </div>
                ))}
            </CarouselComponent>
        </>
    );
}