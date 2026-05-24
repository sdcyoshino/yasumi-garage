import { query } from "./_generated/server";

const getAllCars = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    return await ctx.db.query("cars").collect();
  },
});

export {
    getAllCars,
};