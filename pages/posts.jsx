import dynamic from "next/dynamic";
import FetchPosts from "@/components/FetchPosts";

const Header = dynamic(() => import("main/header"), {
  ssr: false,
});

export default function Posts() {
  return (
    <>
      <Header />
      <main>
        <h1 style={{marginBottom: "20px"}}>Posts from a remote API</h1>
        <h2 style={{marginBottom: "40px"}}>From Micro Front End 2</h2>
        <div style={{maxWidth: "600px", margin: "auto"}}>
          <FetchPosts />
        </div>
      </main>
    </>
  );
}
