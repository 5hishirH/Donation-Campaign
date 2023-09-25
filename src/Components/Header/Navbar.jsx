const Navbar = () => {
    return(
        <section className="flex items-center justify-between pt-12 px-32 shadow-md">
            <img src="../../public/Logo.png" alt="Logo" className="h-16" />
            <nav>
                <ul className="flex gap-12 text-lg font-bold">
                    <li><a href="/">Home</a></li>
                    <li><a href="/donation">Donation</a></li>
                    <li><a href="/statistics">Statistics</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;