const DB_NAME = "muktar-library-db";
const DB_VERSION = 1;
const STORES = ["books", "members", "loans", "reservations"];
const today = new Date("2026-04-29T12:00:00+03:00");

const coverPalettes = [
  ["#0c6b5f", "#183a59"],
  ["#b65038", "#4f2d40"],
  ["#355c9a", "#1d2d44"],
  ["#7d5a2f", "#d9a441"],
  ["#3c6e71", "#284b63"],
  ["#7b2d26", "#2f1b25"],
];

const seedState = {
  books: [
    {
      id: "b1",
      title: "Istanbul: Memories and the City",
      author: "Orhan Pamuk",
      category: "Turkish Literature",
      isbn: "9781449373320",
      year: 2003,
      copies: 4,
      digitalUrl: "https://example.com/istanbul",
      rating: 4.8,
      summary: "A reflective literary portrait of Istanbul, memory, identity, and urban change.",
    },
    {
      id: "b2",
      title: "Internet Programming with JavaScript",
      author: "Ayse Demir",
      category: "Computer Science",
      isbn: "9780525559474",
      year: 2024,
      copies: 3,
      digitalUrl: "",
      rating: 4.5,
      summary: "A student-friendly guide to HTML, CSS, JavaScript, browser storage, and dynamic interfaces.",
    },
    {
      id: "b3",
      title: "Modern Database Systems",
      author: "Mehmet Kaya",
      category: "Database Systems",
      isbn: "9780735211292",
      year: 2022,
      copies: 5,
      digitalUrl: "https://example.com/database-systems",
      rating: 4.7,
      summary: "Concepts for relational and browser databases, indexing, transactions, and benchmark methods.",
    },
    {
      id: "b4",
      title: "Memed, My Hawk",
      author: "Yasar Kemal",
      category: "Turkish Literature",
      isbn: "9780385474542",
      year: 1958,
      copies: 6,
      digitalUrl: "",
      rating: 4.7,
      summary: "A classic novel about justice, rural Anatolia, and resistance.",
    },
    {
      id: "b5",
      title: "Software Engineering Practice",
      author: "Zeynep Arslan",
      category: "Software Engineering",
      isbn: "9780134494166",
      year: 2021,
      copies: 2,
      digitalUrl: "https://example.com/software-engineering",
      rating: 4.5,
      summary: "Principles for requirements, interface design, testing, and maintainable application structure.",
    },
    {
      id: "b6",
      title: "A History of the Ottoman Empire",
      author: "Halil Inalcik",
      category: "History",
      isbn: "9780062316097",
      year: 2000,
      copies: 4,
      digitalUrl: "",
      rating: 4.6,
      summary: "A historical study of Ottoman institutions, society, and state formation.",
    },
    {
      id: "b7",
      title: "The Museum of Innocence",
      author: "Orhan Pamuk",
      category: "Turkish Literature",
      isbn: "9780307386243",
      year: 2008,
      copies: 4,
      digitalUrl: "https://example.com/museum-of-innocence",
      rating: 4.4,
      summary: "A novel of love, memory, class, and obsession in Istanbul.",
    },
    {
      id: "b8",
      title: "The Time Regulation Institute",
      author: "Ahmet Hamdi Tanpinar",
      category: "Turkish Literature",
      isbn: "9780143117651",
      year: 1961,
      copies: 3,
      digitalUrl: "",
      rating: 4.6,
      summary: "A satirical Turkish classic about modernization, bureaucracy, and time.",
    },
    {
      id: "b9",
      title: "Madonna in a Fur Coat",
      author: "Sabahattin Ali",
      category: "Turkish Literature",
      isbn: "9780241293850",
      year: 1943,
      copies: 5,
      digitalUrl: "https://example.com/madonna-in-a-fur-coat",
      rating: 4.7,
      summary: "A quiet, emotional novel about loneliness, love, and memory.",
    },
    {
      id: "b10",
      title: "Kuyucakli Yusuf",
      author: "Sabahattin Ali",
      category: "Turkish Literature",
      isbn: "9789753638024",
      year: 1937,
      copies: 4,
      digitalUrl: "",
      rating: 4.5,
      summary: "A social novel about provincial life, injustice, and belonging.",
    },
    {
      id: "b11",
      title: "Selected Poems",
      author: "Nazim Hikmet",
      category: "Poetry",
      isbn: "9780892552740",
      year: 2002,
      copies: 3,
      digitalUrl: "https://example.com/nazim-hikmet-poems",
      rating: 4.8,
      summary: "A collection from one of Turkiye's most influential modern poets.",
    },
    {
      id: "b12",
      title: "The Flea Palace",
      author: "Elif Shafak",
      category: "Contemporary Fiction",
      isbn: "9780143112717",
      year: 2002,
      copies: 3,
      digitalUrl: "",
      rating: 4.3,
      summary: "An Istanbul apartment building becomes a portrait of city life and social tension.",
    },
    {
      id: "b13",
      title: "10 Minutes 38 Seconds in This Strange World",
      author: "Elif Shafak",
      category: "Contemporary Fiction",
      isbn: "9780241293867",
      year: 2019,
      copies: 4,
      digitalUrl: "https://example.com/10-minutes-38-seconds",
      rating: 4.5,
      summary: "A contemporary Istanbul story about memory, friendship, and marginal lives.",
    },
    {
      id: "b14",
      title: "The Bastard of Istanbul",
      author: "Elif Shafak",
      category: "Contemporary Fiction",
      isbn: "9780143112718",
      year: 2006,
      copies: 3,
      digitalUrl: "",
      rating: 4.2,
      summary: "A family novel exploring identity, memory, and historical inheritance.",
    },
    {
      id: "b15",
      title: "Istanbul: A Tale of Three Cities",
      author: "Bettany Hughes",
      category: "History",
      isbn: "9780306825842",
      year: 2017,
      copies: 4,
      digitalUrl: "https://example.com/istanbul-three-cities",
      rating: 4.6,
      summary: "A wide historical account of Byzantium, Constantinople, and Istanbul.",
    },
    {
      id: "b16",
      title: "The Ottoman Centuries",
      author: "Lord Kinross",
      category: "History",
      isbn: "9780688080938",
      year: 1977,
      copies: 2,
      digitalUrl: "",
      rating: 4.4,
      summary: "A narrative history of the Ottoman Empire across its major periods.",
    },
    {
      id: "b17",
      title: "Turkey: A Modern History",
      author: "Erik J. Zurcher",
      category: "History",
      isbn: "9781784531874",
      year: 2017,
      copies: 3,
      digitalUrl: "https://example.com/turkey-modern-history",
      rating: 4.5,
      summary: "A modern history of Turkiye from late Ottoman reforms to contemporary politics.",
    },
    {
      id: "b18",
      title: "An Introduction to Turkish Law",
      author: "Turgut Akinturk",
      category: "Law",
      isbn: "9789041123162",
      year: 2011,
      copies: 2,
      digitalUrl: "",
      rating: 4.1,
      summary: "A legal overview covering institutions, civil law, obligations, and public law.",
    },
    {
      id: "b19",
      title: "Turkish Grammar",
      author: "Geoffrey Lewis",
      category: "Language",
      isbn: "9780198700364",
      year: 2000,
      copies: 4,
      digitalUrl: "https://example.com/turkish-grammar",
      rating: 4.6,
      summary: "A detailed reference for Turkish grammar, syntax, and language structure.",
    },
    {
      id: "b20",
      title: "Elementary Turkish",
      author: "Kurtulus Oztopcu",
      category: "Language",
      isbn: "9789757981409",
      year: 2006,
      copies: 5,
      digitalUrl: "",
      rating: 4.4,
      summary: "A practical Turkish language textbook for beginners and classroom learners.",
    },
    {
      id: "b21",
      title: "Database Design for Web Applications",
      author: "Fatma Kuzey",
      category: "Database Systems",
      isbn: "9786050000001",
      year: 2025,
      copies: 5,
      digitalUrl: "https://example.com/database-design-web",
      rating: 4.7,
      summary: "A practical guide to web application data models, IndexedDB, SQL concepts, and benchmarks.",
    },
    {
      id: "b22",
      title: "Client-Side Storage with IndexedDB",
      author: "Eman Ibrahim",
      category: "Web Programming",
      isbn: "9786050000002",
      year: 2026,
      copies: 4,
      digitalUrl: "https://example.com/indexeddb-storage",
      rating: 4.8,
      summary: "A focused guide to IndexedDB object stores, transactions, search, and browser persistence.",
    },
    {
      id: "b23",
      title: "Benchmarking JavaScript Applications",
      author: "Hussein Mohammed",
      category: "Web Programming",
      isbn: "9786050000003",
      year: 2025,
      copies: 3,
      digitalUrl: "",
      rating: 4.5,
      summary: "Methods for measuring search, rendering, storage, and user interaction performance.",
    },
    {
      id: "b24",
      title: "Responsive Interface Design",
      author: "Tolga Orkun",
      category: "Design",
      isbn: "9786050000004",
      year: 2024,
      copies: 4,
      digitalUrl: "https://example.com/responsive-interface-design",
      rating: 4.6,
      summary: "A design handbook for accessible, responsive, and maintainable web interfaces.",
    },
    {
      id: "b25",
      title: "Cybersecurity Basics for Students",
      author: "Selin Yilmaz",
      category: "Computer Science",
      isbn: "9786050000005",
      year: 2023,
      copies: 3,
      digitalUrl: "",
      rating: 4.3,
      summary: "An introduction to authentication, browser safety, secure forms, and data protection.",
    },
    {
      id: "b26",
      title: "Data Visualization in the Browser",
      author: "Can Aydin",
      category: "Computer Science",
      isbn: "9786050000006",
      year: 2022,
      copies: 4,
      digitalUrl: "https://example.com/browser-data-visualization",
      rating: 4.4,
      summary: "Techniques for turning web application data into dashboards, charts, and insights.",
    },
  ],
  members: [
    { id: "m1", name: "Fatma Kuzey", email: "fatma.kuzey@example.com", plan: "Student", status: "Active", joined: "2025-09-14" },
    { id: "m2", name: "Eman Ibrahim", email: "eman.ibrahim@example.com", plan: "Faculty", status: "Active", joined: "2024-03-02" },
    { id: "m3", name: "Hussein Mohammed", email: "hussein.mohammed@example.com", plan: "Researcher", status: "Review", joined: "2026-01-11" },
    { id: "m4", name: "Tolga Orkun", email: "tolga.orkun@example.com", plan: "Public", status: "Active", joined: "2025-06-20" },
  ],
  loans: [
    { id: "l1", bookId: "b1", memberId: "m2", borrowedAt: "2026-04-10", dueAt: "2026-04-24", returnedAt: "" },
    { id: "l2", bookId: "b4", memberId: "m1", borrowedAt: "2026-04-17", dueAt: "2026-05-01", returnedAt: "" },
    { id: "l3", bookId: "b3", memberId: "m4", borrowedAt: "2026-04-21", dueAt: "2026-05-05", returnedAt: "" },
  ],
  reservations: [
    { id: "r1", bookId: "b5", memberId: "m3", createdAt: "2026-04-23", status: "Waiting" },
  ],
  activity: [
    "Fatma borrowed Memed, My Hawk.",
    "Hussein reserved Software Engineering Practice.",
    "Eman has an overdue loan.",
  ],
};

let db;
let state = structuredClone(seedState);
let currentView = "dashboard";
let catalogMode = "grid";

const els = {
  pageTitle: document.querySelector("#pageTitle"),
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  globalSearch: document.querySelector("#globalSearch"),
  categoryFilter: document.querySelector("#categoryFilter"),
  availabilityFilter: document.querySelector("#availabilityFilter"),
  sortBooks: document.querySelector("#sortBooks"),
  catalogGrid: document.querySelector("#catalogGrid"),
  catalogCount: document.querySelector("#catalogCount"),
  statsGrid: document.querySelector("#statsGrid"),
  featuredBooks: document.querySelector("#featuredBooks"),
  actionQueue: document.querySelector("#actionQueue"),
  insightGrid: document.querySelector("#insightGrid"),
  loansTable: document.querySelector("#loansTable"),
  reservationList: document.querySelector("#reservationList"),
  memberGrid: document.querySelector("#memberGrid"),
  memberActivity: document.querySelector("#memberActivity"),
  checkoutDialog: document.querySelector("#checkoutDialog"),
  checkoutForm: document.querySelector("#checkoutForm"),
  checkoutTitle: document.querySelector("#checkoutTitle"),
  toast: document.querySelector("#toast"),
};

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      STORES.forEach((storeName) => {
        if (!database.objectStoreNames.contains(storeName)) {
          const store = database.createObjectStore(storeName, { keyPath: "id" });
          if (storeName === "books") {
            store.createIndex("title", "title", { unique: false });
            store.createIndex("author", "author", { unique: false });
            store.createIndex("category", "category", { unique: false });
          }
          if (storeName === "members") {
            store.createIndex("name", "name", { unique: false });
            store.createIndex("email", "email", { unique: true });
          }
        }
      });
      if (!database.objectStoreNames.contains("meta")) {
        database.createObjectStore("meta", { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transactionDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

function requestResult(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAll(storeName) {
  const transaction = db.transaction(storeName, "readonly");
  return requestResult(transaction.objectStore(storeName).getAll());
}

async function getMeta(key) {
  const transaction = db.transaction("meta", "readonly");
  return requestResult(transaction.objectStore("meta").get(key));
}

async function writeStateToDatabase(nextState) {
  const transaction = db.transaction([...STORES, "meta"], "readwrite");
  STORES.forEach((storeName) => {
    const store = transaction.objectStore(storeName);
    store.clear();
    nextState[storeName].forEach((record) => store.put(record));
  });
  transaction.objectStore("meta").put({ key: "activity", value: nextState.activity });
  transaction.objectStore("meta").put({ key: "initialized", value: true });
  await transactionDone(transaction);
}

async function loadStateFromDatabase() {
  db = await openDatabase();
  const initialized = await getMeta("initialized");
  if (!initialized?.value) {
    await writeStateToDatabase(seedState);
    return structuredClone(seedState);
  }
  const activity = await getMeta("activity");
  const storedState = {
    books: await getAll("books"),
    members: await getAll("members"),
    loans: await getAll("loans"),
    reservations: await getAll("reservations"),
    activity: activity?.value || [],
  };
  const upgradedState = mergeSeedRecords(storedState);
  if (upgradedState.changed) await writeStateToDatabase(upgradedState.state);
  return upgradedState.state;
}

function saveState() {
  writeStateToDatabase(state).catch(() => toast("Database save failed. Please export your data and reload."));
}

function mergeSeedRecords(storedState) {
  let changed = false;
  const nextState = structuredClone(storedState);
  STORES.forEach((storeName) => {
    const existingIds = new Set(nextState[storeName].map((record) => record.id));
    seedState[storeName].forEach((record) => {
      if (!existingIds.has(record.id)) {
        nextState[storeName].push(structuredClone(record));
        changed = true;
      }
    });
  });
  if (!nextState.activity?.length) {
    nextState.activity = structuredClone(seedState.activity);
    changed = true;
  }
  return { state: nextState, changed };
}

function uid(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("tr-TR", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function daysBetween(dateA, dateB) {
  return Math.ceil((new Date(`${dateA}T12:00:00`) - dateB) / 86400000);
}

function activeLoans() {
  return state.loans.filter((loan) => !loan.returnedAt);
}

function loansForBook(bookId) {
  return activeLoans().filter((loan) => loan.bookId === bookId);
}

function availableCopies(book) {
  return Math.max(0, book.copies - loansForBook(book.id).length);
}

function findBook(id) {
  return state.books.find((book) => book.id === id);
}

function findMember(id) {
  return state.members.find((member) => member.id === id);
}

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function bookSearchText(book) {
  return normalizeText([book.title, book.author, book.category, book.isbn, book.summary, book.year].join(" "));
}

function memberSearchText(member) {
  return normalizeText([member.name, member.email, member.plan, member.status].join(" "));
}

function money(value) {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(value);
}

function calculateFine(loan) {
  const overdueDays = Math.max(0, -daysBetween(loan.dueAt, today));
  return overdueDays * 25;
}

function render() {
  document.querySelector("#todayLabel").textContent = new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(today);
  populateFilters();
  renderDashboard();
  renderCatalog();
  renderLoans();
  renderMembers();
  renderAdminSelects();
}

function populateFilters() {
  const current = els.categoryFilter.value || "all";
  const categories = ["all", ...new Set(state.books.map((book) => book.category).sort())];
  els.categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}">${category === "all" ? "All categories" : category}</option>`)
    .join("");
  els.categoryFilter.value = categories.includes(current) ? current : "all";
}

function renderDashboard() {
  const loans = activeLoans();
  const overdue = loans.filter((loan) => calculateFine(loan) > 0);
  const digital = state.books.filter((book) => book.digitalUrl).length;
  const totalCopies = state.books.reduce((sum, book) => sum + book.copies, 0);
  const borrowed = loans.length;
  const availability = Math.round(((totalCopies - borrowed) / totalCopies) * 100);
  const fines = loans.reduce((sum, loan) => sum + calculateFine(loan), 0);

  document.querySelector("#healthLabel").textContent = `${availability}% collection availability`;
  els.statsGrid.innerHTML = [
    ["Titles", state.books.length, "Curated collection"],
    ["Members", state.members.length, "Registered readers"],
    ["Active Loans", loans.length, `${overdue.length} overdue`],
    ["Fines", money(fines), "Accrued balance"],
  ]
    .map(([label, value, sub]) => `<article class="stat-card"><span>${label}</span><strong>${value}</strong><small>${sub}</small></article>`)
    .join("");

  els.featuredBooks.innerHTML = [...state.books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map((book) => bookCard(book, false))
    .join("");

  const tasks = [
    ...overdue.map((loan) => {
      const book = findBook(loan.bookId);
      const member = findMember(loan.memberId);
      return [`Overdue: ${book.title}`, `${member.name} owes ${money(calculateFine(loan))}. Due ${formatDate(loan.dueAt)}.`];
    }),
    ...state.reservations
      .filter((reservation) => reservation.status === "Waiting")
      .map((reservation) => {
        const book = findBook(reservation.bookId);
        const member = findMember(reservation.memberId);
        return [`Reservation waiting`, `${member.name} is waiting for ${book.title}.`];
      }),
    [`Low stock watch`, `${state.books.filter((book) => availableCopies(book) <= 1).length} titles have one or fewer available copies.`],
  ];

  els.actionQueue.innerHTML = tasks
    .slice(0, 5)
    .map(([title, detail]) => `<article class="task-item"><strong>${title}</strong><span>${detail}</span></article>`)
    .join("");

  const categoryCounts = state.books.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 1;
    return acc;
  }, {});
  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0];

  els.insightGrid.innerHTML = [
    ["Availability", `${availability}%`, "Copies ready for readers", availability],
    ["Digital Coverage", `${Math.round((digital / state.books.length) * 100)}%`, "Titles with online access", Math.round((digital / state.books.length) * 100)],
    ["Strongest Category", topCategory?.[0] || "None", `${topCategory?.[1] || 0} titles in this area`, Math.min(100, ((topCategory?.[1] || 0) / state.books.length) * 100)],
  ]
    .map(
      ([title, value, detail, percent]) =>
        `<article class="insight-card"><span class="chip">${title}</span><h2>${value}</h2><p>${detail}</p><div class="meter"><span style="width:${percent}%"></span></div></article>`,
    )
    .join("");
}

function filteredBooks() {
  const query = normalizeText(els.globalSearch.value.trim());
  const category = els.categoryFilter.value;
  const availability = els.availabilityFilter.value;
  const sortBy = els.sortBooks.value;

  return state.books
    .filter((book) => {
      const matchesQuery = bookSearchText(book).includes(query);
      const matchesCategory = category === "all" || book.category === category;
      const copies = availableCopies(book);
      const matchesAvailability =
        availability === "all" ||
        (availability === "available" && copies > 0) ||
        (availability === "borrowed" && copies < book.copies) ||
        (availability === "digital" && book.digitalUrl);
      return matchesQuery && matchesCategory && matchesAvailability;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      if (sortBy === "copies") return availableCopies(b) - availableCopies(a);
      return String(a[sortBy]).localeCompare(String(b[sortBy]));
    });
}

function renderCatalog() {
  const books = filteredBooks();
  const query = els.globalSearch.value.trim();
  els.catalogGrid.className = `catalog-grid ${catalogMode === "list" ? "list-mode" : ""}`;
  els.catalogCount.textContent = `${books.length} of ${state.books.length} ${state.books.length === 1 ? "title" : "titles"} shown${query ? ` for "${query}"` : ""}`;
  els.catalogGrid.innerHTML = books.length
    ? books.map((book) => bookCard(book, true, catalogMode === "list")).join("")
    : `<article class="empty-state">
        <strong>No books found</strong>
        <p>Try searching by title, author, category, ISBN, summary, or year.</p>
      </article>`;
}

function bookCard(book, withActions, list = false) {
  const copies = availableCopies(book);
  const palette = coverPalettes[Math.abs(hash(book.id)) % coverPalettes.length];
  const access = copies > 0 ? `${copies} available` : "Unavailable";
  const digital = book.digitalUrl ? `<span class="chip">Digital</span>` : "";
  const actions = withActions
    ? `<div class="book-actions">
        <button data-checkout="${book.id}" ${copies === 0 ? "disabled" : ""}>Borrow</button>
        <button data-reserve="${book.id}">Reserve</button>
        ${book.digitalUrl ? `<button data-open="${book.digitalUrl}">Read</button>` : ""}
      </div>`
    : "";
  return `<article class="book-card ${list ? "list" : ""}">
    <div class="cover" style="--cover-a:${palette[0]};--cover-b:${palette[1]}"><strong>${initialWords(book.title)}</strong></div>
    <div class="book-meta">
      <strong>${book.title}</strong>
      <p>${book.author} · ${book.year}</p>
      <p>${book.summary}</p>
      <div class="chip-row"><span class="chip">${book.category}</span><span class="chip">${access}</span><span class="chip">★ ${book.rating || "New"}</span>${digital}</div>
      ${actions}
    </div>
  </article>`;
}

function initialWords(title) {
  return title
    .split(" ")
    .slice(0, 3)
    .map((word) => word[0])
    .join("");
}

function hash(value) {
  return value.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function renderLoans() {
  const loans = activeLoans();
  els.loansTable.innerHTML =
    loans
      .map((loan) => {
        const book = findBook(loan.bookId);
        const member = findMember(loan.memberId);
        const fine = calculateFine(loan);
        return `<tr>
          <td>${book.title}</td>
          <td>${member.name}</td>
          <td>${formatDate(loan.dueAt)}</td>
          <td><span class="chip">${fine ? `Overdue · ${money(fine)}` : "On time"}</span></td>
          <td><button data-return="${loan.id}">Return</button></td>
        </tr>`;
      })
      .join("") || `<tr><td colspan="5">No active loans.</td></tr>`;

  els.reservationList.innerHTML =
    state.reservations
      .map((reservation) => {
        const book = findBook(reservation.bookId);
        const member = findMember(reservation.memberId);
        return `<article class="task-item"><strong>${book.title}</strong><span>${member.name} · ${reservation.status} since ${formatDate(reservation.createdAt)}</span></article>`;
      })
      .join("") || `<article class="task-item"><strong>No reservations</strong><span>The hold shelf is clear.</span></article>`;
}

function renderMembers() {
  const query = normalizeText(els.globalSearch.value.trim());
  const members = state.members.filter((member) => memberSearchText(member).includes(query));
  els.memberGrid.innerHTML = members
    .map((member) => {
      const loans = activeLoans().filter((loan) => loan.memberId === member.id);
      const fines = loans.reduce((sum, loan) => sum + calculateFine(loan), 0);
      return `<article class="member-card">
        <header><span class="avatar">${member.name.slice(0, 1)}</span><div><strong>${member.name}</strong><p>${member.email}</p></div></header>
        <div class="chip-row"><span class="chip">${member.plan}</span><span class="chip">${member.status}</span><span class="chip">${loans.length} loans</span></div>
        <p>Joined ${formatDate(member.joined)} · ${money(fines)} due</p>
      </article>`;
    })
    .join("");

  els.memberActivity.innerHTML = state.activity
    .slice(-8)
    .reverse()
    .map((item) => `<article class="task-item"><strong>${item}</strong><span>${new Intl.DateTimeFormat("en", { timeStyle: "short" }).format(new Date())}</span></article>`)
    .join("");
}

function renderAdminSelects() {
  const options = state.members.map((member) => `<option value="${member.id}">${member.name} · ${member.plan}</option>`).join("");
  els.checkoutForm.elements.memberId.innerHTML = options;
}

function showView(view) {
  currentView = view;
  els.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  els.views.forEach((section) => section.classList.toggle("active-view", section.id === view));
  els.pageTitle.textContent = view[0].toUpperCase() + view.slice(1);
  render();
}

function openCheckout(bookId) {
  const book = findBook(bookId);
  els.checkoutForm.elements.mode.value = "borrow";
  els.checkoutForm.elements.bookId.value = bookId;
  els.checkoutTitle.textContent = `Borrow ${book.title}`;
  document.querySelector("#loanPeriodField").style.display = "grid";
  els.checkoutForm.querySelector(".primary-button").textContent = "Confirm";
  els.checkoutDialog.showModal();
}

function openReservation(bookId) {
  const book = findBook(bookId);
  els.checkoutForm.elements.mode.value = "reserve";
  els.checkoutForm.elements.bookId.value = bookId;
  els.checkoutTitle.textContent = `Reserve ${book.title}`;
  document.querySelector("#loanPeriodField").style.display = "none";
  els.checkoutForm.querySelector(".primary-button").textContent = "Reserve";
  els.checkoutDialog.showModal();
}

function checkoutBook(data) {
  const book = findBook(data.bookId);
  if (!book || availableCopies(book) <= 0) {
    toast("No copies are currently available.");
    return;
  }
  const borrowedAt = toInputDate(today);
  const due = new Date(today);
  due.setDate(due.getDate() + Number(data.days));
  const loan = {
    id: uid("l"),
    bookId: data.bookId,
    memberId: data.memberId,
    borrowedAt,
    dueAt: toInputDate(due),
    returnedAt: "",
  };
  state.loans.push(loan);
  const member = findMember(data.memberId);
  state.activity.push(`${member.name} borrowed ${book.title}.`);
  saveState();
  render();
  toast(`${book.title} checked out to ${member.name}.`);
}

function returnLoan(id) {
  const loan = state.loans.find((item) => item.id === id);
  if (!loan) return;
  loan.returnedAt = toInputDate(today);
  const book = findBook(loan.bookId);
  const member = findMember(loan.memberId);
  state.activity.push(`${member.name} returned ${book.title}.`);

  const waiting = state.reservations.find((reservation) => reservation.bookId === book.id && reservation.status === "Waiting");
  if (waiting) waiting.status = "Ready";

  saveState();
  render();
  toast(`${book.title} returned successfully.`);
}

function reserveBook(bookId, memberId) {
  const book = findBook(bookId);
  const member = findMember(memberId);
  state.reservations.push({ id: uid("r"), bookId, memberId, createdAt: toInputDate(today), status: availableCopies(book) > 0 ? "Ready" : "Waiting" });
  state.activity.push(`${member.name} reserved ${book.title}.`);
  saveState();
  render();
  toast(`Reservation placed for ${book.title}.`);
}

function toInputDate(date) {
  return date.toISOString().slice(0, 10);
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function addBook(form) {
  const data = Object.fromEntries(new FormData(form));
  state.books.push({
    id: uid("b"),
    title: data.title.trim(),
    author: data.author.trim(),
    category: data.category.trim(),
    isbn: data.isbn.trim(),
    year: Number(data.year),
    copies: Number(data.copies),
    digitalUrl: data.digitalUrl.trim(),
    rating: 4.2,
    summary: data.summary.trim(),
  });
  form.reset();
  saveState();
  render();
  toast("Book added to the collection.");
}

function addMember(form) {
  const data = Object.fromEntries(new FormData(form));
  state.members.push({
    id: uid("m"),
    name: data.name.trim(),
    email: data.email.trim(),
    plan: data.plan,
    status: data.status,
    joined: toInputDate(today),
  });
  state.activity.push(`${data.name.trim()} joined the library.`);
  form.reset();
  saveState();
  render();
  toast("Member registered.");
}

function wireEvents() {
  els.navItems.forEach((item) => item.addEventListener("click", () => showView(item.dataset.view)));
  document.querySelectorAll("[data-jump]").forEach((button) => button.addEventListener("click", () => showView(button.dataset.jump)));
  els.globalSearch.addEventListener("input", () => {
    if (els.globalSearch.value.trim() && !["catalog", "members"].includes(currentView)) {
      showView("catalog");
      return;
    }
    render();
  });
  [els.categoryFilter, els.availabilityFilter, els.sortBooks].forEach((control) => control.addEventListener("input", render));

  document.querySelector(".segmented").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    catalogMode = button.dataset.mode;
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.toggle("active", item === button));
    renderCatalog();
  });

  document.body.addEventListener("click", (event) => {
    const checkout = event.target.closest("[data-checkout]");
    const reserve = event.target.closest("[data-reserve]");
    const returnButton = event.target.closest("[data-return]");
    const openButton = event.target.closest("[data-open]");
    if (checkout) openCheckout(checkout.dataset.checkout);
    if (reserve) openReservation(reserve.dataset.reserve);
    if (returnButton) returnLoan(returnButton.dataset.return);
    if (openButton) window.open(openButton.dataset.open, "_blank", "noopener,noreferrer");
  });

  els.checkoutForm.addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(els.checkoutForm));
    if (data.mode === "reserve") reserveBook(data.bookId, data.memberId);
    else checkoutBook(data);
    els.checkoutDialog.close();
  });

  document.querySelector("#bookForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addBook(event.currentTarget);
  });

  document.querySelector("#memberForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addMember(event.currentTarget);
  });

  document.querySelector("#addBookBtn").addEventListener("click", () => showView("admin"));
  document.querySelector("#addMemberBtn").addEventListener("click", () => showView("admin"));

  document.querySelector("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("muktar-theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

if (localStorage.getItem("muktar-theme") === "dark") document.body.classList.add("dark");

async function boot() {
  try {
    state = await loadStateFromDatabase();
  } catch {
    state = structuredClone(seedState);
    toast("IndexedDB unavailable. The app is running with temporary demo data.");
  }
  wireEvents();
  render();
}

boot();
