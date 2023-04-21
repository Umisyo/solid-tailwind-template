# Solid Start with ESLint, Prettier, and Tailwind Template Repository

This repository contains a pre-configured template for Solid projects that includes ESLint, Prettier, and Tailwind CSS. This setup will help you streamline your development process by providing a standardized code style, enforcing best practices, and giving you access to a powerful utility-first CSS framework.

## Features

- Solid JS framework for building reactive and efficient web applications
- ESLint for consistent JavaScript code style and best practices
- Prettier for automatic code formatting
- Tailwind CSS, a utility-first CSS framework for rapid UI development

## Getting Started

To get started with this template, follow these steps:

1. **Clone the repository**

   ```
   git clone https://github.com/Umisyo/solid-template your-project-name
   cd your-project-name
   ```

2. **Install dependencies**

   ```
   pnpm install
   ```

3. **Start the development server**

   ```
   pnpm dev
   ```

   The server will start at [http://localhost:3000](http://localhost:3000), and your project will automatically reload on file changes.

## Usage

### ESLint

ESLint is configured to enforce best practices and consistent code style. You can check your code for any issues by running:

```
pnpm lint
```

If you want to automatically fix some issues, you can run:

```
pnpm lint:fix
```

### Prettier

Prettier is configured to format your code automatically. You can run it manually by executing:

```
pnpm format
```

We recommend configuring your text editor or IDE to automatically format your code on save.

### Tailwind CSS

Tailwind CSS is included in the project and can be customized by modifying the `tailwind.config.js` file. You can use Tailwind's utility classes in your components to quickly style your application.

## Contributing

If you find any issues with this template or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.
