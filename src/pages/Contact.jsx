import React, { useState } from "react";
import '../css/Contact.css'
import CustomButton from "../components/CustomButton/CustomButton";
import useAlert from "../hooks/useAlert";

const Contact = () => {
  const formState = { fullName: "", email: "", subject: "", message: "" }
  const showAlert = useAlert()

  const [formData, setFormData] = useState(formState)
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form Data", formData)
      setIsSuccess(true)
      setFormData(formState)
      showAlert('Mesajınız alındı Teşekkür ederiz', 'info')
    }
    catch (error) {
      console.log('Kayıtta Hata oluştur', error)
    }
    finally {
      setIsLoading(false)
    }

  }

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <header className="contact-header">
          <h1>Bizimle İletişime Geçin</h1>
        </header>

        <form className="contact-formh" onSubmit={handleSubmit} >
          <div className="input-row">
            <div className="input-group">
              <label>Ad Soyad</label>
              <input
                name="fullName"
                type="text"
                required placeholder="Adınız Soyadınız"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>E-posta</label>
              <input
                name="email"
                type="email"
                required
                placeholder="ornek@mail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Konu</label>
            <select name="subject" required value={formData.subject} onChange={handleChange} >
              <option value="general">Genel Soru</option>
              <option value="billing">Ödeme İşlemleri</option>
              <option value="technical">Teknik Destek</option>
            </select>
          </div>

          <div className="input-group">
            <label>Mesajınız</label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message" rows="5"
              required placeholder="Nasıl yardımcı olabiliriz?">
            </textarea>
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
