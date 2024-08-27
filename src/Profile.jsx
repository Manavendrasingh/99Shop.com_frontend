import React from "react";
import { useSelector } from "react-redux";





const Profile = () => {

  let userData = useSelector((store)=>store.user.userData);
  let {email , id , userName,address}  = userData[0].data;
 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl">
        <div className="p-4">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">{userName}</h2>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <div className="mt-2">
              <p className="text-gray-600">
                <strong>Email:</strong> {email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> {address}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Order History</h3>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li className="text-gray-600">Order #12345 - Delivered</li>
                <li className="text-gray-600">Order #67890 - In Transit</li>
                <li className="text-gray-600">Order #54321 - Cancelled</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Saved Payment Methods</h3>
            <div className="mt-2">
              <p className="text-gray-600">
                <strong>Visa:</strong> **** **** **** 1234
              </p>
              <p className="text-gray-600">
                <strong>MasterCard:</strong> **** **** **** 5678
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4">
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white text-xs uppercase px-4 py-2 rounded">
              Edit Profile
            </button>
            <button className="bg-red-500 text-white text-xs uppercase px-4 py-2 rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
