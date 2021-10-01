import { useState } from "react";
import { BottomLineInput } from "./Input";
import { IoIosSend } from "react-icons/io";

export default function Subscribe() {
  const [email, setEmail] = useState("");

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
            <BottomLineInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              IconComponent={IoIosSend}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
