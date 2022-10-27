import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "What is cors?",
      answer:
        "Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a preflight request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.",
    },
    {
      id: 2,
      title:
        "Why are you using firebase? What other options do you have to implement authentication?",
      answer:
        "The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. As an Android developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc.Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development. I have been using it in my apps in production. You will not have to take care of servers, etc, Google will take care of it for you.OAuth 2.0, which stands for “Open Authorization”, is a standard designed to allow a website or application to access resources hosted by other web apps on behalf of a user. It replaced OAuth 1.0 in 2012 and is now the de facto industry standard for online authorization. OAuth 2.0 provides consented access and restricts actions of what the client app can perform on resources on behalf of the user, without ever sharing the user's credentials.Although the web is the main platform for OAuth 2, the specification also describes how to handle this kind of delegated access to other client types (browser-based applications, server-side web applications, native/mobile apps, connected devices, etc.)",
    },
    {
      id: 3,
      title: "How does the private route work?",
      answer:
        "The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading.",
    },
    {
      id: 4,
      title: "What is Node? How does Node work?",
      answer:
        "It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.",
    },
  ];
  return (
    <section className="blog py-10 bg-light">
      <div className="container">
        <h1 className="text-center text-3xl font-bold capitalize text-gray-600">
          our blog
        </h1>

        <div className="mt-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-content bg-white p-5 mb-5">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-base">{blog.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
