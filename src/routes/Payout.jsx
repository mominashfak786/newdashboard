import React from "react";

const Payout = () => {
  return (
    <>
      <div class="flex justify-center bg-white border border-gray-200 rounded-lg shadow ml-3 mr-3 mt-2 ">
        <form className=" md:pl-20 md:pr-20 p-3">
          <h5 className="mb-4  font-medium text-3xl text-center">Update Transfer Mode</h5>
          <div className="mb-4">
            <p className="font-medium mb-2">Select any one of them:</p>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                name="transferMode"
                defaultValue="bankTransfer"
                defaultChecked=""
              />
              <span className="ml-2 text-gray-700">Bank Transfer</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                name="transferMode"
                defaultValue="paypal"
              />
              <span className="ml-2 text-gray-700">PayPal</span>
            </label>
            <label className="inline-flex items-center ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 mt-2  text-blue-600"
                name="transferMode"
                defaultValue="paymentLink"
              />
              <span className="ml-2 mt-2 text-gray-700">Payment Link</span>
            </label>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block font-medium mb-2"
                htmlFor="accountHolderName"
              >
                Name of the Account Holder
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="accountHolderName"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block font-medium mb-2"
                htmlFor="accountHolderName"
              >
                Account Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="accountHolderName"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block font-medium mb-2"
                htmlFor="accountHolderName"
              >
                Bank Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bankName"
                type="text"
                placeholder="DBS Bank"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block font-medium mb-2"
                htmlFor="accountHolderName"
              >
                Bank Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bankAddress"
                type="text"
                placeholder="12 Marina Boulevard, Singapore 018982"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block font-medium mb-2"
                htmlFor="accountHolderName"
              >
                SWIFT Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="swiftCode"
                type="text"
                placeholder="ABCD1234EFG"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block font-medium mb-2" htmlFor="accountNumber">
                IFSC Code [If not then ignore]
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ifscCode"
                type="text"
                placeholder="ABCD1234567"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block font-medium mb-2" htmlFor="accountNumber">
                Mobile Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobileNumber"
                type="text"
                placeholder={9876543210}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block font-medium mb-2" htmlFor="accountNumber">
                Your Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                rows={6}
                placeholder="123 Main St, Anytown, Singapore 12345"
                defaultValue={""}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium mb-2" htmlFor="paypalDetails">
                PayPal Details
              </label>
              <input
                className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="paypalDetails"
                type="text"
                placeholder="Enter the PayPal Details"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium mb-2" htmlFor="paymentLink">
                Payment Link
              </label>
              <input
                className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="paymentLink"
                type="text"
                placeholder="Enter the Payment Link"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payout;
