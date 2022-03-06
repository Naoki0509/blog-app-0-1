import Head from "next/head";
import Image from "next/image";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";

export default function Blog() {
	return (
		<div>
			<Head>
				<title>N Blog</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-col flex-1 items-center justify-center"></div>
			<Footer />
		</div>
	);
}
