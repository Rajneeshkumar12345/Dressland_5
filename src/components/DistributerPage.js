import React from "react";
import './DistributerPage.css'
function DistributerPage() {
  return (
    <>
      <main className="">
        <div className="menu">
          <div className="avatar">
            <img
              className="thumb"
              src="https://avatars.githubusercontent.com/u/30212452"
              width="60"
            />
            <span className="name">Mr. Kumar</span>
          </div>
          <nav className="primary">
            <a href="#" className="menu-item active">
              <span className="iconoir-report-columns"></span>
              <span className="desc">SK DRESHLAND</span>
            </a>
            <a href="#" className="menu-item">
              <span className="iconoir-google-docs"></span>
              <span className="desc">Reports</span>
            </a>
            <a href="#" className="menu-item">
              <span className="iconoir-table"></span>
              <span className="desc">Stats</span>
            </a>
            <a href="#" className="menu-item">
              <span className="iconoir-bag"></span>
              <span className="desc">Cart</span>
            </a>
            <a href="#" className="menu-item">
              <span className="iconoir-user"></span>
              <span className="desc">Clients</span>
            </a>
            <a href="#" className="menu-item">
              <span className="iconoir-leaderboard"></span>
              <span className="desc">Analytics</span>
            </a>
            <a href="#" className="menu-item">
              <span className="iconoir-settings"></span>
              <span className="desc">Settings</span>
            </a>
          </nav>
          <span className="expander iconoir-arrow-right"></span>
        </div>
        <div className="topbar">
          <h1 className="current">Dashboard</h1>
          <span className="search">
            <label>
              <span className="iconoir-search"></span>
            </label>
            <input className="bar" type="text" placeholder="Search..." />
          </span>
          <nav>
            <a href="#" className="menu-item">
              Orders
            </a>
            <a href="#" className="menu-item">
              Clients
            </a>
            <a href="#" className="menu-item">
              Sections
            </a>
            <a href="#" className="menu-item">
              Products
            </a>
          </nav>
        </div>
        <div className="dashboard">
          <div className="cardcolumn">
            <div className="card">
              <header>
                <a className="title" href="#"></a>
                <span className="iconoir-more-vert"></span>
              </header>
              <div className="content"></div>
              <div className="meta">
                <span className="iconoir-pin"></span>
                <span className="iconoir-eye-off"></span>
                <span className="iconoir-share-ios"></span>
              </div>
            </div>
            <div className="card">
              <header>
                <a className="title" href="#"></a>
                <span className="iconoir-more-vert"></span>
              </header>
              <div className="content"></div>
              <div className="meta">
                <span className="iconoir-pin"></span>
                <span className="iconoir-eye-off"></span>
                <span className="iconoir-share-ios"></span>
              </div>
            </div>
          </div>
          <div className="cardcolumn">
            <div className="card">
              <header>
                <a className="title" href="#"></a>
                <span className="iconoir-more-vert"></span>
              </header>
              <div className="content"></div>
              <div className="meta">
                <span className="iconoir-pin"></span>
                <span className="iconoir-eye-off"></span>
                <span className="iconoir-share-ios"></span>
              </div>
            </div>
            <div className="card">
              <header>
                <a className="title" href="#"></a>
                <span className="iconoir-more-vert"></span>
              </header>
              <div className="content"></div>
              <div className="meta">
                <span className="iconoir-pin"></span>
                <span className="iconoir-eye-off"></span>
                <span className="iconoir-share-ios"></span>
              </div>
            </div>
          </div>
          <div className="cardcolumn">
            <div className="card">
              <header>
                <a className="title" href="#"></a>
                <span className="iconoir-more-vert"></span>
              </header>
              <div className="content"></div>
              <div className="meta">
                <span className="iconoir-pin"></span>
                <span className="iconoir-eye-off"></span>
                <span className="iconoir-share-ios"></span>
              </div>
            </div>
            <div className="card">
              <header>
                <a className="title" href="#"></a>
                <span className="iconoir-more-vert"></span>
              </header>
              <div className="content"></div>
              <div className="meta">
                <span className="iconoir-pin"></span>
                <span className="iconoir-eye-off"></span>
                <span className="iconoir-share-ios"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="card weather">
            <img
              className="condition"
              src="https://res.cloudinary.com/dtqkhr8o9/image/upload/v1665659679/forecast_vb4vl0.png"
            />
            <div className="content"></div>
            <div className="meta">
              <span className="location">
                <span className="iconoir-pin-alt"></span>
                Athens, GR
              </span>
              <div className="datetime">
                <span className="iconoir-calendar"></span>
                <span className="date">21 July, 2022</span>
                <span className="time">5:01</span>
              </div>
            </div>
          </div>
          <div className="card">
            <header>Schedule</header>
            <div className="content">
              <ul>
                <li>(15:30) Deliver the project to client</li>
                <li>(18:00) Meet Mike @ White Goose</li>
                <li>(19:30) Dinner with Mary @ Kit-Bar</li>
                <li>(22:00) Watch the Falcons match</li>
                <li>(23:30) Headspace Meditate</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="video">
        <video
          src="https://res.cloudinary.com/dtqkhr8o9/video/upload/v1665644022/pexels_uezvrq.mp4"
          muted
          playsinline
          autoplay
          loop
        ></video>
      </div> */}
    </>
  );
}

export default DistributerPage;
