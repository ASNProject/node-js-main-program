// Helper database yang dibuat
const mysql = require("../helpers/database");
// Validation input
const Joi = require("joi");

class _blog {
  listSensor = async () => {
    try {
      const list = await mysql.query("SELECT * FROM dht_data", []);

      return {
        status: true,
        data: list,
      };
    } catch (error) {
      console.error("list data sensor Error", error);

      return {
        status: false,
        error,
      };
    }
  };

  addSensor = async (body) => {
    try {
      const schema = Joi.object({
        suhu_udara: Joi.number().required(),
      });

      const validation = schema.validate(body);

      if (validation.error) {
        const errorDetails = validation.error.details.map(
          (detail) => detail.message
        );

        return {
          status: false,
          code: 422,
          error: errorDetails.join(", "),
        };
      }

      const add = await mysql.query(
        "INSERT INTO dht_data(suhu_udara) VALUES (?)",

        [body.suhu_udara]
      );
      return {
        status: true,
        data: add,
      };
    } catch (error) {
      console.error("addnilai sensor module Error: ", error);

      return {
        status: false,
        error,
      };
    }
  };
}

module.exports = new _blog();
