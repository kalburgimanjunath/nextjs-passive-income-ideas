import { Input } from '../../components/';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function index() {
  const [posts, setPosts] = useState();
  const fetchRecords = () => {
    fetch(
      'https://api.airtable.com/v0/appkjlwWrVqVpSC7i/allposts?api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  const saveData = (data) => {
    const url = `https://api.airtable.com/v0/appkjlwWrVqVpSC7i/allposts`;
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer keyeNXyxxuuYJY19w',
      },
      body: JSON.stringify(data),
      typecast: true,
    };
    console.log(requestOptions);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchRecords();
  });
  return (
    <div>
      <header>
        <h4>Submit a Post to our community</h4>
      </header>

      <div>
        <Formik
          initialValues={{ title: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            }
            if (!values.description) {
              errors.description = 'Required';
            }
            if (!values.content) {
              errors.content = 'Required';
            }
            if (!values.tags) {
              errors.tags = 'Required';
            }
            if (!values.category) {
              errors.category = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert('Successfully posted');
              saveData({
                fields: values,
              });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="mx-auto">
              <Field
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="title"
              />
              <ErrorMessage name="title" component="div" />

              <Field
                type="text"
                name="description"
                value={values.description}
                placeholder="description"
              />
              <ErrorMessage name="description" component="div" />

              <Field
                type="text"
                name="content"
                value={values.content}
                placeholder="content"
              />
              <ErrorMessage name="content" component="div" />
              <Field
                type="text"
                name="tags"
                value="tags"
                value={values.tags}
                placeholder="tags"
              />
              <ErrorMessage name="tags" component="div" />
              <Field
                type="text"
                name="category"
                value={values.category}
                placeholder="category"
              />
              <ErrorMessage name="category" component="div" />

              <footer>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit Post
                </button>
                <button className="btn btn-default">Cancel Post</button>
              </footer>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
