# CLAUDE.md - Guidelines for Logic Fun

## Running the Application
- Open `index.html` in a web browser to run the application
- No build step required (vanilla HTML/JS/CSS)
- No automated tests implemented (manual verification required)

## Code Style Guidelines

### JavaScript
- Use camelCase for variable and function names
- Add descriptive comments for complex logic blocks
- Use const/let instead of var
- Group related functions together with section headers (`//-- SECTION NAME --//`)
- Maintain consistent indentation (4 spaces)
- Use event delegation when possible for similar elements

### HTML/CSS
- Use semantic HTML elements
- Maintain consistent class naming conventions (`activity-name`, `lesson-btn`)
- Keep CSS selectors simple and specific
- Follow BEM-like naming for related components

### Error Handling
- Use appropriate validation for user inputs
- Display friendly error messages (via alerts)
- Gracefully handle unexpected UI states

### Best Practices
- Maintain separation between presentation and logic
- Ensure cross-browser compatibility
- Keep functions small and focused on single responsibilities

## Code Structure

### Lesson Loading
- The application loads lesson content from markdown files (lesson1.md through lesson10.md)
- Lessons 1-7 use individual getElementById statements to hide other lesson content
- Lessons 8-10 use querySelectorAll to hide all lesson content at once (more efficient approach)
- Bug found: When clicking lesson 7, it doesn't hide lessons 8-10 content because:
  - Lesson 7 click handler only explicitly hides lessons 1-6
  - It does not hide lessons 8-10 content (added later)
  - Should be updated to use the querySelectorAll approach

### DOM Structure
- Each lesson has an associated button (id="lesson{n}-btn") and content div (id="lesson{n}-content") 
- Content divs have class "hidden" when not displayed
- Active lesson buttons have class "active"

### Current Event Handler Patterns
- **Old pattern (lessons 1-7):**
```javascript
document.getElementById('lessonX-btn').addEventListener('click', function() {
    // Individually hide each lesson content
    document.getElementById('lesson1-content').classList.add('hidden');
    document.getElementById('lesson2-content').classList.add('hidden');
    // ... and so on for each lesson
    
    // Show current lesson content
    document.getElementById('lessonX-content').classList.remove('hidden');
    
    // Update button active states
    document.getElementById('lesson1-btn').classList.remove('active');
    document.getElementById('lesson2-btn').classList.remove('active');
    // ... and so on for each button
    document.getElementById('lessonX-btn').classList.add('active');
});
```

- **New pattern (lessons 8-10):**
```javascript
document.getElementById('lessonX-btn').addEventListener('click', function() {
    // Hide all lesson contents
    const lessonContents = document.querySelectorAll('[id$="-content"]');
    lessonContents.forEach(content => {
        content.classList.add('hidden');
    });
    
    // Deactivate all buttons
    const lessonButtons = document.querySelectorAll('.lesson-btn');
    lessonButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show current lesson content and activate button
    document.getElementById('lessonX-content').classList.remove('hidden');
    this.classList.add('active');
});
```