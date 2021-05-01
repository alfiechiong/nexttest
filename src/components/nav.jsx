import Link from "next/link";

const nav = ()=><ul>
    <li>
        <Link href="/">Home</Link>
    </li>
    <li>
        <Link href="/about">About</Link>
    </li>
    <li>
        <Link href="/contact">Contact</Link>
    </li>
</ul>

export default nav