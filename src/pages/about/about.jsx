import React from "react";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#1ABC9C",
        color: "white",
        textAlign: "center",
        minHeight: "calc(100vh - 80px)",
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
          }}
        >
          ABOUT COMPONENT
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              height: "4px",
              width: "100px",
              backgroundColor: "white",
            }}
          ></div>
          <div
            style={{
              fontSize: "2rem",
              lineHeight: "1",
            }}
          >
            ★
          </div>
          <div
            style={{
              height: "4px",
              width: "100px",
              backgroundColor: "white",
            }}
          ></div>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            padding: "0 2rem",
            textAlign: "left",
          }}
        >
          <div>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
