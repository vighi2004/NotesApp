# 📝 Sticky Notes App

A beautifully styled, highly responsive single-page application for managing quick notes. Built with **React**, **Tailwind CSS**, and **Lucide React Icons**, featuring a professional split-screen design that adapts dynamically to all screen sizes.

---

## ✨ Features

* **⚡ Real-Time Composition**: Clean title inputs and auto-wrapping description textareas with zero lag.
* **🎨 Split-Screen Layout**: Sticky notes form on the left side, active notes displayed cleanly over vector clipboard graphics on the right.
* **📱 100% Fully Responsive**: Transitions flawlessly from deep horizontal panels on desktop computers to single-column stacked structures on mobile viewports.
* **🗑️ Smooth Interactive Actions**: Absolute-positioned quick-delete buttons with sleek desktop hover configurations and native touchscreen-friendly styling rules.
* **💡 Memory Safe States**: Managed with shallow array clones (`splice`) to safeguard predictable React state management loops.

---

## 📸 Screenshots

### 💻 Desktop View
> *Split-screen dual-panel view with interactive hover zones*
<img width="1919" height="872" alt="image" src="https://github.com/user-attachments/assets/3244b9cd-d7fd-4139-b5fa-7a89f7820d85" />


### 📱 Mobile View
> *Fully stacked component alignment centered for small viewports*
<img width="738" height="781" alt="image" src="https://github.com/user-attachments/assets/ceb5fb1c-4726-4e85-89e5-9222d9439ed0" />

---

## 🛠️ Tech Stack

* **Framework**: React (Functional Components & Hooks)
* **Styling**: Tailwind CSS (Utility-first, Mobile-First responsive setups)
* **Icons**: Lucide React (`Clipboard`, `Trash2`)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com
cd sticky-notes-app
```

### 2. Install dependencies
```bash
npm install lucide-react
# Ensure tailwindcss is configured in your project
```

### 3. Run the development server
```bash
npm run dev
```

---

## 💡 Code Highlights

### Responsive Grid Layout Strategy
The application handles fluid layouts using standard Tailwind mobile-first design rules, swapping flex paths, box alignments, borders, and margins on the fly:
```tsx
{/* Responsive Container Syntax */}
<div className="flex flex-col sm:flex-row bg-slate-900 min-h-screen text-amber-50">
  {/* Left Panel: Form */}
  <div className="w-full sm:w-[50%] border-b-4 sm:border-b-0 sm:border-r-4 border-indigo-500 h-auto sm:h-screen p-6">
    {/* Form Inputs */}
  </div>
</div>
```

### Safe Array State Deletions
Existing array items are safely processed using pure array spread duplications instead of mutating core React component state references:
```javascript
function deleteNote(idx) {
  const prev = [...list];
  prev.splice(idx, 1);
  setlist(prev);
}
```

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more details.
