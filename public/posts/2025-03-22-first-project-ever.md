---
title: Schema-Driven UI pattern
order: 10
description: React hook form wrapper
shortDescription: React hook form wrapper
slug: schema-driven-ui-pattern
image: https://res.cloudinary.com/dmgymopan/image/upload/v1743162711/marcelloluatti.com/Screenshot_2025-03-28_alle_12.50.31_df23pz.png
tags:
  - name: react hook form
  - name: npm
  - name: versioning
  - name: schema-driven-ui-pattern
content: >-
  ### **GOAL**


  While developing a SaaS solution for the [Bpmn](<>) (Business Process Model and Notation) project, I needed a way to manage **additional metadata** that could be injected into each BPMN element. This would enable users to dynamically enrich workflows, enhancing **flexibility and adaptability**.


  ### **HOW**


  To achieve this, I implemented a **Schema-Driven UI** pattern, allowing a **dynamic JSON-based interface** to be attached to each BPMN element.


  I also built a **custom wrapper library** around **React Hook Form**, streamlining form management and ensuring a smooth developer experience (published at that time to npm)


  ### 

  THE APPROACH

   [Playground](https://codesandbox.io/p/sandbox/form-one-playground-g9uwg?file=%2Fsrc%2FApp.js%3A1%2C1-298%2C1)

  ```

  import Form from "form-one";

  import * as Yup from "yup";

  import "antd/dist/antd.css";


  const getRandomInputItems = (length, label) =>
    Array.from({ length }, (e, i) => ({
      label: `${label}${i + 1}`,
      value: Math.random()
    }));

  const inputs = [
    {
      type: "divider",
      name: "divider",
      orientation: "left",
      label: "My main form"
    },
    {
      label: "First Name",
      name: "firstName",
      type: "input",
      defaultValue: "default value",
      placeholder: "Egs"
    },
    {
      label: "Custom Input",
      name: "customInput",
      type: "custom",
      CustomRender: ({ name }) => (
        <small>
          Beautiful input <strong>{name}</strong>
        </small>
      )
    },
    {
      label: "My birthday Name",
      name: "myBirthday",
      type: "datepicker"
    },
    {
      label: "Age",
      name: "myAge",
      type: "number"
    },
    {
      label: "radio example",
      name: "radio1",
      type: "radio",
      items: getRandomInputItems(4, "radio")
    },

    {
      label: "sliderone",
      name: "mySlider",
      type: "slider",
      min: 1,
      max: 20
    },
    {
      label: "email",
      name: "email",
      type: "input",
      placeholder: "test@email.com"
    },
    {
      label: "Text area",
      name: "myTextArea",
      type: "textArea",
      placeholder: "test@email.com"
    },
    {
      label: "Tree",
      name: "myTree",
      type: "tree",
      items: [
        {
          title: "parent 1",
          key: "0-0",
          children: [
            {
              title: "parent 1-0",
              key: "0-0-0",
              children: [
                {
                  title: "leaf",
                  key: "0-0-0-0",
                  disableCheckbox: true
                },
                {
                  title: "leaf",
                  key: "0-0-0-1",
                  children: [
                    {
                      title: "leaf inner",
                      key: "0-0-0-0-1",
                      disableCheckbox: true
                    },
                    {
                      title: "leaffino",
                      key: "0-0-0-1-2"
                    }
                  ]
                }
              ]
            },
            {
              title: "parent 1-1",
              key: "0-0-1",
              children: [
                {
                  title: <span style={{ color: "#1890ff" }}>sss</span>,
                  key: "0-0-1-0"
                }
              ]
            }
          ]
        }
      ],
      placeholder: "team eglobe"
    },
    {
      label: "Checkbox input",
      name: "myCheckbox",
      type: "checkbox",
      items: getRandomInputItems(4, "checkbox"),

      condition: ({ watch }) => {
        const myAge = watch("myAge");
        return myAge > 18;
      }
    },
    {
      type: "repeater",
      label: "Repeater input",
      name: "myRepeater",

      RenderPreview: ({ watch, name }) => {
        const data = watch(name);
        return (
          <div>
            <div>
              <strong>number:</strong>
              {data?.myNumber}
            </div>
          </div>
        );
      },
      items: [
        {
          type: "number",
          defaultValue: 2,
          label: "Choosen number in repeater",
          name: "myNumber"
        },
        {
          type: "select",
          label: "select",
          defaultValue: 1,
          name: "mySelect",
          items: [
            {
              value: 0,
              label: "LABEL 1"
            },
            {
              value: 1,
              label: "Label 2"
            }
          ]
        },
        {
          type: "repeater",
          label: "custom repeater inner",
          name: "myRepeaterInner",
          items: [
            {
              type: "number",
              label: "Choosen number in repeater",
              name: "myNumberInner",
              defaultValue: 4
            },
            {
              type: "select",
              label: "select",
              name: "mySelectInner",
              items: [
                {
                  value: 0,
                  label: "LABEL 1"
                },
                {
                  value: 1,
                  label: "Label 2"
                }
              ],
              condition: ({ watch, repeaterName }) => {
                const v = watch(repeaterName);
                return Number(v.myNumberInner) === 666;
              }
            },
            {
              type: "repeater",
              label: "custom repeater inner",
              name: "myRepeaterInnerInner",
              items: [
                {
                  type: "number",
                  label: "Choosen number in repeater",
                  name: "myNumberInnerInner",
                  defaultValue: 422
                },
                {
                  type: "select",
                  label: "select",
                  name: "mySelectInnerInner",
                  items: [
                    {
                      value: 0,
                      label: "LABEL 1"
                    },
                    {
                      value: 1,
                      label: "Label 2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];


  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("The Firstname is required").nullable(),
    myBirthday: Yup.string().required("The Birthday is required").nullable(),
    myAge: Yup.string().required("The Age is required").nullable(),
    myCheckbox: Yup.array()
      .min(1)
      .required("The Checkbox has to be checked somehow")
      .nullable(),
    myRepeater: Yup.array().when("myAge", {
      is: (age) => age && age > 18,
      then: Yup.array()
        .of(
          Yup.object().shape({
            myNumber: Yup.string().required("Please, choose a number"),
            myRepeaterInner: Yup.array().of(
              Yup.object()
                .shape({
                  myNumberInner: Yup.string().required("Please, choose a number"),
                  myRepeaterInnerInner: Yup.array().of(
                    Yup.object()
                      .shape({
                        myNumberInnerInner: Yup.string().required(
                          "Please, choose a number"
                        )
                      })
                      .required("Please, choose a number")
                  )
                })
                .required("Please, choose a number")
            )
          })
        )
        .required("The repeater has to be fulfilled correctly")
    })
  });


  const initialValues = {
    firstName: "Marcello",
    myAge: 19,
    myRepeater: [
      {
        myNumber: 1,
        mySelect: 0,
        myRepeaterInner: [
          {
            myNumberInner: 2
          }
        ]
      }
    ]
  };


  export default function App() {
    return (
      <Form
        layout="vertical"
        inputs={inputs}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log({ values })}
      />
    );
  }


  ```


  ### 

  [](/projects/bpmn)
---
