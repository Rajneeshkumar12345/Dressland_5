import React from "react";
import './DistributerPage.css'
function DistributerPage() {
  return (
    <>
      <main class="">
        <div class="menu">
          <div class="avatar">
            <img
              class="thumb"
              src="https://avatars.githubusercontent.com/u/30212452"
              width="60"
            />
            <span class="name">Mr. Kumar</span>
          </div>
          <nav class="primary">
            <a href="#" class="menu-item active">
              <span class="iconoir-report-columns"></span>
              <span class="desc">SK DRESHLAND</span>
            </a>
            <a href="#" class="menu-item">
              <span class="iconoir-google-docs"></span>
              <span class="desc">Reports</span>
            </a>
            <a href="#" class="menu-item">
              <span class="iconoir-table"></span>
              <span class="desc">Stats</span>
            </a>
            <a href="#" class="menu-item">
              <span class="iconoir-bag"></span>
              <span class="desc">Cart</span>
            </a>
            <a href="#" class="menu-item">
              <span class="iconoir-user"></span>
              <span class="desc">Clients</span>
            </a>
            <a href="#" class="menu-item">
              <span class="iconoir-leaderboard"></span>
              <span class="desc">Analytics</span>
            </a>
            <a href="#" class="menu-item">
              <span class="iconoir-settings"></span>
              <span class="desc">Settings</span>
            </a>
          </nav>
          <span class="expander iconoir-arrow-right"></span>
        </div>
        <div class="topbar">
          <h1 class="current">Dashboard</h1>
          <span class="search">
            <label>
              <span class="iconoir-search"></span>
            </label>
            <input class="bar" type="text" placeholder="Search..." />
          </span>
          <nav>
            <a href="#" class="menu-item">
              Orders
            </a>
            <a href="#" class="menu-item">
              Clients
            </a>
            <a href="#" class="menu-item">
              Sections
            </a>
            <a href="#" class="menu-item">
              Products
            </a>
          </nav>
        </div>
        <div class="dashboard">
          <div class="cardcolumn">
            <div class="card">
              <header>
                <a class="title" href="#"></a>
                <span class="iconoir-more-vert"></span>
              </header>
              <div class="content"></div>
              <div class="meta">
                <span class="iconoir-pin"></span>
                <span class="iconoir-eye-off"></span>
                <span class="iconoir-share-ios"></span>
              </div>
            </div>
            <div class="card">
              <header>
                <a class="title" href="#"></a>
                <span class="iconoir-more-vert"></span>
              </header>
              <div class="content"></div>
              <div class="meta">
                <span class="iconoir-pin"></span>
                <span class="iconoir-eye-off"></span>
                <span class="iconoir-share-ios"></span>
              </div>
            </div>
          </div>
          <div class="cardcolumn">
            <div class="card">
              <header>
                <a class="title" href="#"></a>
                <span class="iconoir-more-vert"></span>
              </header>
              <div class="content"></div>
              <div class="meta">
                <span class="iconoir-pin"></span>
                <span class="iconoir-eye-off"></span>
                <span class="iconoir-share-ios"></span>
              </div>
            </div>
            <div class="card">
              <header>
                <a class="title" href="#"></a>
                <span class="iconoir-more-vert"></span>
              </header>
              <div class="content"></div>
              <div class="meta">
                <span class="iconoir-pin"></span>
                <span class="iconoir-eye-off"></span>
                <span class="iconoir-share-ios"></span>
              </div>
            </div>
          </div>
          <div class="cardcolumn">
            <div class="card">
              <header>
                <a class="title" href="#"></a>
                <span class="iconoir-more-vert"></span>
              </header>
              <div class="content"></div>
              <div class="meta">
                <span class="iconoir-pin"></span>
                <span class="iconoir-eye-off"></span>
                <span class="iconoir-share-ios"></span>
              </div>
            </div>
            <div class="card">
              <header>
                <a class="title" href="#"></a>
                <span class="iconoir-more-vert"></span>
              </header>
              <div class="content"></div>
              <div class="meta">
                <span class="iconoir-pin"></span>
                <span class="iconoir-eye-off"></span>
                <span class="iconoir-share-ios"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="side">
          <div class="card weather">
            <img
              class="condition"
              src="https://res.cloudinary.com/dtqkhr8o9/image/upload/v1665659679/forecast_vb4vl0.png"
            />
            <div class="content"></div>
            <div class="meta">
              <span class="location">
                <span class="iconoir-pin-alt"></span>
                Athens, GR
              </span>
              <div class="datetime">
                <span class="iconoir-calendar"></span>
                <span class="date">21 July, 2022</span>
                <span class="time">5:01</span>
              </div>
            </div>
          </div>
          <div class="card">
            <header>Schedule</header>
            <div class="content">
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
      {/* <div class="video">
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
