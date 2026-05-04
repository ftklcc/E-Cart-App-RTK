import React, { useState } from "react";
import '../css/Contact.css'
import CustomButton from "../components/CustomButton/CustomButton";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <header className="contact-header">
          <h1>Bizimle İletişime Geçin</h1>
        </header>

        <form className="contact-formh">
          <div className="input-row">
            <div className="input-group">
              <label>Ad Soyad</label>
              <input name="fullName" type="text" required placeholder="Adınız Soyadınız" />
            </div>
            <div className="input-group">
              <label>E-posta</label>
              <input name="email" type="email" required placeholder="ornek@mail.com" />
            </div>
          </div>

          <div className="input-group">
            <label>Konu</label>
            <select name="subject" required>
              <option value="general">Genel Soru</option>
              <option value="billing">Ödeme İşlemleri</option>
              <option value="technical">Teknik Destek</option>
            </select>
          </div>

          <div className="input-group">
            <label>Mesajınız</label>
            <textarea name="message" rows="5" required placeholder="Nasıl yardımcı olabiliriz?"></textarea>
          </div>

          <CustomButton type="submit" className="main-btn" disabled={isLoading}>
            {isLoading ? 'İşleniyor...' : 'Gönder'}
          </CustomButton>
        </form>
      </div>
    </section>

  )
};

export default Contact;
