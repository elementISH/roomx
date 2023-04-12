import FaqComponent from "./FaqComponent";
import { useGetDataQuery } from "../../slices/dataApi";

export default function Faq(props) {
  const { data, error } = useGetDataQuery(props.query);
  if (error) console.error("error:", error);
  return (
    <>
      <div className="faq container">
        <div className="header">
          <h1 className="title">faq</h1>
          <h5 className="subtitle">60 minutes.. and the clock is ticking</h5>
        </div>
        <div className="faq__container">
          {data &&
            data?.map((faq) => (
              <FaqComponent
                key={faq.id.toString()}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
        </div>
      </div>
    </>
  );
}
