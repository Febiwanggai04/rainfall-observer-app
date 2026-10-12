# Aplikasi Pengamat Pos Curah Hujan - Versi Mobile

Aplikasi mobile untuk pengamatan dan pencatatan data curah hujan di pos-pos hujan. Dibangun dengan React Native untuk mendukung iOS dan Android.

## 🎯 Fitur Utama

- **Dashboard Realtime**: Monitoring data curah hujan terkini
- **Input Data Observasi**: Pencatatan data hujan harian dengan mudah
- **Rekap Data**: Laporan harian, mingguan, bulanan, dan tahunan
- **Grafik & Analisis**: Visualisasi data curah hujan
- **Manajemen Pos Hujan**: Kelola lokasi dan perangkat pos
- **Sinkronisasi Data**: Otomatis upload ke server
- **Laporan PDF/Excel**: Export data untuk dokumentasi
- **Role-Based Access**: Admin, Operator Pos, Pengawas
- **Offline Mode**: Bekerja tanpa internet, sinkronisasi saat terhubung
- **GPS Location**: Lokasi otomatis dari perangkat
- **Photo Evidence**: Dokumentasi foto kondisi alat
- **Notifikasi Alert**: Alert curah hujan tinggi/aneh

## 📱 Tech Stack

- **Framework**: React Native (Expo)
- **State Management**: Redux Toolkit
- **Database Local**: SQLite
- **Backend API**: Node.js/Express
- **Database Server**: PostgreSQL
- **Authentication**: JWT
- **Maps**: React Native Maps
- **Charts**: React Native Chart Kit
- **File Export**: XLSX, PDF

## 📂 Struktur Project

```
rainfall-observer-app/
├── mobile/                    # Aplikasi React Native
│   ├── app/
│   │   ├── screens/          # Layar aplikasi
│   │   ├── components/       # Komponen reusable
│   │   ├── navigation/       # Navigation stack
│   │   ├── services/         # API & database services
│   │   ├── redux/            # State management
│   │   ├── utils/            # Helper functions
│   │   └── assets/           # Gambar, ikon, font
│   ├── app.json
│   └── package.json
├── backend/                   # Server API
│   ├── src/
│   │   ├── controllers/      # Business logic
│   │   ├── models/           # Database models
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Authentication, validation
│   │   ├── services/         # Business services
│   │   └── utils/            # Helper functions
│   └── package.json
├── docs/                      # Dokumentasi
└── README.md
```

## 🚀 Instalasi & Setup

### Prerequisites
- Node.js 16+
- npm atau yarn
- Expo CLI
- Android Studio / Xcode (untuk emulator)

### Mobile App Setup
```bash
cd mobile
npm install
npm start
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 📋 User Requirements

### Untuk Operator Pos
- Mudah input data curah hujan
- Bisa lihat riwayat data
- Notifikasi pengingat pencatatan
- Foto dokumentasi alat

### Untuk Pengawas
- Dashboard monitoring semua pos
- Lihat laporan real-time
- Analisis trend curah hujan
- Generate laporan bulanan

### Untuk Admin
- Manajemen user & pos
- Konfigurasi sistem
- Backup data
- Analytics & reporting

## 📖 Panduan Penggunaan

[Lihat di docs/](docs/)

## 📄 Lisensi

MIT

---

**Status**: 🚀 Under Development

**Last Updated**: 2026-10-12
