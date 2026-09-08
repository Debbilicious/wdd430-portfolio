import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div id="header-title" className="text-2xl font-bold">Deborah Okolocha</div>
        <nav>
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}