/* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import { useSession } from "next-auth/client";
// import Image from "next/image";
// import { EmojiHappyIcon } from "@heroicons/react/outline";
// import {
//   CameraIcon,
//   VideoCameraIcon
// } from "@heroicons/react/solid";

// export default function InputBox() {
//   const [session] = useSession();

//   return (
//     <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
//       <div className="flex space-x-4 p-4 items-center">
//         {session && <Image
//           className="rounded-full"
//           src={session.user.image}
//           width={40}
//           height={40}
//           layout="fixed"
//           alt={session.user.name}
//         />}
//         <form className="flex flex-1">
//           {session && <input
//             className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
//             type="text"
//             placeholder={`What's on your mind, ${session.user.name}?`}
//           />}
//           <button hidden type="submit">Submit</button>

//         </form>

//         {/* {imageToPost && (
//           <div onClick={removeImage} className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
//             <img className="object-contain h-10" src={imageToPost} alt="" />
//             <p className="text-xs text-red-500 text-center">Remove</p>
//           </div>
//         )} */}
//       </div>

//       <div className="flex justify-evenly p-3 border-t">
//         <div className="inputIcon">
//           <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
//           <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
//         </div>
//         <div className="inputIcon">
//           <CameraIcon className="h-7 text-green-400"></CameraIcon>
//           <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
//           <input type="file" hidden />
//         </div>
//         <div className="inputIcon">
//           <EmojiHappyIcon className="h-7 text-yellow-500"></EmojiHappyIcon>
//           <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
//         </div>
//       </div>
//     </div>
//   )
// }
import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import {
  CameraIcon,
  VideoCameraIcon
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import firebase from 'firebase';
import { db, storage } from "../firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);


  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
      .then(doc => {
        if (imageToPost) {
          const uploadPost = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url")

          removeImage();

          uploadPost.on("state_change", null, error => console.error(error), () => {
            // when upload is done.
            storage.ref("posts").child(doc.id).getDownloadURL().then(url => {
              db.collection("posts").doc(doc.id).set({
                postImage: url
              }, { merge: true })
            })
          })
        }
      })

    inputRef.current.value = "";
  }
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setImageToPost(null);
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        {session && <Image
          className="rounded-full"
          src={session.user.image}
          alt={session.user.name}
          width={40}
          height={40}
          layout="fixed"
        />}
        <form className="flex flex-1">
          {session && <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
            ref={inputRef}
          />}
          <button hidden type="submit" onClick={sendPost}>Submit</button>

        </form>

        {imageToPost && (
          <div onClick={removeImage} className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img className="object-contain h-10" src={imageToPost} alt='post' />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => filePickerRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400"></CameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} type="file" hidden onChange={addImageToPost} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500"></EmojiHappyIcon>
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox