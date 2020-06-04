import client from "../db/database.ts";

class Photo {
  findAll() {
    return client.execute("SELECT * FROM photos ORDER BY Id");
  }

  findById(id: string) {
    return client.execute(
      `SELECT * FROM photos WHERE Id = ? ORDER BY Id`,
      [id],
    );
  }

  create(
    {
      Id,
      Url,
      Description,
      DateAdded,
      IsMain,
      PublicId,
      UserId,
    }: {
      Id: number;
      Url: string;
      Description: string;
      DateAdded: Date;
      IsMain: number;
      PublicId: string;
      UserId: number;
    },
  ) {
    return client.execute(
      "INSERT INTO photos (Url, Description, DateAdded, IsMain, PublicId, UserId) VALUES (?, ?, ?, ?, ?, ?)",
      [
        Url,
        Description,
        DateAdded,
        IsMain,
        PublicId,
        UserId,
      ],
    );
  }

  update(
    {
      Id,
      Url,
      Description,
      DateAdded,
      IsMain,
      PublicId,
      UserId,
    }: {
      Id: number;
      Url: string;
      Description: string;
      DateAdded: Date;
      IsMain: number;
      PublicId: string;
      UserId: number;
    },
  ) {
    return client.execute(
      `UPDATE photos SET Url = ?, 
      Description = ?,
      DateAdded = ?,
      IsMain = ?,
      PublicId = ?,
      UserId = ?,
      Created = ?
      WHERE Id = ?`,
      [
        Url,
        Description,
        DateAdded,
        IsMain,
        PublicId,
        UserId,
        Id,
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM photos WHERE Id = ?`, [id]);
  }
}

export default new Photo();
