export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
      <div className="flex flex-col gap-3 border-t border-neutral-200 py-8 text-xs leading-relaxed text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:py-10">
        <p>© {new Date().getFullYear()} Jonathan Mallett Photography. All rights reserved.</p>
        <a href="mailto:contact@jonathanmallett.com" className="text-neutral-700 transition-colors hover:text-neutral-400">contact@jonathanmallett.com</a>
      </div>
    </footer>
  );
}