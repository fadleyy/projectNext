import React from "react";
import { addPost, delatePost } from "@/lib/action";

const serverActionTestPage = () => {
  //   const actionComponents = async () => {
  //     "use server";
  //     console.log("it works!");
  //   };

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>create</button>
      </form>

      <form action={delatePost}>
        <input type="text" placeholder="PostId" name="id" />
        <button>delete</button>
      </form>
    </div>
  );
};

export default serverActionTestPage;
