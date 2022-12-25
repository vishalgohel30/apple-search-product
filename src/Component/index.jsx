import React from 'react'

export default function Header() {
  return (<header className="py-3 mb-3 border-bottom">
    <div
      className="container-fluid d-grid gap-3 align-items-center"
      style={{ gridTemplateColumns: "1fr 2fr" }}
    >
      <div>Apple Search</div>
      <div className="d-flex align-items-center">
        <form className="w-100 me-3" role="search">
          <input
            type="search"
            disabled={true}
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div className="flex-shrink-0 dropdown">
          <a
            href="#"
            className="d-block link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle"
            />
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}
