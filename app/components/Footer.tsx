export default function Footer() {
  return (
    <footer className="mt-40 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10 bg-[#553f3f] text-white -mx-8 -mb-10 px-8 py-10">
      <div>
        <div className="text-zinc-400 text-sm mb-2">Email</div>
        <a href="mailto:Davidthakuri195@gmail.com" className="text-lg font-medium hover:underline">
          Davidthakuri195@gmail.com
        </a>
      </div>
      <div>
        <div className="text-zinc-400 text-sm mb-2 sm:text-right">Socials</div>
        <div className="flex gap-6 text-lg font-medium">
          <a href="https://www.linkedin.com/in/david-thakuri-611467315/" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          <a href="https://www.instagram.com/_david_thakuri_/" className="hover:opacity-70 transition-opacity">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
