// // import React, { useState } from "react";
// // import axios from "axios";  // Import Axios
// // import { useNavigate } from "react-router-dom";

// // const FormPage = () => {
// //   const [companyName, setCompanyName] = useState("");
// //   const [companyUrl, setCompanyUrl] = useState("");
// //   const [inquiry, setInquiry] = useState("");
// //   const [valuation, setValuation] = useState("");
// //   const navigate = useNavigate();

// //   // // const handleSubmit = async (e) => {
// //   // //   e.preventDefault();
    
// //   // //   // Prepare the form data to send to the Flask backend
// //   // //   const formData = {
// //   // //     companyName,
// //   // //     url: companyUrl,
// //   // //     inquiry,
// //   // //     valuation,
// //   // //   };

// //   //   try {
// //   //     // Send POST request to Flask backend (update the URL if needed)
// //   //     const response = await axios.post("http://localhost:5000/analyze", formData);

// //   //     // Handle response and navigate to results page with response data
// //   //     const { summary, responses, scraped_data } = response.data;
// //   //     console.log(response)
// //   //     navigate("/results", {
// //   //       state: {
// //   //         showTemplate: true,
// //   //         companyName,
// //   //         valuation,
// //   //         summary,
// //   //         responses,
// //   //         scrapedData: scraped_data,
// //   //       },
// //   //     });
// //   //   } catch (error) {
// //   //     console.error("Error submitting the form", error);
// //   //     // Handle error appropriately, e.g., show a message to the user
// //   //   }
// //   // };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     // Prepare the form data to send to the Flask backend
// //     const formData = {
// //       companyName,
// //       url: companyUrl,
// //       inquiry,
// //       valuation,
// //     };
  
// //     try {
// //       // Send POST request to Flask backend (update the URL if needed)
// //       const response = await axios.post("http://localhost:5000/analyze", formData);
  
// //       // Destructure the response data
// //       const { Blogs, Influencers, Marketingtips, Operationalsupport, Platformads } = response.data;
  
// //       // Format the data to match the desired structure
// //       const formattedData = {
// //         Influencers: Influencers.map(influencer => ({
// //           name: influencer.name,
// //           location: influencer.location,
// //           social: influencer.social
// //         })),
// //         Blogs: Blogs.map(blog => ({
// //           name: blog.name,
// //           url: blog.url,
// //           contact: blog.contact
// //         })),
// //         Platformads: Platformads.map(ad => ({
// //           name: ad.name,
// //           url: ad.url,
// //           description: ad.description
// //         })),
// //         Operationalsupport: Operationalsupport.map(support => ({
// //           name: support.name,
// //           url: support.url,
// //           description: support.description
// //         })),
// //         Marketingtips: Marketingtips.map(tip => ({
// //           tip: tip.tip,
// //           description: tip.description
// //         }))
// //       };
  
// //       // Log the formatted data to the console
// //       console.log(formattedData);
  
// //       // Navigate to the results page (if needed)
// //       const { summary, responses, scraped_data } = response.data;
// //       navigate("/results", {
// //         state: {
// //           showTemplate: true,
// //           companyName,
// //           valuation,
// //           summary,
// //           responses,
// //           scrapedData: scraped_data,
// //         },
// //       });
// //     } catch (error) {
// //       console.error("Error submitting the form", error);
// //       // Handle error appropriately, e.g., show a message to the user
// //     }
// //   };
  

// //   return (
// //     <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white flex items-center justify-center">
// //       <div className="max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-md">
// //         <h2 className="text-3xl font-bold mb-8 text-center">
// //           Tell Us About Your Marketing Needs
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           {/* Company Name */}
// //           <div>
// //             <label
// //               htmlFor="companyName"
// //               className="block text-sm font-medium text-gray-300"
// //             >
// //               Company Name
// //             </label>
// //             <input
// //               type="text"
// //               id="companyName"
// //               value={companyName}
// //               onChange={(e) => setCompanyName(e.target.value)}
// //               className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
// //               placeholder="Enter your company name"
// //               required
// //             />
// //           </div>

// //           {/* Company URL */}
// //           <div>
// //             <label
// //               htmlFor="companyUrl"
// //               className="block text-sm font-medium text-gray-300"
// //             >
// //               Company Website URL
// //             </label>
// //             <input
// //               type="string"
// //               id="companyUrl"
// //               value={companyUrl}
// //               onChange={(e) => setCompanyUrl(e.target.value)}
// //               className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
// //               placeholder="Enter your company website URL"
// //               required
// //             />
// //           </div>

// //           {/* Business Valuation */}
// //           <div>
// //             <label
// //               htmlFor="valuation"
// //               className="block text-sm font-medium text-gray-300"
// //             >
// //               Business Valuation (in USD)
// //             </label>
// //             <input
// //               type="number"
// //               id="valuation"
// //               value={valuation}
// //               onChange={(e) => setValuation(e.target.value)}
// //               className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
// //               placeholder="Enter the estimated business valuation"
// //               required
// //             />
// //           </div>

// //           {/* Inquiry */}
// //           <div>
// //             <label
// //               htmlFor="inquiry"
// //               className="block text-sm font-medium text-gray-300"
// //             >
// //               Specific Marketing Goals (Optional)
// //             </label>
// //             <textarea
// //               id="inquiry"
// //               value={inquiry}
// //               onChange={(e) => setInquiry(e.target.value)}
// //               className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
// //               placeholder="Let us know your marketing goals or any specific details..."
// //               rows="4"
// //             />
// //           </div>

// //           {/* Submit Button */}
// //           <div className="text-center">
// //             <button
// //               type="submit"
// //               className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg w-full"
// //             >
// //               Generate Leads
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FormPage;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormPage = () => {
//   const [companyName, setCompanyName] = useState("");
//   const [companyUrl, setCompanyUrl] = useState("");
//   const [inquiry, setInquiry] = useState("");
//   const [valuation, setValuation] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Prepare the form data to send to the Flask backend
//     const formData = {
//       companyName,
//       url: companyUrl,
//       inquiry,
//       valuation,
//     };

//     try {
//       // Send POST request to Flask backend
//       const response = await axios.post("http://localhost:5000/analyze", formData);

//       // Destructure the response data
//       const { Blogs, Influencers, Marketingtips, Operationalsupport, Platformads } = response.data;

//       // Format the data
//       const formattedData = {
//         Influencers: Influencers.map(influencer => ({
//           name: influencer.name,
//           location: influencer.location,
//           social: influencer.social
//         })),
//         Blogs: Blogs.map(blog => ({
//           name: blog.name,
//           url: blog.url,
//           contact: blog.contact
//         })),
//         Platformads: Platformads.map(ad => ({
//           name: ad.name,
//           url: ad.url,
//           description: ad.description
//         })),
//         Operationalsupport: Operationalsupport.map(support => ({
//           name: support.name,
//           url: support.url,
//           description: support.description
//         })),
//         Marketingtips: Marketingtips.map(tip => ({
//           tip: tip.tip,
//           description: tip.description
//         }))
//       };

//       // Navigate to the results page and pass formatted data as state
//       navigate("/results", {
//         state: {
//           formattedData
//         }
//       });
//     } catch (error) {
//       console.error("Error submitting the form", error);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white flex items-center justify-center">
//       <div className="max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Tell Us About Your Marketing Needs
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Form fields */}
//           <div>
//             <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
//               Company Name
//             </label>
//             <input
//               type="text"
//               id="companyName"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
//               placeholder="Enter your company name"
//               required
//             />
//           </div>

// {/* Company URL */}

// <div>

// <label

//   htmlFor="companyUrl"

//   className="block text-sm font-medium text-gray-300"

// >

//   Company Website URL

// </label>

// <input

//   type="string"

//   id="companyUrl"

//   value={companyUrl}

//   onChange={(e) => setCompanyUrl(e.target.value)}

//   className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"

//   placeholder="Enter your company website URL"

//   required

// />

// </div>



// {/* Business Valuation */}

// <div>

// <label

//   htmlFor="valuation"

//   className="block text-sm font-medium text-gray-300"

// >

//   Business Valuation (in USD)

// </label>

// <input

//   type="number"

//   id="valuation"

//   value={valuation}

//   onChange={(e) => setValuation(e.target.value)}

//   className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"

//   placeholder="Enter the estimated business valuation"

//   required

// />

// </div>



// {/* Inquiry */}

// <div>

// <label

//   htmlFor="inquiry"

//   className="block text-sm font-medium text-gray-300"

// >

//   Specific Marketing Goals (Optional)

// </label>

// <textarea

//   id="inquiry"

//   value={inquiry}

//   onChange={(e) => setInquiry(e.target.value)}

//   className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"

//   placeholder="Let us know your marketing goals or any specific details..."

//   rows="4"

// />

// </div>
//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg w-full"
//             >
//               Generate Leads
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormPage;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [valuation, setValuation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the form data to send to the Flask backend
    const formData = {
      companyName,
      url: companyUrl,
      inquiry,
      valuation,
    };

    try {
      // Send POST request to Flask backend
      const response = await axios.post("http://localhost:5000/analyze", formData);
      console.log(response)

      // Destructure the response data
      const { responses, blog_content } = response.data;
      const { Blogs, Influencers, Marketingtips, Operationalsupport, Platformads } = responses;
      console.log("Blog Content: ", blog_content);  // This will print the blog content to the console


      //const { Blogs, Influencers, Marketingtips, Operationalsupport, Platformads } = response.data;

      // Format the data
      const formattedData = {
        Influencers: Influencers.map(influencer => ({
          name: influencer.name,
          location: influencer.location,
          social: influencer.social
        })),
        Blogs: Blogs.map(blog => ({
          name: blog.name,
          url: blog.url,
          contact: blog.contact
        })),
        Platformads: Platformads.map(ad => ({
          name: ad.name,
          url: ad.url,
          description: ad.description
        })),
        Operationalsupport: Operationalsupport.map(support => ({
          name: support.name,
          url: support.url,
          description: support.description
        })),
        Marketingtips: Marketingtips.map(tip => ({
          tip: tip.tip,
          description: tip.description
        }))
      };

      // Navigate to the results page and pass formatted data as well as company data as state
      navigate("/results", {
        state: {
          formattedData,
          companyData: {
            name: companyName,
            url: companyUrl,
            valuation: `${valuation} USD`
          }
        }
      });
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white flex items-center justify-center">
      <div className="max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Tell Us About Your Marketing Needs
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
              placeholder="Enter your company name"
              required
            />
          </div>

          {/* Company URL */}
          <div>
            <label htmlFor="companyUrl" className="block text-sm font-medium text-gray-300">
              Company Website URL
            </label>
            <input
              type="text"
              id="companyUrl"
              value={companyUrl}
              onChange={(e) => setCompanyUrl(e.target.value)}
              className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
              placeholder="Enter your company website URL"
              required
            />
          </div>

          {/* Business Valuation */}
          <div>
            <label htmlFor="valuation" className="block text-sm font-medium text-gray-300">
              Business Valuation (in USD)
            </label>
            <input
              type="number"
              id="valuation"
              value={valuation}
              onChange={(e) => setValuation(e.target.value)}
              className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
              placeholder="Enter the estimated business valuation"
              required
            />
          </div>

          {/* Inquiry */}
          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-gray-300">
              Specific Marketing Goals (Optional)
            </label>
            <textarea
              id="inquiry"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
              className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300"
              placeholder="Let us know your marketing goals or any specific details..."
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg w-full"
            >
              Generate Leads
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
