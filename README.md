# Accessible Web Development Showcase

## Project Overview
This project demonstrates a fully accessible website designed with modern web standards, optimized for visually impaired users and inclusive design. It follows WCAG 2.1 AA guidelines and emphasizes semantic HTML, ARIA roles, keyboard navigation, and multimedia accessibility.  

The website consists of three main pages:  
- **Home (`index.html`)** – Features accessibility controls, hero section, content lists, tables, multimedia, and external resources.  
- **About (`about.html`)** – Showcases project mission, accessibility rationale, core features, team members, and FAQs.  
- **Contact (`contact.html`)** – Provides an accessible contact form with live announcements, text-to-speech, and form validation.  

---

## Features Implemented

### Global Features
- **Accessibility Controls:**  
  - Dark Mode, High Contrast, and Adjustable Text Size  
  - Text-to-Speech for main content and form fields  
  - Live regions for screen reader announcements  
- **Semantic HTML & ARIA:**  
  - Proper heading hierarchy (`<h1>`–`<h3>`)  
  - Landmark roles (`banner`, `navigation`, `main`, `contentinfo`)  
  - ARIA labels and `aria-current` for navigation  
- **Keyboard Accessibility:**  
  - Skip links to main content  
  - Keyboard shortcuts for accessibility features (e.g., Alt+A to jump to About Mission)  
  - Focus management for dialogs and form elements  

### Home Page (`index.html`)
- Hero section with responsive `<picture>` element and descriptive `alt` text  
- Accessibility compliance checklist in a table  
- Multimedia support: video and audio elements with controls  
- External links with proper `rel` attributes for security and SEO  

### About Page (`about.html`)
- About mission and “Why Accessibility Matters” sections  
- Core features table with semantic HTML  
- Team member profiles with descriptive images (`alt` attributes)  
- Accessibility dialog and FAQ accordion, fully keyboard accessible  

### Contact Page (`contact.html`)
- Accessible contact form with:  
  - Labels and `aria-describedby` for input guidance  
  - Live validation messages announced to screen readers  
  - Text-to-speech reading of form fields and full form  
  - Toggleable screen reader for form interactions  
- Downloadable brochure accessible via keyboard and screen reader  

---

## Accessibility Improvements
- Full compliance with **WCAG 2.1 AA standards**  
- **Keyboard Navigation:** Skip links, focus management, and shortcuts for all interactive elements  
- **Screen Reader Support:** Live regions, aria attributes, and text-to-speech for content and forms  
- **Visual Accessibility:** High contrast mode, dark mode, scalable typography  
- **Multimedia Accessibility:** Video and audio controls with captions/alt text  
- **Dialogs and Forms:** Accessible dialogs, error announcements, and keyboard-friendly accordions  

---

## SEO & Performance Enhancements
- **Meta Tags:** `description`, `keywords`, `author`, and Open Graph tags for social sharing  
- **Performance:**  
  - Lazy loading of images using `<picture>` element  
  - CDN delivery for Bootstrap CSS/JS  
  - Deferred script loading for non-blocking behavior  
- **Semantic HTML:** Optimized structure for SEO crawlers and screen readers  
- **Link Best Practices:** External links use `rel="noopener noreferrer"`  

---

## Lighthouse Performance (Before & After)


**Home Page:**  
*Note: Before screenshots are not available as accessibility features were implemented during initial development.*
- **After:** <img width="1144" height="589" alt="image" src="https://github.com/user-attachments/assets/db6571bf-122a-4fe0-9e6a-e9cdd4147981" />
 

**About Page:**  
*Note: Before screenshots are not available as accessibility features were implemented during initial development.*
- **After:** <img width="1122" height="551" alt="image" src="https://github.com/user-attachments/assets/25cd4370-a405-4013-8eef-efeb3129f4e8" />


**Contact Page:**  
*Note: Before screenshots are not available as accessibility features were implemented during initial development.*
- **After:**<img width="1137" height="582" alt="image" src="https://github.com/user-attachments/assets/23de0ab0-a00f-4768-8aee-b2e4313062bf" />
  

---

## How to Use
1. Open `index.html` in a web browser.  
2. Navigate using keyboard or mouse.  
3. Use **Accessibility Options** to adjust theme, contrast, text size, or enable text-to-speech.  
4. Explore About and Contact pages for full accessibility features.  

---

## Technologies Used
- HTML5, CSS3, JavaScript (ES6)  
- Bootstrap 5 for responsive layouts  
- SpeechSynthesis API for text-to-speech  
- ARIA roles and attributes for accessibility  

---

## Credits
- Developed by:
  **Maryyam Tanveer (BCSF23M007) , Fatima Mirza (BCSF23M031) , Minahil Shahid (BCSF23M012)**
- Accessibility Guidelines: [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)  
- References: [WebAIM](https://webaim.org/), [Section 508 Guidelines](https://www.section508.gov/)  

---

**This project demonstrates best practices for building an inclusive, accessible, and performant web experience.**
