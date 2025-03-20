export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center p-4 w-full absolute bottom-0">
        <p className="text-lg font-semibold">Contato</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline text-blue-400">LinkedIn</a>
          <a href="#" className="hover:underline text-blue-400">Twitter</a>
          <a href="#" className="hover:underline text-blue-400">Instagram</a>
        </div>
      </footer>
    );
  }
  