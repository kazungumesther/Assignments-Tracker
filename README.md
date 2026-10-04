#  Student Assignment Tracker

A dynamic, fast-loading web application designed to help students track their academic tasks, manage deadlines, and stay on top of their coursework schedules.

---

## Live Demo

Check out the live application here: **[(https://assignments-tracker-psi.vercel.app/ )** 

---

##  Features

*   **Add Assignments:** Input task details including **Assignment Title**, **Course Name**, **Start Date**, and **End/Due Date**.
*   **Status Tracking:** Automatically displays visual status badges like **Pending** or **Completed**.
*   **Punctuality Indicators:** Displays real-time tags such as **On Time** based on your timeline goals.
*   **Task Management:** Mark tasks completed dynamically using the **Mark as Done** button or remove items entirely with the **Delete** button.

---

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org) (Utilizing the Next.js App Router framework)
*   **Bundler:** [Turbopack](https://nextjs.orgdocs/app/api-reference/turbopack) (Optimized for instantaneous hot-reloading during development)
*   **Languages:** CSS, JavaScript, TypeScript
*   **Styling:** Custom component-driven CSS layout structure

---

##  Project Structure

Here is a breakdown of the specific project architecture visible in your repository workspace:

```text
assignments-tracker/
├── app/
│   ├── components/
│   │   ├── assignmentForm.js   # Manages state and logic for inputting new tasks
│   │   ├── assignmentItem.js   # Handles layouts, badges, and action triggers for single tasks
│   │   └── assignmentList.js   # Maps over datasets to render the list of assignment cards
│   ├── app.js                 # Global state controller or custom provider module
│   ├── globals.css            # Global design token styling rules
│   ├── layout.tsx             # Root page shell container structure
│   └── page.tsx               # Main entry view layout handling component communication
├── public/                    # SVG components and global web assets
└── config files               # tsconfig.json, next.config.ts, postcss.config.mjs
```

---

##  Getting Started

Follow these instructions to spin up the tracker locally on your development system.

###  Prerequisites

Ensure you have **Node.js** (v18.x or newer) and **npm** installed.

###  Local Setup

1. Clone your workspace repository:
   ```bash
   git clone https://github.com
   ```

2. Access the project directory root:
   ```bash
   cd assignments-tracker
   ```

3. Download dependency nodes:
   ```bash
   npm install
   ```

###  Booting the Dev Environment

Run the Turbopack engine local build suite:

```bash
npm run dev
```

Navigate your browser to [http://localhost:3000](http://localhost:3000) to start managing your assignments.

---

##  Production Deployment

To compile a highly-optimized distribution version:

```bash
npm run build
```

To run the built distribution package locally:

```bash
npm run start
```
