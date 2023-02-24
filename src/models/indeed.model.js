const mongoose = require("mongoose");

const IndeedSchema = new mongoose.Schema(
  {
    data: {
      inventory: {
        jobID: { type: String },
        posted: { type: Date },
        searchOrigin: { type: String, default: null },
      },
      origin_title: { type: String },
      job_info: {
        companyName: { type: String },
        locations: [
          {
            street: { type: String, default: null },
            city: { type: String, default: null },
            state: { type: String, default: null },
            zip: { type: String, default: null },
            country: { type: String },
          },
        ],
      },
      remote: {
        type: String,
        enum: ["remote", "hybrid", "in-person"],
        default: null,
      },
      visa: { type: String, default: null },
      citizenship: { type: String, default: null },
      clearence: { type: String, default: null },
      educationRequirenment: {
        degree: {
          type: String,
          enum: ["hs", "associate", "bachelors", "masters", "phd"],
          default: null,
        },
        major: { type: String, default: null },
      },
      skills: [String],
      job_type: [String],
      compensation: {
        salary: {
          min: { type: Number, default: null },
          max: { type: Number, default: null },
          interval: { type: String, default: null },
        },
        benefits: {
          other: [String],
          _401K: { type: Number, enum: [0, 1] },
          _401K_matching: { type: Number, enum: [0, 1] },
          PTO: { type: Number, enum: [0, 1] },
          insurance: {
            health: { type: Number, enum: [0, 1] },
            dental: { type: Number, enum: [0, 1] },
            vision: { type: Number, enum: [0, 1] },
            life: { type: Number, enum: [0, 1] },
          },
        },
      },
      job_description: { type: String, default: null },
    },
  },
  { collection: "indeed" }
);

const indeed = mongoose.model("indeed", IndeedSchema);
module.exports = indeed;
