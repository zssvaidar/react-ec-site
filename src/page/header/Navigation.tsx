import '../../assets/css/page/header/navigation.css'

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li className="dropdown">
                    <a href="/categories" className="chevron">Categories</a>
                    <ul className="dropdown-menu">
                        <li><a href="/categories/electronics">Electronics</a></li>
                        <li><a href="/categories/fashion">Fashion</a></li>
                        <li><a href="/categories/home-kitchen">Home & Kitchen</a></li>
                        <li><a href="/categories/books">Books</a></li>
                        <li><a href="/categories/beauty-personal-care">Beauty & Personal Care</a></li>
                        <li><a href="/categories/sports-outdoors">Sports & Outdoors</a></li>
                    </ul>
                </li>
                <li><a href="/offers">Offers/Deals</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;