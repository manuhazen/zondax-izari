# Phase 1 - Once upon a time

1. Please comment on the differences between ReactJS 17 and ReactJS18

   React 17 focused on improving the developer experience (DX) and making it easier to upgrade to newer versions of React. Although there were no visible new features in React 17, it offered a better overall developer experience. However, React 18 introduced several new features to enhance your app, including:

   - Automatic Batching: React now batches updates made inside components, preventing unnecessary renders.
   - Transitions: This new feature distinguishes between urgent and non-urgent updates in your components. I don't have much context on this one, as I haven't used this feature yet.
   - Server-side Suspense: You can now use the Suspense feature with server components.
   - A set of new hooks: useId, useTransition, useDeferredValue, useSyncExternalStore (this one sounds very promising), and useInsertionEffect.

   Additionally, you'll receive a warning if you use React.render instead of React.createRoot (new in React 18), and the same applies for ReactDOM.hydrate instead of React.hydrateRoot.

2. Please, compare two component libraries and comment which one is your favorite and why

   Ant Design and Material UI are my two favorite React component libraries, and I have several common reasons for choosing them over others:

   1. Design pattern: Both libraries excel in their design and provide a consistent, clean, and modern design language, ensuring an excellent user experience for users.
   2. Customization: Both libraries offer excellent extensibility for themes and individual components, allowing you to create custom themes that give your application a unique identity.
   3. Community: Both libraries have strong ecosystems and communities, and they are rapidly growing (AntD released its v5 version not too long ago).
   4. Documentation: Both libraries have excellent documentation that is easy to use. Personally, I find AntD's documentation slightly more appealing than MUI's.
   5. Performance: Both libraries have impressive performance, with minimal impact on the code bundle size, allowing for easy integration into your projects.

   If I had to pick a favorite, I would choose MUI, primarily because it is more widely known (AntD is very popular within the Chinese community), and it is easier to get assistance from designers, as Material UI is more of an industry standard.

3. Have you ever used GitHub copilot? If you used it, on what occasion did you use it and why? If not, please comment why not.

   Oh yes, I love using GitHub Copilot. It helps me write a lot of scaffolding and common patterns in the code I am working on. It generates a substantial amount of code without the need to search on Google, and I can fine-tune the output. It's an excellent productivity tool because I don't have to write a large amount of code for my applications; instead, I can focus on the finer details and edge cases in my code.

4. Please comment on your experience with webpack errors.

   I usually work on Webpack errors like the out-of-memory issue (which can be easily fixed by increasing the max_old_space_size flag). However, recently I was working on an app that had numerous errors related to circular dependencies, invalid environment variables causing errors on the production application, and duplicate module imports. I managed to fix all of these issues by examining the code, investigating the application, and conducting some research within the community.

5. Please comment your experience with the following:
   - Next.js: This is currently my go-to framework for creating new React projects. I have nearly three years of experience maintaining and extending applications based on this framework. I believe Next.js provides numerous tools that can enhance the developer experience when working on React apps.
   - MUI: I have experience using MUI, creating custom themes, and implementing custom, purchased dashboards while extending them in applications. I have primarily worked with this library on B2B applications.
   - Zustand: I have not used Zustand in my experience, but it looks very neat. I would like to test it out.
   - Jest / Playwright: Throughout my years of experience with React, I have been using Jest to write frontend tests, as it is the most common testing framework in most projects. As for Playwright, I don't have any experience with it, but I have extensive experience with Cypress. After reviewing the documentation, Playwright appears quite similar to Cypress, so I believe the learning curve should not be too challenging.
