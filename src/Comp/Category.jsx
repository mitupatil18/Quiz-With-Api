import styles from "./Category.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Quiz from "./Quiz";
import Navbar from "./Navbar";

const Category = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isContentVisible, setContentVisibility] = useState(true);
  const handleFetch = (category) => {
    setLoading(true);
    setContentVisibility(false);
    fetch(
      `https://quizapi.io/api/v1/questions?apiKey=aKCie6bg8aJW3YLnvJC0I2GbjoL1TGNBlvxVexxH&category=${category}&difficulty=Easy&limit=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        // Handle error, e.g., set an error state or display a message to the user
      });
  };
  const categ = [
    {
      Displaytit: "Linux",
      title: "linux",
      sorc:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:
        "Unleash the power of open-source magic! Your gateway to a robust, flexible operating system revolutionizing devices and servers. 🐧",
    },
    {
      Displaytit: "DevOps",
      title: "devops",
      sorc:
        "https://t3.ftcdn.net/jpg/04/82/07/90/360_F_482079087_jTfhGFhJgMeWt40zI9qhgjTQX7zXtLd0.jpg",
      desc:
        "Fuel innovation with DevOps synergy! Join the collaborative evolution, where automation and continuous integration redefine software delivery. 🚀💻",
    },
    {
      Displaytit: "SQL",
      title: "sql",
      sorc:
        "https://c4.wallpaperflare.com/wallpaper/425/804/995/computer-wallpaper-preview.jpg",
      desc:
        "Dive into the digital web! Explore the interconnected world of systems, devices, and protocols enabling seamless communication and data exchange. 🌐",
    },
    {
      Displaytit: "Programming",
      title: "code",
      sorc:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:
        "Craft the future with code! Experience the art and science of instructing computers, driving innovation and software development. 💻🚀",
    },
    {
      title: "cms",
      Displaytit: "Cloud",
      sorc:
        "https://t3.ftcdn.net/jpg/05/70/36/18/360_F_570361890_CVUB9tkrCfTfWxRvLESWxPOwApb9HOlr.jpg",
      desc:
        "Embrace the cloud revolution! Unleash scalable, on-demand computing, transforming data storage and processing. ☁️🚀",
    },
    {
      Displaytit: "Docker",
      title: "docker",
      sorc:
        "https://c4.wallpaperflare.com/wallpaper/1010/207/702/docker-containers-minimalism-typography-wallpaper-preview.jpg",
      desc:
        "Redefine deployment simplicity! Enter the world of containerization, where applications and dependencies unite for seamless scaling. 🐳🚀",
    },
  ];

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {isContentVisible &&
            categ.map((category, index) => (
              <div className={`col-lg-4 col-md-6 mb-4`} key={index}>
                <div className={`card ${styles.crdsize}`}>
                  <img
                    src={category.sorc}
                    className={`card-img-top img-fluid ${styles.imgsz}`}
                    alt={category.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{category.Displaytit}</h5>
                    <p className="card-text">{category.desc}</p>
                    <button
                      onClick={() => handleFetch(category.title)}
                      className="btn btn-primary"
                    >
                      Take a quiz
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {records.length > 0 && <Quiz data={records} />}
    </div>
  );
};

export default Category;
