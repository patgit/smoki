
import Link from 'next/link';

export default function Header() {
    return (
        <header>
    	    <Link href="/dashboard">Log In</Link>
            <Link href="/dashboard">Sign In</Link>
        </header>
    )
}
