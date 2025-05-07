import data from "@/data/data.json";
import Image from "next/image";
import nordicSeedImage from "../../public/assets/images/NordGen.webp";

export default function Home() {
    return (
        <main className="container mx-auto py-12">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-6">
                    <h1 className="text-heading font-heading tracking-tighter z-10 uppercase w-[96rem]">{data.title}</h1>
                    <div className="flex items-center gap-2">
                        <div className="border border-black rounded-full py-1 px-4 w-fit">By {data?.author} . {data?.category}</div>
                        <div className="border border-black rounded-full py-1 px-4 w-fit">{data?.publishedAt}</div>
                    </div>
                    <p className="text-prelude font-prelude w-[40rem] z-10">{data.prelude}</p>
                    {data.paragraphs.slice(0, 2).map((text, idx) => (
                        <p key={idx} className="bg-gray-100 p-4 rounded shadow">{text}</p>
                    ))}
                </div>
                <div className="col-span-2 relative rounded shadow">
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
