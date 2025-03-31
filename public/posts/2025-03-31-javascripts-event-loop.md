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
  One of the most common sources of confusion in JavaScript is the interplay
  between the **call stack**, the **task queue**, and the **microtask queue**.
  Let's analyze the following snippet to break it down:


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

  ```


  ### **Execution Breakdown:**


  \

  **1. Call Stack Execution:**


  * a() is invoked, pushing a onto the call stack.

  * a() calls b(), adding b to the stack.

  * b() calls c(), adding c to the stack  and sets up a setTimeout (macro-task) and a promise().then (micro-task).

  * c() returns "c", which resolves b() as "bc".

  * b() returns "bc", resolving a() as "abc".

  * Since a() fully executes before the event loop intervenes, the first logged value is: **abc**


  \

  **2. Microtasks vs. Macrotasks:**\

  The most important **difference between microtask** and **macrotasks** lies in **how the queues are processed**. The **priority is higher in the microtask queue** vs the macrotask one.


  * promise().then(() => console.log("prima risolta")) is added to the microtask queue.

  * setTimeout(() => console.log("seconda risolta"), 10) is added to the task queue (macro-task queue). 


  **3. Event Loop Processing:**\

  NB: we are **talking about the execution of the associated callbacks**.\

  In this case, for example, the timer of the setTimeout is already running, but the function that prints 'seconda risolta' will be **executed only after bothe the callstack and the micro-task queue are empty:**


  * Once the call stack is empty, the microtask queue executes before the macro-task queue.

  * The first resolved async operation is the promise, so "prima risolta" is logged first.- Finally, after the delay, "seconda risolta" is logged.
---
