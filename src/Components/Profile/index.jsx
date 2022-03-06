import Image from "next/image";

export const Profile = () => {
	return (
		<div className="pt-12">
			<div className="flex-col items-center justify-center">
				<h1 className="text-center font-bold font-serif text-4xl">Profile</h1>
				<div className="pt-8">
					<div className="flex justify-center items-center">
						<div className="font-serif">
							<p>Hello!!</p>
							<p>I am Naoki Hayashida.</p>
						</div>
						<div>Image</div>
					</div>
				</div>
			</div>
		</div>
	);
};
