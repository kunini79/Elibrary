# Altinbas University Internet Programming Project Report

**Project Title:** Muktar Library System  
**Course:** Internet Programming  
**Instructor:** F. Kuzey Edes Huyal  
**Due Date:** 30 April 2026  
**Submission Type:** Manual / Printed Submission  

**Student Name Surname:** [Write your full name here]  
**Student Number:** [Write your student number here]  
**GitHub Username:** [Write your GitHub username here]  
**Public GitHub Repository Link:** [Paste your public GitHub repository link here]  

## 1. Website Aim and Target Users

The aim of the Muktar Library System is to provide a clean, practical, and user-friendly digital library management website that supports the most important workflows of a modern library. The website is designed for librarians, students, researchers, teachers, and public readers who need a simple way to discover books, manage borrowing, track reservations, and review library activity. Instead of presenting only a static list of books, the system behaves like a complete front-end library application with dynamic data handling, search, filters, member records, loan tracking, overdue fine calculation, and administrative controls.

The target users can be divided into two main groups. The first group is library staff. Staff members need to manage the catalog, add new books, register members, check books in and out, and review overdue loans. The second group is library users such as students and researchers. These users need to search for books, identify which titles are available, see whether digital access exists, and reserve books when necessary. The system is built to support both groups through a clear interface and simple navigation.

## 2. Technologies Used

The project uses three core web programming technologies: HTML, CSS, and JavaScript. HTML is used to define the structure of the website and organize the main pages of the application. CSS is used to create the visual design, layout, responsive behavior, color system, spacing, cards, tables, forms, and dark mode. JavaScript is used to make the website interactive and dynamic. It controls navigation between pages, renders book and member data, filters the catalog, handles borrowing and returning books, calculates fines, stores data in the browser, and updates the interface after every action.

The project does not require a server-side database because it is designed as a self-contained front-end web application. For data handling, the website uses the browser's IndexedDB database. This allows books, members, loans, reservations, theme choice, and activity history to remain saved even after the page is refreshed.

## 3. HTML Structure

The main HTML file is `index.html`. It contains the complete structure of the single-page application. The page is divided into a sidebar, a top navigation area, several main views, a dialog for borrowing and reserving books, and a toast message area for feedback. The sidebar contains the Muktar Library brand, navigation buttons, and a small status panel. The main workspace contains the dashboard, catalog, loans, members, and admin sections.

The dashboard section includes statistic cards, recommended books, an action queue, and collection health insights. The catalog section includes filters for category and availability, a sort control, grid/list display controls, and a dynamically rendered catalog area. The loans section contains a table of active loans and a reservation list. The members section displays member cards and recent activity. The admin section contains forms for adding books and registering members.

The HTML also uses semantic elements such as `aside`, `main`, `header`, `section`, `article`, `table`, `form`, and `dialog`. These elements make the document easier to understand and maintain. Form fields are grouped with labels so users can clearly understand what each input is for.

## 4. CSS Styling and Design Choices

The styling is written in `styles.css`. The design goal is to make the application feel modern, calm, organized, and suitable for everyday library operations. The visual style uses a warm neutral background, clean white surfaces, subtle borders, restrained shadows, and a balanced accent color system. The main accent color is green, which gives the system a professional and trustworthy feeling. Additional accent colors are used for book covers, warnings, and highlights so the interface does not feel flat or repetitive.

The layout uses CSS Grid and Flexbox. These tools make the dashboard, catalog, member cards, and admin forms responsive across desktop and smaller screens. The sidebar remains fixed on larger screens and becomes a top section on smaller screens. The catalog can switch between grid and list modes. Cards have an 8px border radius to keep the design clean and consistent. The application also includes a dark mode using CSS custom properties. When dark mode is enabled, the same layout remains available, but the colors change to a darker interface suitable for low-light use.

Care was taken to make the interface readable and practical. Buttons have clear visual hierarchy, tables are easy to scan, forms are spaced consistently, and chips are used to show small pieces of status information such as category, availability, plan, and loan condition.

## 5. JavaScript Usage and Dynamic Features

The JavaScript file is `app.js`. It contains the main logic of the application. The script starts with seed data for books, members, active loans, reservations, and activity records. When the page loads, the app opens an IndexedDB database and checks whether saved records already exist. If there is saved data, it loads that data; otherwise, it writes and uses the demo collection.

JavaScript dynamically renders almost every important part of the interface. The dashboard statistics are calculated from the current data. Active loans are counted, overdue loans are detected, fines are calculated, available copies are computed, and recommended books are selected by rating. The catalog is rendered from the book data and responds to search, category filters, availability filters, sorting, and display mode changes. The system includes 26 demo books, including Turkish literature, history, language, web programming, database systems, and design titles. Borrowing a book creates a loan record with a due date. Returning a book updates the loan and can change a reservation status to ready. Reservations can be placed for a selected member.

The member area is also dynamic. It displays members, their plan, status, active loan count, joined date, and total fines due. The admin forms allow users to add books and register members without editing the source code. Toast messages provide feedback after actions such as adding a book, borrowing a title, returning a loan, and placing a reservation.

## 6. Database Usage or Data Handling

This project uses browser-based data handling instead of a traditional database server. The data is stored in IndexedDB, which is a real client-side browser database and is appropriate for a front-end Internet Programming project because it demonstrates persistent structured data handling without requiring backend setup. The stored state includes books, members, loans, reservations, and activity history. This approach allows the application to behave like a real system during demonstration because changes remain available after refreshing the page.

IndexedDB strengthens the data handling design because it stores structured records directly in the browser. Although a production e-library would normally use a backend database such as MySQL, PostgreSQL, MongoDB, or Firebase, IndexedDB is a practical database solution for this project because the assignment focuses on HTML, CSS, JavaScript, and website behavior.

## 7. Main Pages of the Website

The first main page is the Dashboard. It provides a summary of the whole system, including number of titles, registered members, active loans, fines, recommended books, action items, and collection health. This page is important because it gives library staff a quick overview of the library's current condition.

The second page is the Catalog. It is the main discovery area where users can search books, filter by category, filter by availability, sort by title, author, rating, year, or copies, and switch between grid and list view. Each book card shows the title, author, year, summary, category, availability, rating, and digital access when available. The user can borrow or reserve books directly from this page.

The third page is Loans. It shows all active loans in a table, including book title, member name, due date, status, and return action. Overdue loans show a fine amount. This page is important for circulation management.

The fourth page is Members. It shows registered users of the library and their activity. Each member card includes name, email, membership plan, account status, active loan count, joined date, and fines. This page supports library staff in monitoring member records.

The fifth page is Admin. It contains the book acquisition form and member registration form. This page is important because it allows staff to maintain the library collection and membership list.

## 8. Navigation and User Experience

Navigation is handled through sidebar buttons. Because the project is a single-page application, clicking a navigation item changes the visible section without loading a new HTML file. This makes the website feel fast and smooth. The page title changes depending on the selected section, and the active navigation item is highlighted.

The user experience is designed to be efficient. A global search box helps users search across books and members. The catalog filters allow users to narrow results quickly. The borrowing and reservation process uses a dialog so the user does not lose context. Toast messages confirm actions, which helps users understand that their changes were saved. The app also adapts to smaller screens so it can be used on laptops, tablets, or phones.

## 9. Challenges Faced and Solutions Applied

One challenge was implementing many library features without using a backend server. The solution was to centralize the application data in a JavaScript state object and synchronize it with IndexedDB. This gave the project persistent database behavior while keeping it simple to run.

Another challenge was keeping the interface comprehensive without making it crowded. The solution was to divide the website into clear pages: Dashboard, Catalog, Loans, Members, and Admin. Each page focuses on a specific workflow. This makes the system easier to understand and prevents too much information from appearing in one place.

A third challenge was handling borrowing and reservations realistically. The solution was to calculate available copies by comparing book copy counts with active loans. If a book is borrowed, the active loan count changes. If a book is returned, the availability updates. Reservations are stored separately and can move from waiting to ready.

## 10. Screenshot Descriptions

**Screenshot 1: Dashboard Page**  
This screenshot should show the dashboard with statistic cards, recommended books, action queue, and collection health insights. It is important because it demonstrates that the system provides a high-level operational overview for library staff.

**Screenshot 2: Catalog Page**  
This screenshot should show the catalog grid or list with search, filters, sorting controls, and book cards. It is important because it demonstrates book discovery across 26 books, availability checking, borrowing, reservation, and digital access features.

**Screenshot 3: Loans Page**  
This screenshot should show the active loans table and reservation list. It is important because it demonstrates circulation management, due dates, return actions, and overdue fine tracking.

**Screenshot 4: Members Page**  
This screenshot should show member cards and recent activity. It is important because it demonstrates member management and user engagement tracking.

**Screenshot 5: Admin Page**  
This screenshot should show the add-book form and register-member form. It is important because it demonstrates how library staff can maintain the collection and membership records.

## 11. Conclusion

The Muktar Library System is a complete front-end web application that demonstrates core Internet Programming concepts. It uses HTML for structure, CSS for responsive and aesthetic design, and JavaScript for dynamic features and data handling. The project includes the main functions expected in an e-library system: catalog browsing, search, filtering, borrowing, returning, reservations, member management, admin forms, fine calculation, and local database persistence. The final website is practical, clean, and suitable for demonstrating a holistic digital library workflow.

**Student Signature:** _______________________________
