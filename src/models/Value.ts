import client from "../db/database.ts";

class Value {
  findAll(filter = {}) {
    const query = "SELECT * FROM values ORDER BY Id ";
    return client.execute("");
  }

  findById(id: string) {
    return client.execute(
      `SELECT * FROM values WHERE Id = ? ORDER BY Id`,
      [id],
    );
  }

  create(
    {
      Name,
    }: {
      Name: string;
    },
  ) {
    return client.execute(
      "INSERT INTO values (Name) VALUES (?)",
      [
        Name,
      ],
    );
  }

  update(
    {
      Id,
      Name,
    }: {
      Id: number;
      Name: string;
    },
  ) {
    return client.execute(
      `UPDATE values SET Name = ?
      WHERE Id = ?`,
      [
        Name,
        Id,
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM values WHERE Id = ?`, [id]);
  }
}

export default new Value();
