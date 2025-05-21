import perezosoImage from "../assets/perezoso.jpg";

export default function UnderConstruction() {
  return (
    <div>
      <p className="">Kommer strax!</p>
      <img
        src={perezosoImage}
        alt="Sengångare bild"
        style={{
          maxWidth: "300px",
          margin: "1rem 0",
        }}
      />
    </div>
  );
}
