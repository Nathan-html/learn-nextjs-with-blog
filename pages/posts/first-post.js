import Link from "next/link";

export default function FirstPost() {
    return <div className="container">
        <h1>First Post</h1>
        <Link href="../">Back to home</Link>
    </div>;
}