// components/Dashboard.js

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);

      try {
        const response = await fetch("/api/contact");
        const data = await response.json();

        if (response.ok) {
          setContacts(data.contacts);
        } else {
          console.error("Failed to fetch contacts");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-4 flex-shrink-0 w-64">
        <div className="flex items-center justify-start mb-8">
          {/* Profile Image */}
          <img
            className="w-16 h-16 rounded-full object-cover cursor-pointer"
            src="/images/logo.png" // Replace wiith the URL of the user's profile image
            alt="Profile"
          />
        </div>
        {/* Sidebar Navigation */}
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-gray-300"
              >
                <span className="mr-2">&#9993;</span> Emails
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-gray-300"
              >
                <span className="mr-2">&#128196;</span> Projects
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-gray-300"
              >
                <span className="mr-2">&#9876;</span> Skills
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-gray-300"
              >
                <span className="mr-2">&#9201;</span> Experience
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-gray-300"
              >
                <span className="mr-2">&#128221;</span> Notes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-white hover:text-gray-300"
              >
                <span className="mr-2">&#128682;</span> Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Email Outlet */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Emails</h2>
          {/* Email Table */}
          <div className="overflow-x-auto">
          {loading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : (
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
              {/* Table headers */}
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Subject</th>
                  <th className="py-2 px-4 border-b">Message</th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>
              {/* Table data */}
                <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td className="py-2 px-4 border-b">{contact.name}</td>
                    <td className="py-2 px-4 border-b">{contact.email}</td>
                    <td className="py-2 px-4 border-b">{contact.subject}</td>
                    <td className="py-2 px-4 border-b">{contact.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
             )}
          </div>
        </div>

        {/* Add more content or components as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
