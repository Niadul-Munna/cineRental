import Start from "../../assets/star.svg";
export default function Rating({ value }) {
  const stars = Array(value).fill(Start);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} width="14" height="14" src={star} alt="star" />
      ))}
    </>
  );
}
