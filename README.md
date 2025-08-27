# React Bootstrap Form

## English [UA version below]

### Project Goal
This project demonstrates the implementation of a modern, responsive form using React and Bootstrap. The main objectives are:
- Create a user-friendly form interface
- Implement form validation
- Demonstrate React state management
- Showcase Bootstrap styling capabilities
- Provide a clean, professional design

### What Was Implemented
- ✅ Responsive form layout using Bootstrap components
- ✅ Form validation with real-time feedback
- ✅ React state management for form data
- ✅ Modern UI/UX design
- ✅ Cross-browser compatibility
- ✅ Mobile-friendly responsive design

### Project Structure
```
react-bootstrap-form/
├── src/
│   ├── components/
│   │   ├── RegistrationForm.tsx           # Main registration form component
│   │   ├── inputField.tsx                 # Reusable input field component
│   │   └── SuccessMessage.tsx             # Success message component
│   ├── config/
│   │   ├── initialValues.ts               # Form initial values configuration
│   │   └── validationSchema.ts            # Yup validation schema
│   ├── helpers/
│   │   ├── formHelpers.ts                 # Form submission handlers
│   │   └── getFormControlClass.ts         # CSS class helper for form validation
│   ├── types/
│   │   ├── RegistrationFormValues.interface.ts  # Form values type definition
│   │   └── FormikFieldState.interface.ts        # Formik field state type
│   ├── App.tsx                            # Main App component
│   ├── main.tsx                           # Application entry point
│   └── index.css                          # Global styles
├── index.html                             # HTML template
├── package.json                           # Dependencies and scripts
├── tsconfig.json                          # TypeScript configuration
├── vite.config.ts                         # Vite build configuration
└── README.md                              # Project documentation
```

### How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-bootstrap-form
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

# Форма на React Bootstrap

## Мета Проекту
Цей проект демонструє реалізацію сучасної, адаптивної форми з використанням React та Bootstrap. Основні цілі:
- Створити зручний інтерфейс форми
- Реалізувати валідацію форми
- Продемонструвати управління станом в React
- Показати можливості стилізації Bootstrap
- Забезпечити чистий, професійний дизайн

### Що Було Реалізовано
- ✅ Адаптивний макет форми з використанням компонентів Bootstrap
- ✅ Валідація форми з зворотним зв'язком в реальному часі
- ✅ Управління станом React для даних форми
- ✅ Сучасний UI/UX дизайн
- ✅ Сумісність з різними браузерами
- ✅ Мобільно-орієнтований адаптивний дизайн

### Структура Проекту
```
react-bootstrap-form/
├── src/
│   ├── components/
│   │   ├── RegistrationForm.tsx           # Основний компонент форми реєстрації
│   │   ├── inputField.tsx                 # Багаторазовий компонент поля вводу
│   │   └── SuccessMessage.tsx             # Компонент повідомлення про успіх
│   ├── config/
│   │   ├── initialValues.ts               # Конфігурація початкових значень форми
│   │   └── validationSchema.ts            # Схема валідації Yup
│   ├── helpers/
│   │   ├── formHelpers.ts                 # Обробники відправлення форми
│   │   └── getFormControlClass.ts         # Помічник CSS класів для валідації форми
│   ├── types/
│   │   ├── RegistrationFormValues.interface.ts  # Визначення типу значень форми
│   │   └── FormikFieldState.interface.ts        # Тип стану поля Formik
│   ├── App.tsx                            # Головний компонент App
│   ├── main.tsx                           # Точка входу додатку
│   └── index.css                          # Глобальні стилі
├── index.html                             # HTML шаблон
├── package.json                           # Залежності та скрипти
├── tsconfig.json                          # Конфігурація TypeScript
├── vite.config.ts                         # Конфігурація збірки Vite
└── README.md                              # Документація проекту
```

### Як Запустити Проект
1. Клонуйте репозиторій:
   ```bash
   git clone <url-репозиторію>
   cd react-bootstrap-form
   ```

2. Встановіть залежності:
   ```bash
   npm install
   ```

3. Запустіть сервер розробки:
   ```bash
   npm run dev
   ```
   
 ---