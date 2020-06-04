import client from "../db/database.ts";

class Book {
  findAll() {
    return client.execute("SELECT * FROM users ORDER BY Id");
  }

  findById(id: string) {
    return client.execute(`SELECT * FROM books WHERE id = ? ORDER BY id`, [id]);
  }

  create(
    { title, description, price }: {
      title: string;
      description: string;
      price: string;
    }
  ) {
    return client.execute(
      "INSERT INTO books (title, description, price) VALUES (?, ?, ?)",
      [
        title,
        description,
        price,
      ],
    );
  }

  update({id, title, description, price }: { id: string, title: string, description: string, price: string}) {
    return client.execute(
      `UPDATE books SET title= ?, description= ?, price=? WHERE id = ?`,
      [
        title,
        description,
        price,
        id,
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM books WHERE id = ?`, [id]);
  }
}

export default new Book();