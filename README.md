# Resume Builder

A modern, interactive resume builder application built with Next.js and React. Create professional resumes with live preview and export them as PDF.

## Features

- 📝 **Interactive Forms**
  - Personal Information
  - Work Experience
  - Projects
  - Skills
  - Education
  - Certificates
  - Achievements

- 👁️ **Live Preview**
  - Real-time resume preview as you fill in the forms
  - Two professionally designed templates

- 📄 **PDF Export**
  - Download your resume as a high-quality PDF
  - Both templates support PDF export

- 🎨 **Template Selection**
  - Template 1: Classic professional layout
  - Template 2: Modern two-column design

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Form Handling:** React Hook Form
- **PDF Generation:** @react-pdf/renderer
- **State Management:** React Context API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```
bash
git clone <repository-url>
cd resume-builder
```

2. Install dependencies:

```
bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```
bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── AchievementsForm.tsx
│   ├── CertificatesForm.tsx
│   ├── EducationForm.tsx
│   ├── ExperienceForm.tsx
│   ├── PersonalInfoForm.tsx
│   ├── ProjectsForm.tsx
│   ├── ResumeBuilderLayout.tsx
│   └── SkillsForm.tsx
├── context/               # React Context
│   └── ResumeContext.tsx  # Resume state management
├── templates/             # Resume templates
│   ├── TemplateOne.tsx
│   ├── TemplateOnePDF.tsx
│   ├── TemplateTwo.tsx
│   └── TemplateTwoPDF.tsx
└── types/                 # TypeScript types
    ├── achievements.ts
    ├── certificates.ts
    ├── educations.ts
    ├── projects.ts
    ├── props.ts
    ├── resume.ts
    ├── resumeContext.ts
    └── skills.ts
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## How to Use

1. **Select a Template**: Choose between Template 1 or Template 2 using the buttons at the top of the form section.

2. **Fill in Your Information**: Complete each section of the form:
   - Personal Information (name, email, phone, address, summary)
   - Experience (job title, company, dates, description)
   - Projects (title, description, technologies, link)
   - Skills (technical and soft skills)
   - Education (degree, institution, dates)
   - Certificates & Achievements

3. **Live Preview**: Watch your resume update in real-time on the right panel.

4. **Export PDF**: Click the "Save as PDF" button to download your resume.

## Customization

### Adding New Templates

1. Create a new template component in `src/templates/`
2. Create a corresponding PDF component using `@react-pdf/renderer`
3. Add the template selection option in `ResumeBuilderLayout.tsx`

### Modifying Forms

Each form component is located in `src/components/` and uses React Hook Form for validation and state management. Modify the respective form component to add or remove fields.

## License

MIT License
