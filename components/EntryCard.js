import React from 'react';

const styles = {
  card: {
    marginTop: 48,
    padding: 24,
    backgroundColor: "#1C222C",
    border: "1px solid #2E3644",
    borderRadius: 10,
  },
  cardLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    color: "#97A1B3",
    margin: 0,
  },
  cardValue: {
    fontSize: 16,
    margin: "6px 0 0",
  },
  count: {
    fontFamily: "'Courier New', monospace",
    fontSize: 14,
    color: "#2EE6A8",
    marginTop: 48,
  },
};

const EntryCard = ({ title, description, contributor, place, image }) => {
  return (
    <div style={styles.card}>
      {image && <img src={image} alt={title} style={{ width: "100%", height: "auto", marginBottom: "16px" }} />}
      <p style={styles.cardLabel}>Title</p>
      <p style={styles.cardValue}>{title}</p>
      <p style={styles.cardLabel}>Description</p>
      <p style={styles.cardValue}>{description}</p>
      <p style={styles.cardLabel}>Contributor</p>
      <p style={styles.cardValue}>{contributor}</p>
      <p style={styles.cardLabel}>Place</p>
      <p style={styles.cardValue}>{place}</p>
    </div>
  );
};

export default EntryCard;
