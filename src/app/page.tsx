import data from "@/data/data.json";
import Article from "@/components/Article/Article";
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>The Mysteries Locked Inside Nordic Seed Vaults</title>
                <meta name="description" content="Oatly wants to uncover what those mysteries say about oats. So does the Nordic Genetic Resource Center. Can you guess what happens next?" />
                <meta name="author" content="John Doe" />
                <meta property="og:title" content="The Mysteries Locked Inside Nordic Seed Vaults" />
                <meta property="og:description" content="Explore the secrets of Nordic Seed Vaults with Oatly." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourdomain.com" />
            </Head>
            <main className="container mx-auto py-8">
                <Article articleData={data} />
            </main>
        </>
    );
}

