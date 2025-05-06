import data from "@/data/data.json";
import Image from "next/image";
import nordicSeedImage from "../../public/assets/images/NordGen.webp";

export default function Home() {
    return (
        <main className="container mx-auto my-6 relative">
            {/*<h1 className="text-heading font-heading font-bold tracking-tight absolute left-0">{data.title}</h1>*/}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
                <div className="flex flex-col gap-0 lg:gap-2">
                {data.paragraphs.slice(0, 2).map((text, idx) => (
                    <p key={idx} className="bg-gray-100 p-4 rounded shadow">{text}</p>
                ))}
                </div>
                <div className="lg:col-span-2 relative rounded shadow">
                    <Image
                        src={nordicSeedImage}
                        alt="Nordic Seeds"
                        fill
                        priority
                    />
                </div>
                {data.paragraphs.slice(2).map((text, idx) => (
                    <p key={idx + 2} className="bg-gray-100 p-4 rounded shadow">{text}</p>
                ))}
            </div>
        </main>
    );
}
