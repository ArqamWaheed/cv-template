# CV Builder - Technical Documentation

A multi-step form application for creating professional CVs with real-time preview, built with React and modern web technologies.

## Tech Stack

### Core Technologies
- **React 18** - UI library with hooks for state management
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features including destructuring, spread operators, and arrow functions

### Key Libraries
- **date-fns** - Date formatting and manipulation library
  - Used for formatting graduation dates and work experience dates
  - Functions: `format()`, `compareAsc()`

### Styling
- **CSS3** with CSS Custom Properties (CSS Variables)
  - Modular CSS architecture with separate stylesheets:
    - `index.css` - Global styles, CSS reset, theme variables
    - `Form.css` - Form-specific styling
    - `CV.css` - CV preview styling
  - Color system using `oklch()` color space for consistent theming
  - Responsive design with media queries
- **Google Fonts** - Fredoka, Inter, and Open Sans font families

## Architecture & Patterns

### Component Structure
```
src/
├── main.jsx              # Application entry point
├── styles/               # CSS modules
│   ├── index.css         # Global styles & theme
│   ├── Form.css          # Form styling
│   └── CV.css            # CV preview styling
└── ui/components/
    ├── SyncFormCV.jsx    # Root component with state management
    ├── Form.jsx          # Form container with step navigation
    ├── GeneralInfo.jsx   # Step 1: Personal information
    ├── Education.jsx     # Step 2: Education details
    ├── TechSkills.jsx    # Step 3: Technical skills
    ├── PastExperience.jsx # Step 4: Work experience
    └── CV.jsx            # Real-time CV preview
```

### State Management
- **Lifting State Up Pattern** - All state managed in `SyncFormCV.jsx` root component
- **Props Drilling** - State and setters passed down through component tree
- State organized into logical groups:
  - `generalInfo` - Personal details (name, email, location, contact)
  - `universityInfo` - Education (university, GPA, graduation date, achievements)
  - `skillsObj` - Technical skills array
  - `experienceObj` - Work experience array

### Key React Patterns Used

#### 1. Controlled Components
All form inputs are controlled components with `value` and `onChange` handlers:
```javascript
<input 
  value={generalInfo.nameValue} 
  onChange={e => setNameValue(e.target.value)}
/>
```

#### 2. Dynamic List Rendering
Arrays of achievements, skills, and experiences rendered with `.map()`:
```javascript
{skills.map((skill, idx) => (
  <TechSkillItem key={skill.id} index={idx} />
))}
```

#### 3. Conditional Rendering
UI elements shown/hidden based on state:
```javascript
{stateIndex == 0 ? <GeneralInfo /> : null}
{universityInfo.universityName ? <h2>EDUCATION</h2> : null}
```

#### 4. Composite Components
Complex forms broken into smaller, reusable components:
- `AcademicAchievement` - Individual achievement input
- `TechSkillItem` - Individual skill input
- `ExperienceItem` - Individual work experience section

## Features Implementation

### Multi-Step Form Navigation
- State-based step tracking with `stateIndex`
- Forward navigation with validation
- Backward navigation without validation
- Submit button on final step

### Form Validation
- **HTML5 Built-in Validation**:
  - `required` attributes
  - `minLength` constraints
  - `pattern` for regex validation (alphabetic characters only)
  - `type="email"` for email validation
  - `type="date"` for date inputs
  - `min`, `max`, `step` for GPA input

- **Custom JavaScript Validation**:
  - Custom validity messages with `setCustomValidity()`
  - Phone number regex validation
  - Form validation before step transitions
  - `reportValidity()` for displaying error messages

### Dynamic Form Fields
- **Add/Remove Functionality**:
  - Achievements can be dynamically added/removed
  - Skills can be dynamically added/removed
  - Work experiences can be dynamically added/removed
- **ID Management**: Using `Date.now()` for unique IDs
- **Immutable State Updates**: Using spread operator and `.filter()`

### Real-Time CV Preview
- CV updates instantly as form data changes
- Date formatting with `date-fns`
- Conditional section display (only show sections with data)
- Professional formatting with proper typography and spacing

### Responsive Design
- Mobile-first approach with media queries
- Flexible layout switching from row to column on small screens
- Adaptive form width (`max-width: 40%` on desktop, `100%` on mobile)

## Styling Techniques

### CSS Custom Properties (Variables)
Comprehensive theming system:
```css
--bg-dark, --bg, --bg-light      /* Background colors */
--text, --text-muted              /* Text colors */
--primary, --secondary            /* Brand colors */
--danger, --warning, --success    /* Semantic colors */
--border, --border-muted          /* Border colors */
--shadow                          /* Box shadow */
```

### Modern CSS Features
- Flexbox for layouts
- CSS Grid potential (not currently used)
- `oklch()` color space for better color perception
- Gradient backgrounds
- Smooth transitions and transforms
- Custom `::marker` styling for lists

### CSS Reset
Modern CSS reset included:
- `box-sizing: border-box` for all elements
- Removed default margins and padding
- Improved line height
- Font smoothing
- Word breaking for long text

## Data Flow

1. User inputs data in form → Updates state via setter functions
2. State change triggers re-render
3. Updated state passed to CV component
4. CV component displays formatted data
5. Changes reflect immediately in preview

## Build & Development

### Vite Configuration
- Fast HMR (Hot Module Replacement)
- Optimized production builds
- ES modules support
- CSS processing

### Entry Point
```javascript
// main.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

## Browser Compatibility

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Custom Properties support required
- Flexbox support required
- Date input support (fallback needed for older browsers)

## Accessibility Features

- Semantic HTML elements (`<fieldset>`, `<legend>`, `<label>`)
- `aria-required="true"` on required fields
- `htmlFor` attribute linking labels to inputs
- Proper form structure
- Keyboard navigation support
- Focus management

## Performance Considerations

- Component memoization opportunities (not currently implemented)
- Event handler optimization with useCallback potential
- Efficient array operations with immutable updates
- Minimal re-renders due to state organization
