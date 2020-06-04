import client from "../db/database.ts";

class User {
  findAll() {
    return client.execute("SELECT * FROM users ORDER BY Id");
  }

  findById(id: string) {
    return client.execute(`SELECT * FROM users WHERE Id = ? ORDER BY Id`, [id]);
  }

  create(
    {
      Username,
      PasswordHash,
      PasswordSalt,
      Gender,
      DateOfBirth,
      KnownAs,
      Created,
      LastActive,
      Introduction,
      LookingFor,
      Interests,
      City,
      Country,
    }: {
      Username: string;
      PasswordHash: string;
      PasswordSalt: string;
      Gender: string;
      DateOfBirth: Date;
      KnownAs: string;
      Created: Date;
      LastActive: Date;
      Introduction: string;
      LookingFor: string;
      Interests: string;
      City: string;
      Country: string;
    },
  ) {
    return client.execute(
      "INSERT INTO users (Username, PasswordHash, PasswordSalt, Gender, DateOfBirth, KnownAs, Created, LastActive, Introduction, LookingFor, Interests, City, Country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        Username,
        PasswordHash,
        PasswordSalt,
        Gender,
        DateOfBirth,
        KnownAs,
        Created,
        LastActive,
        Introduction,
        LookingFor,
        Interests,
        City,
        Country,
      ],
    );
  }

  update(
    {
      Id,
      Username,
      PasswordHash,
      PasswordSalt,
      Gender,
      DateOfBirth,
      KnownAs,
      Created,
      LastActive,
      Introduction,
      LookingFor,
      Interests,
      City,
      Country,
    }: {
      Id: number;
      Username: string;
      PasswordHash: string;
      PasswordSalt: string;
      Gender: string;
      DateOfBirth: Date;
      KnownAs: string;
      Created: Date;
      LastActive: Date;
      Introduction: string;
      LookingFor: string;
      Interests: string;
      City: string;
      Country: string;
    },
  ) {
    return client.execute(
      `UPDATE users SET Username = ?, 
      PasswordHash = ?,
      PasswordSalt = ?,
      Gender = ?,
      DateOfBirth = ?,
      KnownAs = ?,
      Created = ?,
      LastActive = ?,
      Introduction = ?,
      LookingFor = ?,
      Interests = ?,
      City = ?,
      Country = ? WHERE Id = ?`,
      [
        Username,
        PasswordHash,
        PasswordSalt,
        Gender,
        DateOfBirth,
        KnownAs,
        Created,
        LastActive,
        Introduction,
        LookingFor,
        Interests,
        City,
        Country,
        Id,
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM users WHERE Id = ?`, [id]);
  }
}

export default new User();
