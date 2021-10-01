import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);
  function sendClass() {
    if (email.trim() && focus) return "opacity-100";
    return "opacity-25";
  }
  return (
    <div className="self-stretch bg-gray-1 flex flex-col py-32 md:px-6 md:px-10 xl:px-32">
      <div className="lg:px-16 px-6 text-center items-center grid md:grid-cols-2">
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl self-center mb-6 md:mb-0">
          Subscribe to
          <br />
          my blog
        </h1>
        <div className="self-center flex flex-col md:text-left mx-4">
          <p className="mb-6 font-serif md:ml-2 md:mb-2">
            Will let you know via e-mail about my new posts and other updates,
            you can unsubscribe anytime.
          </p>
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <div className="flex items-center border-b border-gray-400 py-2">
              <input
                className="font-serif bg-gray-1 border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
              <button
                className={`flex-shrink-0 text-teal-500 text-sm pt-1 pr-2 text-2xl transition-all ${sendClass()}`}
                type="button"
              >
                <IoIosSend className="text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
