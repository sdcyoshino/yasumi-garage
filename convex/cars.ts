import { query } from "./_generated/server";

const getAllCars = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("cars").collect();
  },
});

export {
    getAllCars,
};