import pb from "lib/pocketbase";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./index.css";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  pb.autoCancellation(false);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const fetchedMessages = await pb.collection("messages").getFullList({
          sort: "-created",
        });
        setMessages(fetchedMessages || []);
      } catch (error) {
        console.log(error.originalError);
      }
    }

    fetchMessages();
  }, []);

  async function login(data) {
    setIsLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  }

  function logout() {
    pb.authStore.clear();
    setIsLoggedIn(false);
  }

  async function sendMessage() {
    if (!message) return;
    setIsLoading(true);
    try {
      const messageData = { field1: message };
      const response = await pb.collection("messages").create(messageData);
      setMessage("");
      setIsLoading(false);
      setMessages((prevState) => [
        ...prevState,
        { id: response.id, ...messageData.field1 },
      ]);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  }

  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <header className="flex items-center justify-between w-full max-w-6xl px-6 py-4 bg-white shadow-md">
          <h1 className="text-3xl font-bold">
            Logged In: {pb.authStore.model.email}
          </h1>
          <button
            onClick={logout}
            className="inline-flex items-center justify-center h-10 px-6 ml-4 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Logout
          </button>
        </header>
        <main className="w-full max-w-6xl px-6 py-8">
          <h1 className="text-4xl font-bold mb-6">Global Chat</h1>
          <form onSubmit={sendMessage} className="mb-8">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="ml-4 px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
          <div className="w-full bg-white rounded-md shadow-md">
            {messages.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center p-4 border-b border-gray-200"
              >
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-medium mr-2">{doc.email}</h3>
                    <span className="text-gray-500 text-sm">
                      {new Date(doc.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-lg">{doc.field1}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(login)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
