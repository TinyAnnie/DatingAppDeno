import client from "../db/database.ts";

class Message {
  findAll() {
    return client.execute("SELECT * FROM messages ORDER BY Id");
  }

  findById(id: string) {
    return client.execute(
      `SELECT * FROM messages WHERE Id = ? ORDER BY Id`,
      [id],
    );
  }

  create(
    {
      SenderId,
      RecipientId,
      Content,
      IsRead,
      DateRead,
      MessageSent,
      SenderDeleted,
      RecipientDeleted,
    }: {
      SenderId: number;
      RecipientId: number;
      Content: string;
      IsRead: number;
      DateRead: Date;
      MessageSent: Date;
      SenderDeleted: number;
      RecipientDeleted: number;
    },
  ) {
    return client.execute(
      "INSERT INTO messages (SenderId, RecipientId, Content, IsRead, DateRead, MessageSent, SenderDeleted, RecipientDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        SenderId,
        RecipientId,
        Content,
        IsRead,
        DateRead,
        MessageSent,
        SenderDeleted,
        RecipientDeleted,
      ],
    );
  }

  update(
    {
      Id,
      SenderId,
      RecipientId,
      Content,
      IsRead,
      DateRead,
      MessageSent,
      SenderDeleted,
      RecipientDeleted,
    }: {
      Id: number;
      SenderId: number;
      RecipientId: number;
      Content: string;
      IsRead: number;
      DateRead: Date;
      MessageSent: Date;
      SenderDeleted: number;
      RecipientDeleted: number;
    },
  ) {
    return client.execute(
      `UPDATE messages SET SenderId = ?, 
      RecipientId = ?,
      Content = ?,
      IsRead = ?,
      DateRead = ?,
      MessageSent = ?,
      SenderDeleted = ?,
      RecipientDeleted = ? 
      WHERE Id = ?`,
      [
        SenderId,
        RecipientId,
        Content,
        IsRead,
        DateRead,
        MessageSent,
        SenderDeleted,
        RecipientDeleted,
        Id,
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM messages WHERE Id = ?`, [id]);
  }
}

export default new Message();
