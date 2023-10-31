import Image from "next/image";
import { api } from "./services/api";
import PostComponent from "./components/Post";

export type ElementsType = {
  type: "image" | "text";
  content: string;
};

export type PostType = {
  _id: string;
  title: string;
  elements: ElementsType[];
};

export default async function Home() {
  const data = await api
    .get<PostType[]>(
      "https://sa-east-1.aws.data.mongodb-api.com/app/data-zozni/endpoint/posts"
    )
    .then((response) => response.data);

  return (
    <main>
      <h1 className="font-bold text-3xl text-center">Posts</h1>

      {data.map((post) => (
        <PostComponent
          _id={post._id}
          title={post.title}
          key={post._id}
          elements={post.elements}
        />
      ))}
    </main>
  );
}
