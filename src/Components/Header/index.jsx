import Link from "next/link";

export const Header = () => {
	return (
		/*
	Task
	モバイルメニューの追加をしたい  (右下固定メニュー)
	三項演算子をうまく活用する
	*/
		<div className="flex items-center lg:justify-start justify-center pt-4">
			<p className="text-4xl font-serif font-bold">N Blog</p>
			<div className="lg:ml-12">
				<ul className="lg:flex hidden justify-start space-x-6 font-bold font-serif text-2xl">
					<li>
						<Link href="/">
							<a className="hover:text-blue-400">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a className="hover:text-blue-400">Blog</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="lg:hidden absolute bottom-0 right-0 w-[80px] h-[80px] rounded-full bg-slate-300"></div>
		</div>
	);
};
