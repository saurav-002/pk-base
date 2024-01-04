import { pb } from "@/lib/pocketbase";
import { revalidatePath } from "next/cache";

const page = async () => {
  const create = async (formData: FormData) => {
    "use server";

    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      isDone: formData.get("isDone"),
    };
    try {
      const inserted = await pb.collection("todo").create(data);
      console.log("data inserted :", inserted);
      revalidatePath("/");
    } catch (err) {
      console.error("ERROR :", err);
    }
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form action={create} className="flex flex-col gap-2 m-4 max-w-sm">
        <input
          placeholder="title"
          name="title"
          className="p-1 dark:text-white text-black"
        />
        <input
          placeholder="description"
          name="description"
          className="p-1 dark:text-white text-black"
        />
        <label htmlFor="isDone" className="flex gap-2">
          <input
            placeholder="isDone"
            type="checkbox"
            name="isDone"
            id="isDone"
          />
          <span>isDone</span>
        </label>
        <button type="submit" className="p-2 bg-blue-700">
          Create
        </button>
      </form>
    </div>
  );
};

export default page;
