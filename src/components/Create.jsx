import React from "react";
import { useForm } from "react-hook-form";

function Create() {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" w-[40%] h-[80%] fixed top-20 left-[30%] inset-0 bg-black/40 backdrop-blur-md flex  justify-center z-50 transform-all rounded-xl 
animate-popup ">
      <div className="flex flex-col p-2 gap-5 ">
        <div>
          <h1 className="text-xl font-medium text-amber-500">Create A Recipes</h1>
          <button
            onClick={close}
            className="absolute top-1 right-2 text-gray-200 text-2xl font-bold"
          >
            ✕
          </button>
        </div>
        <form className="flex flex-col gap-3">
          <input type="url" {...register("image")} placeholder="Enter The Image Url" 
          className="w-[25rem] border-none outline-none px-3 py-3 bg-gray-900 rounded-4xl font-medium text-white text-xl " />
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter The Recipes Name"
            className="w-[25rem] border-none outline-none px-3 py-3 bg-gray-900 rounded-4xl font-medium text-white text-xl"
          />
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter The Recipes Title"
            className="w-[25rem] border-none outline-none px-3 py-3 bg-gray-900 rounded-4xl font-medium text-white text-xl"
          />
          <textarea
            {...register("Ingredients", { required: true })}
            placeholder="Enter The Ingredients"
            className="w-[25rem] border-none outline-none px-3 py-3 bg-gray-900 rounded-4xl font-medium text-white text-xl"
          ></textarea>
          <input
            type="number"
            {...register("number", { required: true })}
            placeholder="Enter Price"
            className="w-[25rem] border-none outline-none px-3 py-3 bg-gray-900 rounded-4xl font-medium text-white text-xl"
          />
          <select className="w-[10rem] border-none outline-none px-5 py-3 bg-gray-900 rounded-4xl font-medium text-white text-xl">
            <option value="veg" >Veg</option>
            <option value="non-veg">Non-veg</option>
          </select>

          <button className="w-full bg-lime-800 py-3 px-2 text-xl rounded-4xl active:scale-95 font-medium">Save Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
