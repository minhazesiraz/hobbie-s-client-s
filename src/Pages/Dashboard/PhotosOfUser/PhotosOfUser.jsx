import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import Cropper from "react-easy-crop";
import Modal from "react-modal";
import { app } from "../../../../firebase.config";
import useHelper from "../../../Clip/useHelper";
/* Correctly import the utilities function's to get the cropped image */
import getCropping from "../../../utilities/getCropping";

const auth = getAuth(app);
const storage = getStorage(app);

const UserProfile = () => {
   const [selectedImage, setSelectedImage] = useState(null);
   const [uploading, setUploading] = useState(false);
   const { user } = useHelper();
   const [crop, setCrop] = useState({ x: 0, y: 0 });
   const [zoom, setZoom] = useState(1);
   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
   const [cropModalOpen, setCropModalOpen] = useState(false);
   const [imageSrc, setImageSrc] = useState(null);
   const fileInputRef = useRef(null);

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = () => {
            setImageSrc(reader.result);
            setCropModalOpen(true);
         };
         reader.readAsDataURL(file);
      }
   };

   const onCropComplete = (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
   };

   const handleCropSave = async () => {
      try {
         setUploading(true);
         const croppedImageBlob = await getCropping(imageSrc, croppedAreaPixels);
         const storageRef = ref(storage, `profilePictures/${auth.currentUser.uid}`);
         await uploadBytes(storageRef, croppedImageBlob);
         const downloadURL = await getDownloadURL(storageRef);
         await updateProfile(auth.currentUser, { photoURL: downloadURL });
         setSelectedImage(downloadURL);
         setUploading(false);
         setCropModalOpen(false);
         /* Reset file input's */
         fileInputRef.current.value = null;
      } catch (error) {
         console.error("Error uploading file:", error);
         setUploading(false);
      }
   };

   const handleModalClose = () => {
      setCropModalOpen(false);
      /* Reset file input's */
      fileInputRef.current.value = null;
   };

   return (
      <>

         <input
            id="id-dropzone01"
            name="file-upload"
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
         />
         <label
            htmlFor="id-dropzone01"
            className="relative flex cursor-pointer items-center justify-center w-full h-full rounded-full ring-1 ring-sky-500 ring-offset-1 text-center text-sm font-medium transition-colors overflow-hidden"
         >
            {selectedImage ? (
               <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="object-cover w-full h-full rounded-full"
               />
            ) : (
               <>
                  <img
                     src={user?.photoURL ? user.photoURL : "https://i.pravatar.cc/150?img=1"}
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

         {/* main.jsx - Modal.setAppElement('#root'); */}
         {/* <Modal
            isOpen={cropModalOpen}
            onRequestClose={handleModalClose}
            contentLabel="Crop Image"
            style={{
               overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
               },
               content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  width: "400px",
                  height: "450px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
               },
            }}
         >
            <div className="crop-container relative w-full h-full flex-grow">
               <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
               />
            </div>
            <div className="flex justify-end space-x-4 mt-4">
               <button
                  onClick={handleCropSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
               >
                  Save
               </button>
               <button
                  onClick={handleModalClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
               >
                  Cancel
               </button>
            </div>
            {uploading && <p>Uploading...</p>}
         </Modal> */}


         <Modal
            isOpen={cropModalOpen}
            onRequestClose={handleModalClose}
            contentLabel="Crop Image"
            className="flex items-center justify-center fixed inset-0"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
         >
            <div className="bg-white rounded-lg w-[400px] h-[450px] p-5 flex flex-col items-center justify-center">
               <div className="crop-container relative w-full h-full flex-grow">
                  <Cropper
                     image={imageSrc}
                     crop={crop}
                     zoom={zoom}
                     aspect={1}
                     onCropChange={setCrop}
                     onZoomChange={setZoom}
                     onCropComplete={onCropComplete}
                  />
               </div>
               <div className="flex justify-end space-x-4 mt-4">
                  <button
                     onClick={handleCropSave}
                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                     Save
                  </button>
                  <button
                     onClick={handleModalClose}
                     className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                  >
                     Cancel
                  </button>
               </div>
               {uploading && <p className="mt-2 text-gray-700">Uploading...</p>}
            </div>
         </Modal>


      </>
   );
};

export default UserProfile;
