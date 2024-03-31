function Footer() {
  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4 border-t-2 border-[#cba978]">
      <div>
        <p className="text-sm">&copy; 2023 G&M Design.</p>
      </div>
      <div className="ml-4">
        <a href="https://www.instagram.com/gymdesignreformas/" target="_blank" rel="noopener noreferrer">
          <img src="/public/instagram.png" alt="Logo de Instagram" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export default Footer;