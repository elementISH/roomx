import FaqComponent from "./FaqComponent";
import { useGetDataQuery } from "../../slices/dataApi";

export default function Faq(props) {
  const { data, error, isLoading } = useGetDataQuery(props.query);
  if (error) console.error("error:", error);
  console.info("loading status:", isLoading);
  return (
    <>
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
    </>
  );
}
