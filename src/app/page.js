import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log(process.env.BACKEND_URL);
  return (
    <div>
      <button><Link href="/login">Login</Link></button>
      <button><Link href="/register">Register</Link></button>
    </div>
  );
}
