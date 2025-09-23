Delivery Mode: In-Class to Homework (Hybrid)

Goal: Transform your basic HTML structure into a professional-looking webpage by applying foundational CSS principles and creating an impressive header design.
Portfolio Connection: This lab builds the foundation for your Project 1 Personal Portfolio Website.
Learning Outcomes
Master CSS reset, typography, and layout fundamentals
Build a professional split-screen header layout
Apply the CSS box model for proper spacing
Create visual hierarchy through typography
Use CSS debugging tools effectively
Prerequisites
Completed Lab 05 (Base CSS Foundation) OR have basic HTML structure
Existing sandbox files with header layout (header_text and header_pic divs)
Basic understanding of linking external stylesheets
Lab Flow: From Basic to Professional
Phase 1: "Clean Up" (15-20 minutes)
Goal: Remove debugging styles and establish a solid foundation

1. Remove Red Borders & Add CSS Reset:

/* Remove the red debugging borders first - instant visual improvement! */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
2. Establish Typography Foundation:

body {
  /* 
    Font stack explanation:
    - system-ui: Uses the OS default UI font (Segoe UI on Windows, San Francisco on Mac)
    - -apple-system: Fallback for older Safari browsers
    - sans-serif: Universal fallback if system fonts fail
  */
  font-family: system-ui, -apple-system, sans-serif;
  
  /* Line height 1.6 = 160% of font size - improves readability */
  line-height: 1.6;
  
  /* #333 is dark gray - softer than pure black for better reading experience */
  color: #333;
}
Phase 2: "Make it Look Intentional" (20-25 minutes)
Goal: Refine the existing header layout to look professional

1. Improve Header Layout:

header {
  display: flex;
  align-items: center;
  min-height: 60vh; /* Reasonable height - not too tall */
  padding: 2rem;
  gap: 2rem;
  background-color: #f8f9fa; /* Subtle background */
}

.header_text {
  flex: 1; /* Takes up equal space */
  padding: 2rem;
}

.header_pic {
  flex: 1; /* Takes up equal space */
  background-color: #e9ecef;
  min-height: 300px;
  border-radius: 8px; /* Subtle rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
}
2. Add Content to Empty Divs (Portfolio-Ready):

<!-- Update your HTML header_text div with real portfolio content -->
<div class="header_text">
  <h1>Your Full Name</h1>
  <p>Your professional tagline (e.g., "Web Developer" or "Digital Media Student")</p>
  <p>Brief value proposition - what makes you unique?</p>
</div>

<!-- Add placeholder for professional photo -->
<div class="header_pic">
  [Professional Photo Here]
  <!-- This will become your portfolio hero image -->
</div>
Portfolio Tip: This header will become the "hero section" of your Project 1 portfolio. Start thinking about:
Your professional brand and tagline
What makes you unique as a student/professional
A professional photo you can use
Phase 3: "Add Real Typography" (15 minutes)
Goal: Create clear visual hierarchy with professional typography

h1 {
  font-size: 2.5rem; /* Large, clear headline */
  font-weight: 700;  /* Bold for impact */
  color: #2d3748;    /* Darker gray for headings */
  margin-bottom: 1rem;
  line-height: 1.2;  /* Tighter spacing for headings */
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.6rem;
  line-height: 1.4;
}

p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555; /* Slightly lighter for body text */
}
Phase 4: "Polish" (15-20 minutes)
Goal: Add finishing touches for professional appearance

1. Improve Navigation (Portfolio-Ready):

nav {
  background-color: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e9ecef;
}

nav a {
  color: #495057;
  text-decoration: none;
  margin-right: 2rem;
  font-weight: 500;
}

nav a:hover {
  color: #007bff;
}

/* Basic focus state for accessibility */
nav a:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
2. Add Main Content Styling:

main {
max-width: 65ch; /* About 65 characters wide - good for reading on any screen */
margin: 0 auto; /* Centers the content */
padding: 5%; /* 5% padding scales with screen size */
}


section {
  margin-bottom: 2rem;
}

/* Consistent spacing between paragraphs */
p + p {
  margin-top: 1rem;
}
Success Criteria
By the end of this lab, your webpage should demonstrate:

Visual Improvements
Clean, professional appearance (no red debugging borders!)
Well-proportioned header with clear content areas
Readable typography with appropriate sizes and spacing
Consistent spacing throughout the page
Professional color choices
Technical Skills
CSS reset properly implemented
Flexbox layout working correctly for header
Typography hierarchy established (h1 > h2 > h3 > p)
Box model understanding demonstrated through spacing
External stylesheet properly linked and organized
Code Quality
CSS well-organized with helpful comments
No inline styles remaining
Consistent indentation and formatting
Meaningful class names and structure
Basic accessibility features implemented (focus states)
Portfolio Readiness
Professional header that could serve as portfolio hero section
Content structure appropriate for personal branding
Design foundation suitable for Project 1 requirements
Typography system that supports portfolio content
Debugging Tips
Header not displaying correctly?
Check that flexbox properties are applied to the header element
Verify both header_text and header_pic divs are inside the header
Use browser dev tools to inspect the flex layout
Fonts looking wrong?
Make sure the CSS file is properly linked in HTML head
Check for typos in font-family declarations
Verify the CSS is actually loading (check Network tab in dev tools)
Spacing issues?
Remember: margin creates space outside elements, padding inside
Use browser dev tools to visualize the box model
Check for margin collapse between adjacent elements
Next Steps & Portfolio Connection
Immediate Next Labs:

LAB07: Responsive design (mobile-first approach for Project 1)
LAB08: CSS Grid layouts for portfolio sections
LAB09: Media queries and accessibility features
Project 1 Portfolio Preparation:

This header design will become your portfolio's hero section
Start planning your About, Skills, and Projects content
Consider what professional photo you'll use
Think about your personal brand and unique value proposition
Remember: Project 1 is due Week 6 (September 25). This lab gives you the styling foundation, but you'll need responsive design and accessibility features covered in upcoming labs.

Homework Completion
Time Estimate: 1-2 hours to complete all phases and polish your design

Submit: GitHub repository URL showing your updated CSS file and improved webpage design

Portfolio Note: Keep this work! It will be the foundation for your Project 1 Personal Portfolio Website due September 25.