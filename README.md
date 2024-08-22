University Attendance System
This mobile application is designed for university attendance management. It is built using React Native, React, Expo CLI, and JavaScript.

Features
Teacher Login: Teachers have access to two main options after logging in:

Take Attendance: Generates a QR code encrypted with a hash that changes every 5 seconds. This QR code can be scanned by students to mark their attendance.
Attendance List: Displays a list of students who have marked their attendance. When a student logs in, scans the QR code, and confirms their attendance, their information is automatically added to this list.
Student Login: Students can log in to the app, scan the QR code provided by the teacher, and click on "Join Attendance" to mark their attendance. Their details will then appear in the teacher's attendance list.

Installation
Clone the repository:
bash
Kodu kopyala
git clone https://github.com/your-username/your-repository.git
Install dependencies:
bash
Kodu kopyala
npm install
Start the project:
bash
Kodu kopyala
expo start
Technologies Used
React Native
React
Expo CLI
JavaScript
License
This project is licensed under the MIT License - see the LICENSE file for details.
