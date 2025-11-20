# Campaign Management Dashboard

A modern, responsive campaign management dashboard built with React, Vite, and Tailwind CSS.

##  Features


-  **Campaign Listing View** - View all campaigns in a searchable table
-  **Calendar View** - Monthly calendar showing scheduled campaigns
-  **Campaign Analytics** - View detailed statistics with interactive charts
-  **Search & Filter** - Real-time search across all campaigns
-  **Pagination** - Navigate through campaigns with customizable items per page
-  **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
-  **WhatsApp Preview** - Visual preview of campaign messages
-  **Activity Log** - Detailed campaign performance metrics

##  Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or create the project**
```bash
#npm create vite@latest campaign-dashboard -- --template react
git clone https://github.com/Prashu2024/Campaign_Dashboard_frontend.git
cd Campaign_Dashboard_frontend
```

2. **Install dependencies**
```bash
npm install
#npm install lucide-react recharts
#npm install -D tailwindcss postcss autoprefixer
#npx tailwindcss init -p
```

3. **Copy all project files** from the folder structure above into your project

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5173
```

##  Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx              # Navigation sidebar
│   ├── Navbar.jsx               # Top navigation bar
│   ├── CampaignHeader.jsx       # Campaign header with view toggle
│   ├── CampaignTable.jsx        # Table view with search
│   ├── CampaignDetails.jsx      # Detailed analytics view
│   ├── CalendarView.jsx         # Calendar view component
│   ├── Pagination.jsx           # Pagination controls
│   └── WhatsAppPreview.jsx      # Message preview
├── data/
│   └── campaignsData.js         # Campaign dummy data
├── App.jsx                       # Main app component
├── main.jsx                      # Entry point
└── index.css                     # Global styles
```

##  How to Use

### Switch Between Views
- Click List icon for table view
- Click List icon for table view

### View All Campaigns
- See all campaigns in a table format
- Search by name, message, or status
- Click any row to view details

### Activity Log
- See charts showing sent, delivered, and response metrics
- View campaign performance statistics

### Navigate
- Use pagination at the bottom to browse campaigns
- Adjust items per page (5, 10, or 20)
- Use back button to return to campaign list

##  Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Data visualization library
- **Lucide React** - Icon library

##  Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

##  Customization

### Change Colors
Edit `tailwind.config.js` to customize the color scheme

### Add More Data
Modify `src/data/campaignsData.js` to add more campaigns

### Connect to API
Replace dummy data in `campaignsData.js` with API calls
