# 🧸 Toys Main App

<p align="center">
  <b>A mobile app for toy collectors — Buy, Sell, Trade, and Explore Stores.</b><br/>
  Built with React Native + Expo, featuring onboarding, login, store hubs, donations, and user account management.
</p>

<p align="center">
  <a href="https://github.com/GillAustin97/toys-main/actions">
    <img alt="CI" src="https://img.shields.io/github/actions/workflow/status/GillAustin97/toys-main/ci.yml?label=CI"/>
  </a>
  <a href="https://github.com/GillAustin97/toys-main/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/GillAustin97/toys-main?style=social"/>
  </a>
  <a href="https://github.com/GillAustin97/toys-main/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/GillAustin97/toys-main"/>
  </a>
  <a href="https://github.com/GillAustin97/toys-main/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-3A5F0B"/>
  </a>
</p>

## ✨ Features
- **Onboarding Flow:** Multi-screen setup (`onboarding1.jsx`, `onboarding2.jsx`, `onboarding3.jsx`)  
- **Authentication:** Login & Create Account (`user_login.jsx`, `user_CreateAccount.jsx`)  
- **Account Management:** Settings, preferences, notifications, and logout  
- **Store Hubs:** Quick links to Amazon, Disney, Toys R Us, Costco, BoxLunch, B&N, and more (`stores.jsx`)  
- **Buy / Sell / Trade:** Dedicated CTA icons and pages (`buyingSettings.jsx`, `sellingSettings.jsx`, `tradeImage.png`)  
- **Funds & Donations:** Add funds via QR and donation screen (`addFunds.jsx`, `donate.jsx`)  
- **Support & Feedback:** User support and feedback pages (`supportSettings.jsx`, `feedback.jsx`)  
- **Theming:** Classic Toy Soldier Green `#3A5F0B` and Muted Field Green `#57A639`

## 🧱 Tech Stack
- **Framework:** React Native (Expo)  
- **Navigation:** expo-router (`_layout.jsx`)  
- **UI Assets:** Custom PNG logos (Amazon, Disney, Toys R Us, BoxLunch, B&N, Costco, etc.)  
- **Styling:** React Native `StyleSheet`  
- **CI/CD:** GitHub Actions (placeholder workflow)

## 📂 Project Structure
bash
Copy code
toys-main/
  app/            # All app screens & navigation
  assets/         # Logos, icons, QR codes, toy images
  package.json    # Project dependencies
  app.json        # Expo config

## 🚀 Quick Start

### Prerequisites
- Node.js 22+  
- Expo CLI installed globally  
  ```bash
  npm install -g expo

# clone repo
git clone https://github.com/GillAustin97/toys-main.git
cd toys-main

# install dependencies
npm install

# start app
npx expo start
php-template
Copy code

---

## 📸 Screenshots
<p align="center">
  <img src="/assets/logo_toy.png" width="120" alt="App Logo"/>
  <img src="/assets/storeLogos/logo_amazon.png" width="120" alt="Amazon Hub"/>
  <img src="/assets/buySellTrade/buyImage.png" width="120" alt="Buy Screen"/>
</p>

## 📜 License
This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---
💡 Created with passion for toy collectors.
