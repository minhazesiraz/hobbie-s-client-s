import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { app } from "../../../firebase.config";
import useHelper from "../../Clip/useHelper";

const auth = getAuth(app);
const storage = getStorage(app);

const UserProfile = () => {
   const [selectedImage, setSelectedImage] = useState(null);
   const [uploading, setUploading] = useState(false);
   const { user } = useHelper();

   const handleFileChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
         setUploading(true);
         const imageUrl = URL.createObjectURL(file);
         setSelectedImage(imageUrl);

         const storageRef = ref(storage, `profilePictures/${auth?.currentUser?.uid}`);
         try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            await updateProfile(auth.currentUser, { photoURL: downloadURL });
            // Optional: Update the user state with the new photoURL
            setUploading(false);
         } catch (error) {
            console.error('Error uploading file:', error);
            setUploading(false);
         }
      }
   };

   return (
      <>
         <section className="max-w-7xl mx-auto my-14">
            <div className="container px-6 m-auto">
               <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <aside className="col-span-4 flex justify-center items-center border">
                     <div className="relative my-6 w-36 h-36">
                        <input
                           id="id-dropzone01"
                           name="file-upload"
                           type="file"
                           className="hidden"
                           onChange={handleFileChange}
                        />
                        <label
                           htmlFor="id-dropzone01"
                           className="relative flex cursor-pointer items-center justify-center w-full h-full rounded-full border border-dashed border-slate-300 text-center text-sm font-medium transition-colors overflow-hidden"
                        >
                           {selectedImage ? (
                              <img
                                 src={selectedImage}
                                 alt="Uploaded"
                                 className="object-cover w-full h-full"
                              />
                           ) : (
                              <>
                                 <img
                                    src={user?.photoURL ? user.photoURL : 'https://i.pravatar.cc/150?img=1'}
                                    alt="Current Profile"
                                    className="object-cover w-full h-full rounded-full"
                                 />
                                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       aria-label="File input icon"
                                       role="graphics-symbol"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       strokeWidth="1.5"
                                       stroke="currentColor"
                                       className="h-12 w-12"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                       />
                                    </svg>
                                    <span className="text-sm mt-2">Change Profile Picture</span>
                                 </div>
                              </>
                           )}
                        </label>
                        {uploading && <p>Uploading...</p>}
                     </div>
                  </aside>
                  <div className="col-span-4 lg:col-span-8">Column 8/12</div>
               </div>
            </div>
         </section>
      </>
   );
};

export default UserProfile;
