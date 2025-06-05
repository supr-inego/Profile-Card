import React from "react";

const ProfileCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.topSection}>
        <div style={styles.avatar}></div>
      </div>
      <div style={styles.bottomSection}>
        <h2>Inego Dayak</h2>
        <p style={styles.subtitle}>Front-End Developer</p>
        <div style={styles.icons}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div style={styles.buttons}>
          <button style={styles.button}>Subscribe</button>
          <button style={styles.button}>Message</button>
        </div>
        <div style={styles.stats}>
          <span>❤️ 60k</span>
          <span>💬 20k</span>
          <span>🔁 12k</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "90%",
    maxWidth: 350,
    margin: "30px auto",
    borderRadius: 20,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif"
  },
  topSection: {
    background: "#2eaef1",
    padding: 40,
    textAlign: "center"
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "#ccc",
    margin: "0 auto"
  },
  bottomSection: {
    padding: 20,
    textAlign: "center"
  },
  subtitle: {
    color: "#777",
    margin: "5px 0 15px"
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: 15,
    fontSize: 20,
    marginBottom: 15
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginBottom: 15
  },
  button: {
    padding: "8px 15px",
    border: "none",
    borderRadius: 8,
    background: "#007bff",
    color: "#fff",
    cursor: "pointer"
  },
  stats: {
    display: "flex",
    justifyContent: "space-around",
    color: "#888"
  }
};

export default ProfileCard;
