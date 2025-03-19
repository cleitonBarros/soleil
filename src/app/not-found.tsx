
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Not Found",
  description: "The route you're trying to access doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <main className="">
      not found
    </main>
  );
}
