// components/Login.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useState} from 'react';

const Login = () => {
  // Add your login logic here

  const router = useRouter()

  const [formData, setFormData] = useState({
    username: "dpgaire",
    password: "ddddd",
  });

  const [errors,setErrors] = useState()

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          username: "",
          password: "",
        });
        router.push('/dashboard')
      } else {
        console.log("Something went wrong");
        // setErrors("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
      {errors && (
            <div className="text-2xl font-bold mb-6 text-red-600">
             {errors}
            </div>
          )}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name={'username'}
              value={formData.username}
              type="text"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              value={formData.password}
              type="password"
              placeholder="********"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
