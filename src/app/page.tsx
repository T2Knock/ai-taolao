import Link from "next/link";

export default function HomePage() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <h1 className="btn btn-ghost text-xl">aitaolao</h1>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.pinimg.com/474x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
}
