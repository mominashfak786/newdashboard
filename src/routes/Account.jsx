import React from "react";

const Account = () => {
  return (
      <>
      
              <section className="bg-gray-150 mt-5">
    <div className="flex flex-wrap">
    <div className="w-full lg:w-1/3 mb-4 md:ml-10">
        <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
          <div className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-full mx-auto w-32"
            />
            <h5 className="my-3 text-lg font-medium">John Smith</h5>
            <p className="text-gray-500 mb-1">Full Stack Developer</p>
            <p className="text-gray-500">Bay Area, San Francisco, CA</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="btn btn-primary mr-2">Edit</button>
            <button className="btn btn-outline-primary">Update</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mb-4 md:ml-12 ">

        <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">My Referral ID:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">xxxxxx</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Business Category:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500"></p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Business Name:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500"></p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">ID Activated on:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">xx/xx/xxxx</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Full Name:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">Johnatan Smith</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Email:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">example@example.com</p>
                                  </div>
                                  </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Phone:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">(123) 456-7890</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Address:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">123 Main St, San Francisco, CA 94111</p>
            </div>
          </div> 
          <hr className="my-3" />
          <div className="flex justify-center">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
</section>
     
    </>
  );
};

export default Account;



