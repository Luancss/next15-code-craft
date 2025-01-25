import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";

export const Header = async () => {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};
