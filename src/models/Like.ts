import client from "../db/database.ts";

class Like {
  findAll() {
    return client.execute("SELECT * FROM likes ORDER BY LikerId");
  }

  findById(id: string) {
    return client.execute(`SELECT * FROM likes WHERE LikerId = ? ORDER BY LikerId`, [id]);
  }

  create(
    { LikerId, LikeeId }: {
      LikerId: number;
      LikeeId: number;
    }
  ) {
    return client.execute(
      "INSERT INTO likes (LikerId, LikeeId) VALUES (?, ?)",
      [
        LikerId,
        LikeeId
      ],
    );
  }

  update({ LikerId, LikeeId }: { LikerId: number, LikeeId: number }) {
    return client.execute(
      `UPDATE likes SET LikerId= ?, LikeeId= ? WHERE LikerId = ?`,
      [
        LikerId,
        LikeeId
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM likes WHERE LikerId = ?`, [id]);
  }
}

export default new Like();