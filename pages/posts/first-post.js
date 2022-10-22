import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
    return <div className="container">
        <main>
            <h1 className="title">
                First Post
            </h1>
            <Image
                src="/images/rocket-league-dominus.png"
                height={144}
                width={200}
                alt="Rocket League dominus"
            />
            <p><Link href="../">Back to home</Link></p>
        </main>
    </div>;
}