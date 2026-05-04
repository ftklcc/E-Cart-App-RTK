import React from 'react';
import './Footer.css';
// React Router'dan Link bileşenini dahil ediyoruz
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

/**
 * Footer component using Link for internal navigation to prevent page reloads.
 * Sayfa yenilenmesini önlemek için dahili navigasyonda Link kullanan alt bilgi bileşeni.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Brand Section / Marka Bölümü */}
                <div className="footer__section">
                    <h2 className="footer__logo">E - <span>Cart</span></h2>
                    <p className="footer__description">
                        En kaliteli ürünleri, en uygun fiyatlarla kapınıza getiriyoruz.
                        Müşteri memnuniyeti bizim önceliğimizdir.
                    </p>
                    <div className="footer__socials">
                        {/* Dış bağlantılar (Sosyal Medya) için <a> kullanımı doğrudur */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Quick Links / Hızlı Menü - Burada Link kullanmalıyız */}
                <div className="footer__section">
                    <h3 className="footer__title">Hızlı Menü</h3>
                    <ul className="footer__links">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/products">Ürünler</Link></li>
                        <li><Link to="/about">Hakkımızda</Link></li>
                        <li><Link to="/contact">İletişim</Link></li>
                    </ul>
                </div>

                {/* Categories / Kategoriler - Filtreleme sayfasına yönlendirir */}
                <div className="footer__section">
                    <h3 className="footer__title">Kategoriler</h3>
                    <ul className="footer__links">
                        <li><Link to="/products?category=electronics">Elektronik</Link></li>
                        <li><Link to="/products?category=fashion">Moda</Link></li>
                        <li><Link to="/products?category=home">Ev & Yaşam</Link></li>
                        <li><Link to="/products?category=cosmetics">Kozmetik</Link></li>
                    </ul>
                </div>

                {/* Contact Info / İletişim Bilgileri */}
                <div className="footer__section">
                    <h3 className="footer__title">İletişim</h3>
                    <address className="footer__contact">
                        <p>İstanbul, Türkiye</p>
                        <p>Email: support@ecart.com</p>
                        <p>Tel: +90 212 000 00 00</p>
                    </address>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; {currentYear} E-Cart. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;