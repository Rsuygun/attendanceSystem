## English Version

# Attendance System

## Project Overview

The *Attendance System* is a mobile application designed to simplify and digitize the process of taking attendance in university classes. The application enables professors to take attendance easily, while students can check-in quickly using a QR code system.

### Key Features:
- *Dynamic QR Code Generation*: Every 5 seconds, a new hashed QR code is generated, ensuring the security and validity of the attendance process.
- *Student Check-in*: Students scan the QR code displayed by the professor to mark their attendance. A “Check-in” button confirms the student's participation.
- *Teacher's Attendance Panel*: Teachers can view the list of students who have checked in for the class session. They also have the ability to:
  - Remove students from the attendance list.
  - Save the final attendance list once the session is complete.

### Technologies Used:
- *Frontend: Built with **React Native* and *Expo CLI* for the mobile interface.
- *Database: Uses **Firebase* and *Firestore* for data storage and management.

### How to Use:
1. *Professor's Role*:
   - Open the application and select the desired class.
   - Display the dynamic QR code, which refreshes every 5 seconds.
   - View the list of students who checked in and either save or modify the list.
   
2. *Student's Role*:
   - Open the application and scan the QR code displayed by the professor.
   - Click on the "Check-in" button to confirm attendance.

### Installation:
1. Clone the repository:
   bash
   git clone https://github.com/Rsuygun/attendanceSystem
   
2. Navigate into the project folder:
  bash
  cd attendance-system
  

3. Install dependencies:
  bash
  npm install
  
4. Start the Expo development server:
  bash
  expo start
  

## Turkish Version

# Yoklama Sistemi

## Proje Özeti
*Yoklama Sistemi*, üniversitedeki derslerde yoklama alma sürecini dijitalleştirip basitleştirmek için tasarlanmış bir mobil uygulamadır. Uygulama, hocaların kolayca yoklama almasını sağlarken, öğrenciler de QR kod sistemi ile hızlı bir şekilde yoklamaya katılabilirler.

### Ana Özellikler:
- *Dinamik QR Kod Oluşturma*: Her 5 saniyede bir yeni, hashlenmiş QR kod oluşturulur ve bu sayede yoklama sürecinin güvenliği sağlanır.
- *Öğrenci Katılımı*: Öğrenciler, hoca tarafından gösterilen QR kodunu tarayarak yoklamaya katılırlar. "Katıl" butonuna basarak yoklamalarını onaylarlar.
- *Öğretmen Yoklama Paneli*: Öğretmenler, derse katılan öğrencilerin listesini görüntüleyebilirler. Ayrıca şu işlemleri yapabilirler:
  - İstedikleri öğrencileri yoklama listesinden çıkarabilirler.
  - Yoklamayı kaydet butonuna basarak listeyi sonlandırabilirler.

### Kullanılan Teknolojiler:
- *Ön Yüz (Frontend): Mobil arayüz için **React Native* ve *Expo CLI* kullanıldı.
- *Veritabanı: Veri depolama ve yönetimi için **Firebase* ve *Firestore* kullanıldı.

### Nasıl Kullanılır:
1. *Hocanın Rolü*:
   - Uygulamayı açarak istediği dersi seçer.
   - 5 saniyede bir yenilenen dinamik QR kodu ekranda gösterir.
   - Derse katılan öğrencileri liste halinde görüntüleyip listeyi kaydedebilir veya düzenleyebilir.
   
2. *Öğrencinin Rolü*:
   - Uygulamayı açarak hoca tarafından gösterilen QR kodunu tarar.
   - "Katıl" butonuna basarak yoklamaya katılımını onaylar.

### Kurulum:
1. Depoyu klonlayın:
   bash
   git clone https://github.com/Rsuygun/attendanceSystem

2. Proje dizinine geçin:
  bash
  cd attendance-system
  

3. Bağımlılıkları yükleyin:
  bash
  npm install
  
4. Expo geliştirme sunucusunu başlatın:
  bash
  expo start


   
