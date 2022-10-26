import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "What is cors?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa asperiores laborum consectetur soluta alias tempora labore qui laboriosam culpa voluptates iure esse, eius debitis? Reprehenderitquasi ex blanditiis fugit eos?",
    },
    {
      id: 2,
      title:
        "Why are you using firebase? What other options do you have to implement authentication?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa asperiores laborum consectetur soluta alias tempora labore qui laboriosam culpa voluptates iure esse, eius debitis? Reprehenderitquasi ex blanditiis fugit eos?",
    },
    {
      id: 3,
      title: "How does the private route work?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa asperiores laborum consectetur soluta alias tempora labore qui laboriosam culpa voluptates iure esse, eius debitis? Reprehenderitquasi ex blanditiis fugit eos?",
    },
    {
      id: 4,
      title: "What is Node? How does Node work?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa asperiores laborum consectetur soluta alias tempora labore qui laboriosam culpa voluptates iure esse, eius debitis? Reprehenderitquasi ex blanditiis fugit eos?",
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
              <p className="lg:max-w-xl text-gray-500 text-base">
                {blog.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
