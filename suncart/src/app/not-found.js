import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>

       <p className="text-gray-600 mt-4">
        Page Not Found
      </p>

        <Link href="/" className="btn btn-warning mt-6">
        Back to Home
      </Link>
    </div>
  );
}