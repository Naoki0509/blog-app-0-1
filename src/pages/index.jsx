import Head from "next/head";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import { Profile } from "src/Components/Profile";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-1 flex-col justify-center items-center ">
				<Profile />
			</div>
			<Footer />
		</div>
	);
}
