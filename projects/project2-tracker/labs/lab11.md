# LAB11: Local Favorites Tracker - HTML Foundation & Basic CSS

**Delivery Mode:** In-Class Demo ➜ Hands-On Build (80 minutes)

**Goal:** Set up Project 2 repository, build a complete HTML structure with forms, and establish a CSS foundation with an organized skeleton structure. Complete the header styling to see visual progress.

## Learning Outcomes
- Set up a new GitHub repository for Project 2
- Understand HTML form structure and accessibility
- Build complete semantic HTML with forms
- Create organized CSS file structure with sections
- Apply foundational CSS (reset, layout, header styling)
- Establish professional development workflow

## Prerequisites
- Completed LAB10.5 (Typography & Design Polish)
- Strong understanding of HTML semantic elements
- Basic CSS knowledge (selectors, properties, box model)
- GitHub Desktop installed and configured
- VS Code with Live Server extension

---

## 🎯 Project 2 Overview

Before we build, let's understand what we're creating:

**Project 2: Local Favorites Tracker** is a web application where you'll save and manage your favorite local places (coffee shops, restaurants, parks, study spots, etc.).

This lab builds the visual interface. In LAB12-15, you'll add JavaScript to make it functional.

### What You'll Build Today

A fully-styled, responsive web page with:

- Header with title and description
- Add Favorite Form with inputs for name, category, rating, and notes
- Search/Filter Section with search input and category dropdown
- Favorites Display Area with CSS Grid layout for cards
- Footer with attribution
- Responsive design that works on mobile and desktop

---

## 📁 Step 1: Create GitHub Repository and Local Project

### Part A: Create GitHub Repository

1. Go to GitHub.com and sign in to your account
2. Click the "+" icon in the top-right corner → "New repository"
3. Configure your repository:
   - **Repository name:** `40363-local-favorites-tracker`
   - **Description:** "Project 2: Local Favorites Tracker - WRIT 40363 Fall 2025"
   - **Visibility:** Public
   - **Initialize:** ✅ Check "Add a README file"
   - **Add .gitignore:** None (we'll add later if needed)
   - **License:** None (or MIT if you prefer)
4. Click "Create repository"
5. Copy the repository URL (should be `https://github.com/YOUR-USERNAME/40363-local-favorites-tracker.git`)

### Part B: Clone Repository to Your Computer

Using GitHub Desktop:

1. Open GitHub Desktop
2. File → Clone Repository (or Cmd/Ctrl + Shift + O)
3. Select the "GitHub.com" tab
4. Find `40363-local-favorites-tracker` in the list
5. **Local Path:** Choose Documents/GitHub (or your preferred location)
6. Click "Clone"

GitHub Desktop will download your repository to your computer.

### Part C: Create Project Structure

Open the cloned repository in VS Code:

1. In GitHub Desktop: Repository → Open in Visual Studio Code (or Cmd/Ctrl + Shift + A)
2. In VS Code's file explorer, you should see README.md already there
3. Create three folders (right-click in file explorer → "New Folder"):
   - `css`
   - `js`
   - `images`
4. Create files (right-click in appropriate folders → "New File"):
   - `index.html` (in root folder)
   - `styles.css` (inside css folder)
   - `app.js` (inside js folder)

Your folder structure should now be:

```
40363-local-favorites-tracker/
├── README.md              # (Already created by GitHub)
├── index.html             # (You just created)
├── css/
│   └── styles.css        # (You just created)
├── js/
│   └── app.js            # (You just created)
└── images/
    └── (empty for now)
```

### Part D: Initial Git Commit

Using GitHub Desktop:

1. Switch to GitHub Desktop - you should see your new files in the "Changes" tab
2. Review changes - you should see:
   - `index.html`
   - `css/styles.css`
   - `js/app.js`
3. Write commit message:
   - **Summary:** `Add project structure for Local Favorites Tracker`
   - **Description:**
     ```
     - Created HTML, CSS, and JS files
     - Set up folders for organized project structure
     - Ready to begin LAB11 HTML/CSS build
     ```
4. Click "Commit to main"
5. Click "Push origin" (blue button at top)

Verify on GitHub:

1. Go to your repository page on GitHub.com
2. Refresh the page
3. You should see your new folders and files

### ✅ Checkpoint: Verify Setup

Before continuing, make sure:

- [ ] GitHub repository created and visible online
- [ ] Project cloned to your local computer
- [ ] Folder structure created with all files
- [ ] Project open in VS Code
- [ ] Initial commit pushed to GitHub
- [ ] You can see your files on GitHub.com

---

## 📋 HTML Forms Primer

Before we build the form in Step 2, let's understand HTML forms fundamentals.

⏱️ **Time:** 10-15 minutes (instructor-led explanation)

🎯 **Goal:** Learn the form elements you'll use to build the favorites tracker interface

### What is an HTML Form?

An HTML form is a container for interactive elements that collect user input. Forms typically:

- Gather information from users (text, selections, numbers)
- Validate that information (required fields, number ranges)
- Submit that data somewhere (to a server, or in our case, to JavaScript)

In Project 2, the form will let users add their favorite places with details like name, category, rating, and notes.

### Basic Form Structure

Every form follows this pattern:

```html
<form id="unique-id">
    <label for="input-id">Field Label:</label>
    <input type="text" id="input-id" name="fieldName" required>

    <button type="submit">Submit</button>
</form>
```

**Key Components:**

- `<form>` - Container for all form elements
- `<label>` - Describes what the input is for (accessibility!)
- `<input>` / `<select>` / `<textarea>` - Where users enter data
- `<button type="submit">` - Triggers form submission

### Form Elements You'll Use in LAB11

#### 1. Text Input - For Short Text

```html
<label for="place-name">Place Name:</label>
<input
    type="text"
    id="place-name"
    name="name"
    placeholder="e.g., Addison Coffee Roasters"
    required
>
```

**When to use:** Names, titles, short descriptions

#### 2. Select Dropdown - For Predefined Choices

```html
<label for="category">Category:</label>
<select id="category" name="category" required>
    <option value="">-- Select Category --</option>
    <option value="coffee">Coffee Shop</option>
    <option value="restaurant">Restaurant</option>
    <option value="park">Park</option>
    <option value="entertainment">Entertainment</option>
</select>
```

**When to use:** Limited, predefined options (categories, states, yes/no)

**Important:** First `<option>` should be a placeholder with empty `value=""`

#### 3. Number Input - For Numeric Values

```html
<label for="rating">Rating (1-5):</label>
<input
    type="number"
    id="rating"
    name="rating"
    min="1"
    max="5"
    value="5"
    required
>
```

**When to use:** Ages, quantities, ratings, prices

**Attributes:**
- `min` - Minimum allowed value
- `max` - Maximum allowed value
- `value` - Default starting value

#### 4. Textarea - For Multi-Line Text

```html
<label for="notes">Notes:</label>
<textarea
    id="notes"
    name="notes"
    rows="4"
    placeholder="What makes this place special?"
></textarea>
```

**When to use:** Comments, descriptions, longer text (not required in our form)

**Note:** `<textarea>` has opening and closing tags (no self-closing)

#### 5. Submit Button

```html
<button type="submit" class="btn btn-primary">
    Add Favorite
</button>
```

**Important:** `type="submit"` tells the browser this button submits the form

### Form Attributes Explained

Every form input needs certain attributes to work properly:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `id` | Unique identifier for JavaScript and label connection | `id="place-name"` |
| `name` | Data field name (what JavaScript uses to get the value) | `name="name"` |
| `type` | What kind of input (text, number, email, etc.) | `type="text"` |
| `required` | Must be filled out before submission | `required` |
| `placeholder` | Example text shown inside empty input | `placeholder="Enter name"` |
| `min` / `max` | Limits for number inputs | `min="1" max="5"` |

💡 **Best Practice:** Always give inputs both `id` and `name` attributes. They serve different purposes:
- `id` - For labels and JavaScript selectors
- `name` - For identifying data when processing form submission

### Accessibility: Labels Are REQUIRED

Every input must have a label. This helps:

- Screen reader users understand what each field is for
- Users click the label to focus the input
- Form validation show clear error messages

Proper label association:

```html
<!-- ✅ CORRECT: label "for" matches input "id" -->
<label for="place-name">Place Name:</label>
<input type="text" id="place-name" name="name">

<!-- ❌ WRONG: No connection between label and input -->
<label>Place Name:</label>
<input type="text" name="name">
```

The `for` attribute on `<label>` must match the `id` attribute on the input.

### Form Validation Attributes

HTML5 provides built-in validation:

```html
<!-- Required field - can't be empty -->
<input type="text" id="name" name="name" required>

<!-- Number with min/max constraints -->
<input type="number" id="rating" name="rating" min="1" max="5" required>

<!-- Email validation -->
<input type="email" id="email" name="email" required>

<!-- Pattern matching with regex -->
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
```

Browser behavior:
- Shows error messages automatically
- Prevents submission if validation fails
- Provides visual feedback (red borders, error text)

### What Happens When You Submit a Form?

**Default behavior (without JavaScript):**

1. User clicks submit button
2. Browser validates all required fields
3. If valid, page reloads and sends data to server (or refreshes)
4. Data is lost if not captured

**With JavaScript (what we'll do in LAB12-15):**

1. User clicks submit button
2. JavaScript intercepts with `event.preventDefault()`
3. JavaScript reads form data using FormData or `.value`
4. JavaScript processes data (add to array, display on page)
5. Page does NOT reload - data stays on screen

In LAB11, we add a temporary JavaScript handler that prevents the default reload:

```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page reload
    alert('Form submitted! JavaScript will handle this in LAB12.');
});
```

This lets us build and test the form without losing our work on every submission.

### ✅ Forms Primer Complete

You now understand:

- ✅ Form structure (`<form>`, labels, inputs, button)
- ✅ Five input types (text, select, number, textarea, button)
- ✅ Essential attributes (id, name, type, required, for)
- ✅ Accessibility with proper labels
- ✅ How form submission works

**Next:** Let's build the actual HTML structure with all these elements!

---

## 🏗️ Step 2: Build the HTML Structure

Open `index.html` and create the semantic HTML structure:

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Track and manage your favorite local places">
    <title>My Local Favorites Tracker</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Content will go here -->

    <!-- JavaScript at end of body -->
    <script src="js/app.js"></script>
</body>
</html>
```

### Add Header Section

Between the `<body>` tags, add:

```html
<!-- Header Section -->
<header>
    <div class="container">
        <h1>📍 My Local Favorites</h1>
        <p class="subtitle">Track your favorite places around town</p>
    </div>
</header>
```

**Key Points:**
- `<header>` for semantic page header
- `.container` class for centered content with max-width
- Emoji for visual interest (you can customize this)

### Add Main Content Container

After the header:

```html
<!-- Main Content -->
<main class="container">
    <!-- All sections will go inside main -->
</main>
```

### Build the Add Favorite Form Section

Inside `<main>`, add the form section:

```html
<!-- Add Favorite Form Section -->
<section class="add-section">
    <h2>Add New Favorite</h2>
    <form id="add-favorite-form">

        <!-- Name Input -->
        <div class="form-group">
            <label for="name">Place Name *</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter place name"
                aria-required="true">
        </div>

        <!-- Category Dropdown -->
        <div class="form-group">
            <label for="category">Category *</label>
            <select id="category" name="category" required aria-required="true">
                <option value="">-- Select Category --</option>
                <option value="coffee">Coffee Shop</option>
                <option value="restaurants">Restaurant</option>
                <option value="parks">Park</option>
                <option value="entertainment">Entertainment</option>
                <option value="study-spots">Study Spot</option>
                <option value="fitness">Fitness</option>
                <option value="other">Other</option>
            </select>
        </div>

        <!-- Rating Dropdown -->
        <div class="form-group">
            <label for="rating">Rating</label>
            <select id="rating" name="rating">
                <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
                <option value="4">⭐⭐⭐⭐ (4 stars)</option>
                <option value="3">⭐⭐⭐ (3 stars)</option>
                <option value="2">⭐⭐ (2 stars)</option>
                <option value="1">⭐ (1 star)</option>
            </select>
        </div>

        <!-- Notes Textarea -->
        <div class="form-group">
            <label for="notes">Notes</label>
            <textarea
                id="notes"
                name="notes"
                rows="3"
                placeholder="Add any notes or details..."></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Add Favorite</button>

    </form>
</section>
```

**Key Form Features:**
- `id` and `name` attributes for JavaScript access
- `required` attribute for HTML5 validation
- `aria-required` for accessibility
- Placeholder text for user guidance
- Star emojis for visual rating display

### Build Search/Filter Section

After the form section:

```html
<!-- Search/Filter Section -->
<section class="search-section">
    <h2>My Favorites</h2>
    <div class="search-controls">
        <input type="text" id="search-input" placeholder="Search favorites..." aria-label="Search favorites">
        <select id="category-filter" aria-label="Filter by category">
            <option value="all">All Categories</option>
            <option value="coffee">Coffee Shop</option>
            <option value="restaurants">Restaurant</option>
            <option value="parks">Park</option>
            <option value="entertainment">Entertainment</option>
            <option value="study-spots">Study Spot</option>
            <option value="fitness">Fitness</option>
            <option value="other">Other</option>
        </select>
    </div>
</section>
```

### Build Favorites Display Section

After the search section:

```html
<!-- Favorites Display Section -->
<section class="favorites-section">
    <div id="favorites-list" class="favorites-grid">
        <!-- JavaScript will add favorite cards here -->
        <!-- For now, add placeholder message -->
        <p class="empty-message">No favorites yet. Add your first favorite place above!</p>
    </div>
</section>
```

### Add Footer

After the closing `</main>` tag:

```html
<!-- Footer -->
<footer>
    <div class="container">
        <p>&copy; 2025 My Local Favorites | Built with HTML, CSS, and JavaScript</p>
    </div>
</footer>
```

### ✅ Checkpoint: Test Your HTML

Open `index.html` in Live Server

You should see:
- Header with title
- Form with all inputs
- Search section
- Empty favorites message
- Footer

Form should look unstyled (we'll fix that next!)

---

## 🎨 Step 3: Style with CSS

### 🎯 Why CSS Organization Matters: Learning from Project 1

In Project 1 (Labs 1-9), you built your portfolio incrementally:

Each lab had you add CSS by copy-pasting new code into your stylesheet:
- **LAB05:** Added basic typography and reset
- **LAB06:** Added header layout and styles
- **LAB07:** Copy-pasted Flexbox code for content sections
- **LAB08:** Copy-pasted Grid code for project gallery
- **LAB09:** Possibly added more tweaks and fixes

**The Result?** For many students, CSS became:

- ❌ Disorganized with styles scattered throughout the file
- ❌ Hard to find specific styles when you needed to change them
- ❌ Full of duplicate selectors (same element styled in multiple places)
- ❌ Confusing about where to add new code
- ❌ Media queries scattered in different locations

This wasn't a failure - it was **intentional learning!** You needed to focus on understanding HTML/CSS concepts, not file organization.

### 🎯 Project 2: A More Professional Approach

Now that you understand CSS well, we're using professional practices from the start:

**Project 2 Strategy:**

- ✅ Pre-planned structure with clear section headers before writing any CSS
- ✅ Marked sections showing which lab adds what code (e.g., "LAB11: Forms", "TODO LAB13: Cards")
- ✅ TODO comments indicating exactly where future code will go
- ✅ All media queries together at the bottom in one RESPONSIVE DESIGN section
- ✅ No duplicate selectors - each element styled in one logical place

**Why This Approach Now?**

- **You're ready:** You understand CSS well enough to plan ahead
- **It's easier:** Starting organized prevents having to reorganize messy code later
- **It's professional:** This is how developers structure real projects
- **It saves time:** LAB12-15 will tell you exactly: "Find the BUTTONS section (line 273), add this code..."

Think of it like cooking:
- **Project 1** = Learning to cook by experimenting (messy but educational)
- **Project 2** = Following a recipe with mise en place - everything organized and ready

### CSS Organization Strategy

🎯 **Key Principles for Project 2:**

1. **Section-based organization** - All related styles grouped together (HEADER, FORMS, BUTTONS, etc.)
2. **Clear section headers** - Dividers with `/* ========== */` make sections easy to find
3. **TODO comments** - Mark where future labs add code (`/* TODO LAB13: Add card hover effects */`)
4. **Media queries at bottom** - All responsive code in one RESPONSIVE DESIGN section
5. **No duplicates** - Each selector appears only once in its logical section

📍 **How Future Labs Will Work:**

In LAB12-15, instructions will be crystal clear:

- ✅ "Find the BUTTONS section around line 273"
- ✅ "Add this code below the .btn-primary styles"
- ✅ "Scroll to the RESPONSIVE DESIGN section at the bottom"

**No more confusion about where code goes!**

This structured approach prevents the "Where do I add this?" problem many students experienced in Project 1.

### Build the CSS File Structure

Open `css/styles.css` and copy this entire skeleton structure into your empty file:

```css
/* ==========================================
   PROJECT 2: LOCAL FAVORITES TRACKER
   CSS organized by sections for maintainability

   Instructions: Add your styles in the marked sections below.
   Each section shows which lab adds what code.
   ========================================== */

/* ==========================================
   CSS RESET & BASE STYLES
   LAB11: Add core foundation styles here
   ========================================== */

/* TODO LAB11: Add CSS reset and base styles */


/* ==========================================
   CONTAINER & LAYOUT
   LAB11: Add container and layout styles here
   ========================================== */

/* TODO LAB11: Add .container styles */


/* ==========================================
   HEADER
   LAB11: Add header with gradient background
   ========================================== */

/* TODO LAB11: Add header, h1, and .subtitle styles */


/* ==========================================
   MAIN CONTENT & SECTIONS
   LAB11: Add section containers and spacing
   ========================================== */

/* TODO LAB11: Add main and section styles */


/* ==========================================
   FORM STYLES
   LAB11: Add form layout and input styling
   TODO LAB13: May add form validation styles
   ========================================== */

/* TODO LAB11: Add .form-group, label, input, select, textarea styles */


/* ==========================================
   BUTTONS
   LAB11: Add primary button styling
   TODO LAB14: Will add .btn-danger and .btn-secondary here
   ========================================== */

/* TODO LAB11: Add .btn and .btn-primary styles */


/* ==========================================
   SEARCH CONTROLS
   LAB11: Add search input and filter layout
   TODO LAB14: Will connect to JavaScript search functionality
   ========================================== */

/* TODO LAB11: Add .search-controls styles */


/* ==========================================
   FAVORITES GRID & CARDS
   LAB11: Add grid layout structure
   TODO LAB13: Cards will be populated by JavaScript
   ========================================== */

/* TODO LAB11: Add .favorites-grid and .empty-message styles */


/* ==========================================
   FAVORITE CARD STYLES
   LAB11: Prepare card design for JavaScript
   LAB13: JavaScript will create cards using these styles
   ========================================== */

/* TODO LAB11: Add .favorite-card and related styles */


/* ==========================================
   FOOTER
   LAB11: Add simple centered footer
   ========================================== */

/* TODO LAB11: Add footer styles */


/* ==========================================
   RESPONSIVE DESIGN
   LAB11: Add mobile-first responsive breakpoints
   IMPORTANT: Keep ALL media queries in this section!
   TODO LAB13-15: May add responsive adjustments for new features
   ========================================== */

/* TODO LAB11: Add @media queries for tablet and mobile */
```

Save the file. You now have an organized structure ready to fill in!

### Now Add Your CSS Styles

You'll add styles section-by-section. Each instruction tells you exactly where to add code.

#### Step 3A: Add CSS Reset & Base Styles

**Find the section:** Scroll to `CSS RESET & BASE STYLES` (around line 12)

Add this code below the TODO comment:

```css
/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Base body styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}
```

#### Step 3B: Add Container & Layout

**Find the section:** `CONTAINER & LAYOUT` (around line 22)

Add this code:

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

#### Step 3C: Add Header Styles

**Find the section:** `HEADER` (around line 32)

Add this code:

```css
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem 0;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
}
```

💡 **Design Note:** The purple gradient (#667eea to #764ba2) creates visual interest and modern feel.

### ✅ Checkpoint: Test Your Foundation Styles

Refresh your Live Server page

You should now see:
- ✅ Purple gradient header (not plain white)
- ✅ Centered content with max-width
- ✅ Professional typography
- ✅ White background on body sections

Test responsive behavior:
- Resize browser window
- Content should stay centered
- Header should remain visible

Your page should look semi-styled with a professional header!

---

## 💾 Step 4: Commit Your Foundation Work

Save your progress with GitHub Desktop:

1. Open GitHub Desktop
2. Review your changes - you should see:
   - `index.html` (complete HTML structure)
   - `css/styles.css` (skeleton + Steps 3A-3C)
3. Write commit message:
   - **Summary:** `Complete LAB11: HTML foundation and basic CSS`
   - **Description:**
     ```
     - Built complete HTML structure with semantic elements
     - Added Forms with proper labels and validation
     - Created CSS skeleton with organized sections
     - Added CSS Reset, Container, and Header styles
     - Header now has purple gradient and professional styling
     - Ready for LAB11.5 CSS completion
     ```
4. Click "Commit to main"
5. Click "Push origin" to upload to GitHub

---

## 🏆 LAB11 Success Criteria

By the end of this lab, you should have:

### Repository & Setup (Required)
- [x] GitHub repository `40363-local-favorites-tracker` created
- [x] Repository cloned locally
- [x] Project structure created (HTML, CSS, JS files)
- [x] Initial commits pushed to GitHub

### HTML Structure (Required)
- [x] Complete semantic HTML with header, main, sections, footer
- [x] Form with all required inputs (name, category, rating, notes)
- [x] Proper form labels with `for` attributes
- [x] Search and filter controls with proper IDs
- [x] Favorites display area with empty message
- [x] All elements have proper `id` and `name` attributes

### CSS Foundation (Required)
- [x] CSS skeleton structure with all section headers
- [x] CSS Reset and base body styles (Step 3A)
- [x] Container and layout styles (Step 3B)
- [x] Professional gradient header styles (Step 3C)
- [x] Organized with TODO comments for future labs

### Git Workflow (Required)
- [x] Meaningful commit messages
- [x] Work pushed to GitHub
- [x] Repository visible online

---

## 🚀 What's Next: LAB11.5

In **LAB11.5 - CSS Completion & Polish**, you'll:

1. **Complete remaining CSS sections (Steps 3D-3K):**
   - Main content and section styling
   - Form input styling with focus states
   - Button styles with hover effects
   - Search controls layout
   - Grid system for favorites cards
   - Card styling (prepared for JavaScript)
   - Footer styling
   - Responsive design with mobile breakpoints

2. **Add JavaScript starter code** - Basic form prevention and console logs
3. **Create README documentation** - Project status and information
4. **Complete testing & QA** - Visual, responsive, and accessibility checks
5. **Final commit** - Push completed interface to GitHub

By the end of LAB11.5, you'll have a fully-styled interface ready for JavaScript functionality in LAB12!

---

## 💡 Key Concepts from LAB11

### HTML Forms
- ✅ Form structure and semantic elements
- ✅ Five input types (text, select, number, textarea, button)
- ✅ Form attributes (id, name, type, required, placeholder)
- ✅ Label association for accessibility
- ✅ Form validation with HTML5 attributes

### CSS Organization
- ✅ Section-based structure prevents disorganization
- ✅ Clear headers make styles easy to find
- ✅ TODO comments guide future development
- ✅ Professional practices from the start

### Git Workflow
- ✅ New repository for Project 2
- ✅ Organized commit messages
- ✅ Regular commits show progress

---

## 🎉 Great Work!

You've successfully built the HTML foundation and basic CSS structure for Project 2! Your interface has:

- ✅ Complete semantic HTML structure
- ✅ Accessible forms with proper labels
- ✅ Organized CSS with clear sections
- ✅ Professional header with gradient styling
- ✅ Solid foundation ready for CSS completion

See you in LAB11.5 where we'll complete the styling and polish! 📸

---

## 📚 Additional Resources
- [MDN HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [CSS-Tricks: Form Design Patterns](https://css-tricks.com/snippets/css/complete-guide-to-flexbox/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
