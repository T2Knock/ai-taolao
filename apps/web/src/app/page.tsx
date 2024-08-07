import Conversation from "./components/chatbubble";
import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div className="relative">
      <header>
        <Navbar />
      </header>
      <Conversation />
      <div className="h-100 w-100% bg-[#f2f0f7]">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
          <button className="btn btn-sm m-2">
            send{" "}
            <svg
              // xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
