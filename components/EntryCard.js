// One festival card. Renders the active language (lang) for a
// single entry from src/data/entries.js.
//
// The card is image-first: the entry's photo (from /public) sits
// on top, with category, title, season, description and tags in a
// body below. Title and description switch between English and
// Khmer based on `lang`. category / seasonOrMonth / tags are the
// archive's data values (not UI chrome) so they render as stored.
//
// Public image filenames contain spaces + parentheses; encode the
// spaces so the browser requests the correct asset path.

const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1C222C",
    border: "1px solid #2E3644",
    borderRadius: 14,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    display: "block",
    backgroundColor: "#14181F",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "20px 22px 22px",
  },
  category: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#2EE6A8",
    margin: 0,
  },
  title: {
    fontSize: 21,
    fontWeight: 700,
    color: "#E8EDF2",
    margin: "6px 0 2px",
    lineHeight: 1.3,
  },
  season: {
    fontSize: 13,
    color: "#7FD8B4",
    margin: "0 0 12px",
  },
  description: {
    fontSize: 15,
    color: "#B9C1CE",
    lineHeight: 1.6,
    margin: 0,
    flex: 1,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    margin: "16px 0 0",
  },
  tag: {
    fontSize: 12,
    color: "#97A1B3",
    backgroundColor: "#14181F",
    border: "1px solid #2E3644",
    borderRadius: 999,
    padding: "3px 11px",
  },
};

const EntryCard = ({ entry, lang }) => {
  const title = lang === "km" ? entry.titleKhmer : entry.titleEnglish;
  const description =
    lang === "km" ? entry.descriptionKhmer : entry.descriptionEnglish;
  const src = entry.imagePath.replace(/ /g, "%20");

  return (
    <div className="card-cell" style={styles.card}>
      <img src={src} alt={title} style={styles.image} loading="lazy" />
      <div style={styles.body}>
        <p style={styles.category}>{entry.category}</p>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.season}>{entry.seasonOrMonth}</p>
        <p style={styles.description}>{description}</p>
        <div style={styles.tags}>
          {entry.tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
