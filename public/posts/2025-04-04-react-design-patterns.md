---
title: React Design Patterns
order: 60
description: All the 24 design patterns contextualized in the frontend-react-js world
shortDescription: All the 24 design patterns contextualized in the frontend-react-js world
slug: react-design-patterns
image: https://res.cloudinary.com/dmgymopan/image/upload/v1743771920/Screenshot_2025-04-04_alle_15.01.03_hrwcfh.png
tags:
  - name: design patterns
  - name: react
  - name: real code examples
content: >-
  ## 🧱 1. **Creational Patterns**


  **Goal:** Abstract the object creation process to make it more flexible.


  ### 1.1 **Singleton**


  Ensures a class has only one instance and provides a global point of access to it.​


  ```

  const ThemeContext = React.createContext('light');


  const App = () => (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );


  ```


  ### 1.2 **Factory Method**


  Defines an interface for creating an object, but allows subclasses to alter the type of objects that will be created.


  ```

  const createButton = (type) => {
    switch (type) {
      case 'primary':
        return (props) => <button className="btn-primary" {...props} />;
      case 'secondary':
        return (props) => <button className="btn-secondary" {...props} />;
      default:
        return (props) => <button {...props} />;
    }
  };


  const PrimaryButton = createButton('primary');


  ```


  ### 1.3 **Abstract Factory**


  Provides an interface for creating families of related or dependent objects without specifying their concrete classes.


  ```

  const ButtonFactory = (theme) => {
    const themes = {
      light: (props) => <button style={{ backgroundColor: 'white' }} {...props} />,
      dark: (props) => <button style={{ backgroundColor: 'black' }} {...props} />,
    };
    return themes[theme];
  };


  const ThemedButton = ButtonFactory('dark');


  ```
---
