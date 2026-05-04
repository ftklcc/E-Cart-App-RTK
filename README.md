# Modern E-Commerce Frontend Application (React + Vite)

### Proje Genel Bakış

Bu proje, React ve Vite kullanılarak geliştirilmiş modern bir e-ticaret frontend uygulamasıdır. Amaç; gerçek dünya e-ticaret akışlarını simüle eden, ölçeklenebilir ve performans odaklı bir kullanıcı arayüzü geliştirmektir.

Uygulama; ürün listeleme, filtreleme, sepet yönetimi ve tema sistemi gibi temel e-ticaret fonksiyonlarını içerir.

## Özellikler

### Ürün Sistemi

- API üzerinden dinamik ürün listeleme (Axios + async yapı)
- Ürün detay sayfası
- Kategori bazlı filtreleme
- Fiyat sıralama:
- En ucuz → en pahalı
- En pahalı → en ucuz
- İndirimli ürünler bölümü

### Sepet Sistemi

- Ürün ekleme / çıkarma
- Ürün miktarı güncelleme
- Debounce ile optimize edilmiş kullanıcı etkileşimleri
- LocalStorage ile kalıcı sepet verisi

### UI / UX

- Dark / Light tema desteği
- Responsive tasarım (mobil uyumlu)
- Loading state (API yüklenme ekranları)
- Modern ve temiz arayüz

### Veri & State Yönetimi

- Redux Toolkit ile global state yönetimi
- Async işlemler (createAsyncThunk)
- Axios ile API entegrasyonu
- Category ve product verilerinin ayrı slice yapısı
- LocalStorage ile state persist sistemi

### Mimari Yapı

Proje modüler ve ölçeklenebilir şekilde yapılandırılmıştır:

- Component-based yapı
- Feature-based Redux slice mimarisi
- UI / state / logic ayrımı
- Servis katmanı ile API yönetimi
- Custom hooks ile tekrar eden logic soyutlama

### Kullanılan Teknolojiler

- React
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Custom Hooks
- Debounce utility
- Pure CSS (CSS Variables ile tema sistemi)

## Filtreleme Sistemi

Ürünler üzerinde:

- Kategori filtreleme
- Fiyat sıralama (artan / azalan)
- Dinamik state tabanlı filtreleme

Filtreleme işlemleri Redux state üzerinden yönetilir.

## Performans Optimizasyonu

- Debounce ile sepet işlemlerinde gereksiz render azaltıldı
- Debounce ile search işlemlerinde de gereksiz render azaltılmıştır.
- LocalStorage ile veri kalıcılığı sağlandı
- UI state ve data state ayrımı yapıldı

## LocalStorage Sistemi

- Sepet verisi localStorage’a kaydedilir
- Sayfa yenilense bile veri korunur
- Redux state başlangıçta localStorage’dan hydrate edilir

## Neler Öğrendim

Bu proje sürecinde:

- Redux Toolkit ile profesyonel state yönetimi
- Axios ile API mimarisi oluşturma
- Async veri akışı (loading / success / error)
- Debounce ile performans optimizasyonu
- LocalStorage ile kalıcı veri yönetimi
- Filtreleme sisteminin state tabanlı kurulumu
- Component bazlı ölçeklenebilir mimari
- Modern React proje yapısı

## Kurulum

- git clone https://github.com/kullanici-adi/proje-adi.git
- cd proje-adi
- npm install
- npm run dev
