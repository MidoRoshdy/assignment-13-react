import React, { useState } from "react";
import Img1 from "../../assets/poert1.png";
import Img2 from "../../assets/port2.png";
import Img3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, image: Img1, title: "LOG CABIN" },
    { id: 2, image: Img2, title: "TASTY CAKE" },
    { id: 3, image: Img3, title: "CIRCUS TENT" },
    { id: 4, image: Img1, title: "LOG CABIN" },
    { id: 5, image: Img2, title: "TASTY CAKE" },
    { id: 6, image: Img3, title: "CIRCUS TENT" },
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#FFF",
          minHeight: "calc(100vh - 80px)",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div style={{ width: "100%", padding: "2rem" }}>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              color: "#2C3E50",
            }}
          >
            PORTFOLIO COMPONENT
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                height: "4px",
                width: "100px",
                backgroundColor: "#2C3E50",
              }}
            ></div>
            <div
              style={{
                fontSize: "2rem",
                lineHeight: "1",
                color: "#2C3E50",
              }}
            >
              ★
            </div>
            <div
              style={{
                height: "4px",
                width: "100px",
                backgroundColor: "#2C3E50",
              }}
            ></div>
          </div>

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              padding: "0 2rem",
            }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(26, 188, 156, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    ":hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90vh",
            }}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
            <h2
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "1rem",
                fontSize: "2rem",
              }}
            >
              {selectedImage.title}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
