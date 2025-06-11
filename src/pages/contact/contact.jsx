import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
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
          CONTACT COMPONENT
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

        <form
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          <div
            style={{
              marginBottom: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type="text"
              placeholder="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1.2rem",
                border: "none",
                borderBottom: "2px solid #ddd",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
            {formData.userName && (
              <label
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  color: "#1ABC9C",
                  fontSize: "1rem",
                }}
              >
                userName :
              </label>
            )}
          </div>

          <div
            style={{
              marginBottom: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type="number"
              placeholder="userAge"
              name="userAge"
              value={formData.userAge}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1.2rem",
                border: "none",
                borderBottom: "2px solid #ddd",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
            {formData.userAge && (
              <label
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  color: "#1ABC9C",
                  fontSize: "1rem",
                }}
              >
                userAge :
              </label>
            )}
          </div>

          <div
            style={{
              marginBottom: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type="email"
              placeholder="userEmail"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1.2rem",
                border: "none",
                borderBottom: "2px solid #ddd",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
            {formData.userEmail && (
              <label
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  color: "#1ABC9C",
                  fontSize: "1rem",
                }}
              >
                userEmail :
              </label>
            )}
          </div>

          <div
            style={{
              marginBottom: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type="password"
              placeholder="userPassword"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1.2rem",
                border: "none",
                borderBottom: "2px solid #ddd",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
            {formData.userPassword && (
              <label
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  color: "#1ABC9C",
                  fontSize: "1rem",
                }}
              >
                userPassword :
              </label>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#1ABC9C",
              color: "white",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.2rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
              marginTop: "1rem",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
