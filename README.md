# 🌤️ Weatherly - Modern Weather Application

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://rusoyam-cpu.github.io/weatherly/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)]()

[English](#-english) • [Türkçe](#-türkçe) • [Azərbaycan](#-azərbaycan) • [Русский](#-русский)

</div>

---

## 🇬🇧 English

### 🚀 Overview
**Weatherly** is a lightning-fast, zero-configuration weather web application designed with a sleek **Glassmorphism** UI. It provides real-time meteorological data worldwide without requiring any API keys.

### ✨ Key Features
- **Global Search:** Instant city lookup using Open-Meteo Geocoding API.
- **Rich Metrics:** Temperature, relative humidity, wind speed, apparent (feels-like) temperature, and atmospheric pressure.
- **Dynamic UI/UX:** Glassmorphic card design with ambient background glow and weather-based icon adjustments.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.

### 🛠️ Tech Stack & Architecture
- **HTML5 / CSS3:** Modern Flexbox layout, CSS variables, custom glassmorphic blur effects.
- **JavaScript (ES6+):** Asynchronous JavaScript (`async/await`), Fetch API, modular functions.
- **API Integration:** [Open-Meteo API](https://open-meteo.com/) (Free Geocoding & Weather Forecast endpoints).

---

## 🇹🇷 Türkçe

### 🚀 Genel Bakış
**Weatherly**, modern **Glassmorphism** (cam efekti) tasarımıyla geliştirilmiş, sıfır konfigürasyon gerektiren hızlı ve şık bir hava durumu web uygulamasıdır. Hiçbir API anahtarına ihtiyaç duymadan dünya genelinde anlık hava verileri sunar.

### ✨ Temel Özellikler
- **Küresel Arama:** Open-Meteo Coğrafi Konum API'si ile dünya üzerindeki herhangi bir şehri anında bulma.
- **Detaylı Metrikler:** Sıcaklık, bağıl nem, rüzgar hızı, hissedilen sıcaklık ve atmosferik basınç göstergeleri.
- **Dinamik Arayüz:** Arka plan ışık efektleri ve hava koşuluna göre otomatik değişen ikon/durum yönetimi.
- **Responsive (Duyarlı) Tasarım:** Telefon, tablet ve masaüstü ekranlarla tam uyumlu.

### 🛠️ Teknolojiler ve Mimari
- **HTML5 / CSS3:** Modern Flexbox yapısı, cam bulanıklığı (backdrop-filter) efektleri.
- **JavaScript (ES6+):** Asenkron programlama (`async/await`), Fetch API entegrasyonu.
- **API Servisi:** [Open-Meteo API](https://open-meteo.com/) (Ücretsiz Geocoding ve Hava Durumu Tahmin uç noktaları).

---

## 🇦🇿 Azərbaycan

### 🚀 Ümumi Baxış
**Weatherly**, müasir **Glassmorphism** dizaynı ilə hazırlanmış, sürətli və heç bir API açarı tələb etməyən hava proqnozu veb tətbiqidir. Dünyanın istənilən şəhəri üzrə real vaxt rejimində hava məlumatlarını təqdim edir.

### ✨ Əsas Xüsusiyyətlər
- **Qlobal Axtarış:** Open-Meteo Geocoding API vasitəsilə istənilən şəhəri dərhal tapmaq imkanı.
- **Ətraflı Metriklər:** Temperatur, rütubət, küləyin sürəti, hiss edilən temperatur və atmosfer təzyiqi.
- **Dinamik UI/UX:** Arxa fon işıq effektləri və hava şəraitinə uyğunlaşan ikonalar.
- **Responsiv Dizayn:** Mobil, planşet və kompüter ekranları üçün tam uyğunlaşdırılmışdır.

### 🛠️ Texnologiyalar
- **HTML5 / CSS3:** Müasir Flexbox strukturu, şüşə effekti dizaynı.
- **JavaScript (ES6+):** Asinxron funksiyalar (`async/await`), Fetch API.
- **API:** [Open-Meteo API](https://open-meteo.com/) (Pulsuz hava proqnozu xidməti).

---

## 🇷🇺 Русский

### 🚀 Обзор
**Weatherly** — это современное, ультрабыстрое веб-приложение погоды с дизайном в стиле **Glassmorphism**, не требующее никаких API-ключей. Оно предоставляет метеорологические данные в реальном времени для любого города мира.

### ✨ Основные возможности
- **Глобальный поиск:** Мгерновенный поиск городов с использованием Open-Meteo Geocoding API.
- **Подробные метрики:** Температура, относительная влажность, скорость ветра, ощущаемая температура и атмосферное давление.
- **Динамический интерфейс:** Эффекты размытия стекла и адаптивные иконки погоды.
- **Адаптивный дизайн:** Полная оптимизация под мобильные устройства и ПК.

### 🛠️ Технологический стек
- **HTML5 / CSS3:** Современная верстка, эффекты `backdrop-filter`.
- **JavaScript (ES6+):** Асинхронные запросы (`async/await`), Fetch API.
- **API:** [Open-Meteo API](https://open-meteo.com/) (Бесплатные геокодинг и прогноз погоды).

---

## 🧪 Testing & Quality Assurance / Test Süreci

To ensure application stability and robust user experience, the following testing procedures are performed:

1. **API Error Handling & Edge Cases:**
   - Testing invalid city inputs (triggers error state and displays fallback status messages).
   - Verifying network failure resilience using `try/catch` blocks.
2. **Cross-Browser Compatibility:**
   - Tested on Chromium-based browsers (Chrome, Edge, Brave) and Firefox.
3. **Responsive UI Testing:**
   - Validated layouts across viewports ranging from 320px mobile screens up to 4K displays.
4. **Performance & Lightweight Audit:**
   - Zero heavy external frameworks; pure vanilla performance yielding instant paint times.

---

## 💡 How to Run Locally / Yerel Olarak Çalıştırma

If you want to run this project on your local machine:

```bash
# 1. Clone the repository
git clone [https://github.com/rusoyam-cpu/weatherly.git](https://github.com/rusoyam-cpu/weatherly.git)

# 2. Navigate to the project directory
cd weatherly

# 3. Open index.html in your browser or run via Live Server (VS Code)
