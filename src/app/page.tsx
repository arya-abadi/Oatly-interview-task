import data from "@/data/data.json";
import Article from "@/components/Article/Article";

export default function Home() {
    return (
        <main className="container mx-auto py-12">
            <Article articleData={data}/>
        </main>
    );
}
