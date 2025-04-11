// app/not-found.tsx ou pages/404.tsx
import Link from 'next/link';
//import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">Page non trouvée</h2>
      <p className="text-gray-600 mt-2">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-medium px-5 py-2 rounded-xl transition-all duration-200"
      >
        {/*<ArrowLeft className="mr-2 w-5 h-5" />*/}
        Retour à l'accueil
      </Link>
    </div>
  );
}
