export default function Footer() {
  return (
    <footer className="mt-40 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10">
      <div>
        <div className="text-zinc-500 text-sm mb-2">Email</div>
        <a href="mailto:Davidthakuri195@gmail.com" className="text-lg font-medium hover:underline">
          Davidthakuri195@gmail.com
        </a>
      </div>
      <div>
        <div className="text-zinc-500 text-sm mb-2 sm:text-right">Socials</div>
        <div className="flex gap-6 text-lg font-medium">
          <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
