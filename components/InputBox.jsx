import React from 'react'
import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import {
  CameraIcon,
  VideoCameraIcon
} from "@heroicons/react/solid";

export default function InputBox() {
  const [session] = useSession();

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        {session && <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt={session.user.name}
        />}
        <form className="flex flex-1">
          {session && <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />}
          <button hidden type="submit">Submit</button>

        </form>

        {/* {imageToPost && (
          <div onClick={removeImage} className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img className="object-contain h-10" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )} */}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400"></CameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input type="file" hidden />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500"></EmojiHappyIcon>
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}
