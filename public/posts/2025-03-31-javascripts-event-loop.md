---
title: JavaScript's Event Loop
order: 50
description: Understand how JavaScript prioritizes microtasks over macrotasks
  for optimal performance.
shortDescription: Understand how JavaScript prioritizes microtasks over
  macrotasks for optimal performance.
slug: js-event-loop
image: https://res.cloudinary.com/dmgymopan/image/upload/v1743426383/marcelloluatti.com/m0wr8umptc7vp26im2u5.png
tags:
  - name: LIFO (callstack) - FIFO (microtask queue)
  - name: event loop
content: >-
  **INTRO**



  One of the most common sources of confusion in JavaScript is the interplay between the **call stack**, the **task queue**, and the **microtask queue**. Let's analyze the following snippet to break it down:


  Understanding the **JavaScript Event Loop** is crucial because it explains how JavaScript handles **asynchronous operations** despite being a **single-threaded** language. 


  Since **JavaScript runs on a single thread**, it can **only execute one task at a time**. However, modern applications often **require handling multiple operations simultaneously**, such as fetching data from an API, reading files, or responding to user interactions.


  **The Event Loop is the mechanism that allows JavaScript to efficiently manage and execute asynchronous tasks** **without blocking the main thread.** 


  It ensures that operations like **callbacks, promises, and async/await** are processed in the right order, maintaining smooth performance and responsiveness in web applications.




  **CONCEPTS**



  **Call Stack - LIFO**

  The **Call Stack** is a data structure that keeps track of function execution in JavaScript. When a function is called, it is **pushed** onto the stack, and when it completes, it is **popped** off. Since JavaScript is single-threaded, only one function can execute at a time. If the stack becomes too deep (due to excessive recursion or infinite loops), it can lead to a **stack overflow** error.


  **Macrotask Queue (Task Queue)**

  The **Macrotask Queue** (also called the **Task Queue**) holds tasks that should be executed after the current execution stack is empty. These include:

  - setTimeout()

  - setInterval()

  - requestAnimationFrame()

  - I/O operations

  Each macrotask is executed **after** the current call stack is cleared and before the next event loop iteration starts.


  **Microtask Queue - FIFO**

  The **Microtask Queue** holds higher-priority tasks that should be executed **immediately after the current execution stack** but before any macrotasks. These include:

  - promises

  Since microtasks run before macrotasks, they can lead to **starvation** (macrotasks being delayed indefinitely if microtasks keep adding new ones).


  **EXECUTION BREAKDOWN**


  ```

  const promise = () =>
    new Promise((r) => {
      r(true);
    });

  const getEventLoop = () => {
    function c() {
      return "c";
    }

    function b() {
      setTimeout(() => {
        console.log("seconda risolta");
      }, 10);
      promise().then(() => {
        console.log("prima risolta");
      });
      return `b${c()}`;
    }

    function a() {
      return `a${b()}`;
    }

    return a();
  };


  getEventLoop()


  ```



  **1. Call Stack Execution:**


  * a() is invoked, pushing a onto the call stack.

  * a() calls b(), adding b to the stack.

  * b() calls c(), adding c to the stack  and sets up a setTimeout (macro-task) and a promise().then (micro-task).

  * c() returns "c", which resolves b() as "bc".

  * b() returns "bc", resolving a() as "abc".

  * Since a() fully executes before the event loop intervenes, the first logged value is: **abc**



  **2. Microtasks vs. Macrotasks:**

  The most important **difference between microtask** and **macrotasks** lies in **how the queues are processed**. The **priority is higher in the microtask queue** vs the macrotask one.


  * promise().then(() => console.log("prima risolta")) is added to the microtask queue.

  * setTimeout(() => console.log("seconda risolta"), 10) is added to the task queue (macro-task queue). 


  **3. Event Loop Processing:**

  NB: we are **talking about the execution of the associated callbacks**.

  In this case, for example, the timer of the setTimeout is already running, but the function that prints 'seconda risolta' will be **executed only after both the callstack and the micro-task queue are empty:**


  * Once the call stack is empty, the microtask queue executes before the macro-task queue.

  * The first resolved async operation is the promise, so "prima risolta" is logged first.

  * Finally, after the delay, "seconda risolta" is logged.
---
