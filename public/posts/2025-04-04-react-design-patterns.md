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




  ### 1.4 **Builder**


  Separates the construction of a complex object from its representation so that the same construction process can create different representations.


  ```

  const useQuery = () => {
    const [query, setQuery] = React.useState({});

    const addFilter = (key, value) => setQuery((q) => ({ ...q, [key]: value }));
    const removeFilter = (key) => setQuery((q) => {
      const newQuery = { ...q };
      delete newQuery[key];
      return newQuery;
    });

    return { query, addFilter, removeFilter };
  };


  ```




  ### 1.5 **Prototype**


  Specifies the kinds of objects to create using a prototypical instance and creates new objects by copying this prototype.


  ```

  const baseComponent = (props) => <div style={{ color: 'blue' }} {...props} />;


  const clonedComponent = (props) => React.cloneElement(baseComponent(props), { style: { color: 'red' } });


  ```




  ## 🏗️ 2. **Structural Patterns**


  **Goal:** Simplify the design by identifying a simple way to realize relationships between entities.




  ### 2.1 **Adapter**


  Allows the interface of an existing class to be used as another interface.


  ```

  const OldComponent = ({ text }) => <div>{text}</div>;


  const AdapterComponent = ({ content }) => <OldComponent text={content} />;


  ```




  ### 2.2 **Bridge**


  Decouples an abstraction from its implementation so that the two can vary independently.


  ```

  const ThemeContext = React.createContext();


  const ThemedButton = () => {
    const theme = React.useContext(ThemeContext);
    return <button style={{ backgroundColor: theme.background }}>Click me</button>;
  };


  ```




  ### 2.3 **Composite**


  Composes objects into tree structures to represent part-whole hierarchies.


  ```

  const MenuItem = ({ label, children }) => (
    <div>
      <div>{label}</div>
      {children && <div className="submenu">{children}</div>}
    </div>
  );


  const Menu = () => (
    <MenuItem label="File">
      <MenuItem label="New" />
      <MenuItem label="Open" />
    </MenuItem>
  );


  ```




  ### 2.4 **Decorator**


  Attaches additional responsibilities to an object dynamically.​


  ```

  const withLogging = (Component) => (props) => {
    React.useEffect(() => {
      console.log('Component mounted');
      return () => console.log('Component unmounted');
    }, []);
    return <Component {...props} />;
  };


  const EnhancedComponent = withLogging(SomeComponent);


  ```




  ### 2.5 **Facade**


  Provides a simplified interface to a larger body of code.


  ```

  const useAPI = () => {
    const fetchData = async (endpoint) => {
      const response = await fetch(endpoint);
      return response.json();
    };

    return { fetchData };
  };


  const DataFetcher = ({ endpoint }) => {
    const { fetchData } = useAPI();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetchData(endpoint).then(setData);
    }, [endpoint]);

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
  };


  ```




  ### 2.6 **Flyweight**


  Uses sharing to support large numbers of fine-grained objects efficiently.


  ```

  const heavyData = new Map();


  const getHeavyData = (key) => {
    if (!heavyData.has(key)) {
      heavyData.set(key, computeHeavyData(key));
    }
    return heavyData.get(key);
  };


  ```




  ### 2.7 **Proxy**


  Provide a placeholder to control access to another object.

  In React, it's commonly used for **authorization**, **lazy loading**, or **logging wrappers**.


  ```

  const withAuth = (Component) => (props) => {
    const isAuthenticated = useAuth(); // Custom hook or context

    if (!isAuthenticated) {
      return <p>You must log in to access this page.</p>;
    }

    return <Component {...props} />;
  };


  // Usage

  const Dashboard = () => <div>Private content</div>;

  const ProtectedDashboard = withAuth(Dashboard);


  ```




  ## 🔁 3. **Behavioral Patterns**


  **Goal:** Handle **communication, delegation, and responsibility** between objects.




  ### 3.1 **Observer**


  **React built-in!** Listens for state changes and reacts.


  ```

  const Counter = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      console.log('Count updated:', count);
    }, [count]);

    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  };


  ```




  ### 3.2 **Strategy**


  Select behavior at runtime.


  ```

  const UpperCase = ({ text }) => <p>{text.toUpperCase()}</p>;

  const LowerCase = ({ text }) => <p>{text.toLowerCase()}</p>;


  const TextFormatter = ({ text, strategy: Strategy }) => <Strategy text={text} />;


  // <TextFormatter text="Hello" strategy={UpperCase} />


  ```




  ### 3.3 **Command**


  Encapsulate actions as objects/functions.


  ```

  const useCommand = () => {
    const [log, setLog] = React.useState([]);

    const execute = (command) => {
      command();
      setLog((prev) => [...prev, command.name]);
    };

    return { execute, log };
  };


  const sayHello = () => alert("Hello!");


  const App = () => {
    const { execute } = useCommand();
    return <button onClick={() => execute(sayHello)}>Run</button>;
  };


  ```




  ### 3.4 **Chain of Responsibility**


  Pass request along a chain of handlers.


  ```

  const withPermission = (Component) => (props) =>
    props.user.isAdmin ? <Component {...props} /> : <p>Access Denied</p>;

  const withLogging = (Component) => (props) => {
    console.log("Rendering", Component.name);
    return <Component {...props} />;
  };


  const AdminPanel = (props) => <div>Admin Stuff</div>;


  const ProtectedAdmin = withLogging(withPermission(AdminPanel));


  ```




  ### 3.5 **Mediator**


  Centralize communication between components.


  ```

  const MediatorContext = React.createContext();


  const MediatorProvider = ({ children }) => {
    const [message, setMessage] = React.useState("");
    return (
      <MediatorContext.Provider value={{ message, setMessage }}>
        {children}
      </MediatorContext.Provider>
    );
  };


  const Sender = () => {
    const { setMessage } = React.useContext(MediatorContext);
    return <button onClick={() => setMessage("Hi from Sender")}>Send</button>;
  };


  const Receiver = () => {
    const { message } = React.useContext(MediatorContext);
    return <p>Received: {message}</p>;
  };


  ```




  ### 3.6 **Memento**


  Capture and restore object state.


  ```

  const useMemento = () => {
    const [history, setHistory] = React.useState([]);
    const [state, setState] = React.useState("");

    const save = () => setHistory((h) => [...h, state]);
    const undo = () => {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setState(prev);
    };

    return { state, setState, save, undo };
  };


  ```




  ### 3.7 **Template Method**


  Define the skeleton, defer specifics to children.


  ```

  const BaseForm = ({ onSubmit, renderFields }) => (
    <form onSubmit={onSubmit}>
      {renderFields()}
      <button type="submit">Submit</button>
    </form>
  );


  const LoginForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Login");
    };

    return (
      <BaseForm
        onSubmit={handleSubmit}
        renderFields={() => (
          <>
            <input placeholder="Username" />
            <input placeholder="Password" type="password" />
          </>
        )}
      />
    );
  };


  ```




  ### 3.8 **State**


  Allow an object to alter its behavior when its internal state changes.


  ```

  const TrafficLight = () => {
    const [state, setState] = React.useState("red");

    const next = {
      red: "green",
      green: "yellow",
      yellow: "red",
    };

    return (
      <button onClick={() => setState(next[state])}>
        Current: {state.toUpperCase()}
      </button>
    );
  };


  ```




  ### 3.9 **Visitor**


  **Intent:** Add new operations to components without changing their code.


  Useful when you want to apply operations across a structure (e.g. analytics, transformations).


  ```

  const Visitor = (component, fn) => {
    return React.cloneElement(component, fn(component.props));
  };


  const UserCard = (props) => <div>{props.name}</div>;


  // Apply visitor to change props without modifying UserCard itself

  const ModifiedUserCard = Visitor(<UserCard name="Alice" />, (props) => ({
    name: props.name.toUpperCase()
  }));


  ```




  ### 3.10 **Interpreter Pattern**


  **Intent:** Interpret or evaluate expressions defined in a mini-language.


  Great for parsing user inputs, filters, or search queries.


  ```

  const interpret = (expression) => {
    const tokens = expression.split(" ");
    const [a, op, b] = tokens;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    const operations = {
      '+': () => numA + numB,
      '-': () => numA - numB,
      '*': () => numA * numB,
      '/': () => numA / numB,
    };

    return operations[op] ? operations[op]() : NaN;
  };


  // interpret("10 * 2") => 20


  ```




  ### 3.11 **Iterator Pattern**


  **Intent:** Traverse a collection without exposing its structure.


  Useful in React for custom iteration logic (e.g. carousels, sliders, paginated lists)


  ```

  const useIterator = (items = []) => {
    const [index, setIndex] = React.useState(0);

    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const current = items[index];

    return { current, next, prev, index };
  };


  // Usage:

  const Carousel = ({ images }) => {
    const { current, next, prev } = useIterator(images);
    return (
      <div>
        <button onClick={prev}>Prev</button>
        <img src={current} alt="carousel" />
        <button onClick={next}>Next</button>
      </div>
    );
  };


  ```
---
