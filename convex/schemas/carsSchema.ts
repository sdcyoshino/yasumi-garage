import { defineTable } from "convex/server";
import { v } from "convex/values";

const carsSchema = defineTable(
        {
            plateNumber: v.string(),
            make: v.string(),
            model: v.string(),
            year: v.number(),
            color: v.string(),
            // owner: v.id("users"),
        }
    );

export default carsSchema;