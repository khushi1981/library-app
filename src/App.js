import React, { useState } from "react";

function App() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
  });

  const [library, setLibrary] = useState([]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!book.title || !book.author) {
      alert("Title and Author required!");
      return;
    }

    setLibrary([...library, book]);

    setBook({
      title: "",
      author: "",
      isbn: "",
      category: "",
    });
  };

  return (
    <div style={styles.container}>
      <h1>📚 Library Form</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="title" placeholder="Book Title" value={book.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={book.author} onChange={handleChange} />
        <input name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} />
        <input name="category" placeholder="Category" value={book.category} onChange={handleChange} />

        <button type="submit">Add Book</button>
      </form>

      <h2>📖 Book List</h2>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {library.map((b, index) => (
            <tr key={index}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.isbn}</td>
              <td>{b.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  form: {
    marginBottom: "20px",
  },
};

export default App;