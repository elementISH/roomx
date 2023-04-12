import { useState } from "react";
import QRCode from "react-qr-code";
import { useDispatch } from "react-redux";
import { clearCart } from "../../slices/cartSlice";
import Print from "./Print";
const isValidPhoneNumber = (number) => {
  const regex = new RegExp("^[0-9]{7,15}$");
  if (!regex.test(number)) {
    return false;
  }
  return true;
};

const isValidCardNumber = (number) => {
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(number)) {
    return false;
  }

  return luhnAlgorithm(number);
};

const luhnAlgorithm = (val) => {
  let checksum = 0;
  let j = 1;

  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    calc = Number(val.charAt(i)) * j;

    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    checksum = checksum + calc;

    if (j === 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  return checksum % 10 === 0;
};

function months() {
  let options = [];

  for (let i = 1; i <= 12; i++) {
    options.push(
      <option key={i} value={("0" + i).slice(-2)}>
        {("0" + i).slice(-2)}
      </option>
    );
  }
  return options;
}

function years() {
  let options = [];
  const year = new Date().getFullYear();
  for (let i = year; i <= year + 11; i++) {
    options.push(
      <option value={i} key={i.toString()}>
        {i}
      </option>
    );
  }
  return options;
}

function teamID() {
  return +Date.now();
}

export default function Checkout(props) {
  const dispatch = useDispatch();
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [cardNumberValid, setCardNumberValid] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamNameValid, setTeamNameValid] = useState(false);
  const [cardHoldersValid, setCardHoldersValid] = useState(false);
  const [cvvValid, setCvvValid] = useState(false);
  const [dataValid, setDataValid] = useState(false);
  return (
    <>
      <div
        className="alert alert-warning opacity-75 w mx-auto information-alert"
        style={{ marginTop: "8%" }}
      >
        INFORMATION :-
        <br />
        1- purchase a ticket
        <br />
        2- print/screen shot the qr code generated
        <br />
        3- scan upon entry, works until maximum player count has been reached
        (one ticket for all!)
      </div>

      <div
        className="billing_information"
        style={{ gap: `${dataValid ? "10px" : "0"}` }}
      >
        {dataValid ? (
          <>
            <div style={{ backgroundColor: "white", padding: "1px" }}>
              <QRCode
                value={`${teamName.replaceAll(" ", "_")}--${teamID()}`}
                size={+"175"}
              />
            </div>
            <Print trigger={<button className="btn btn-warning">Print</button>}>
              <QRCode
                value={`${teamName.replaceAll(" ", "_")}--${teamID()}`}
                size={+"175"}
              />
            </Print>
          </>
        ) : (
          <>
            <div className="team__name__container data-container">
              <label htmlFor="teamName">Team Name:</label>
              <input
                type="text"
                className={`team__name--input billing-input ${
                  !teamNameValid ? "input-error" : ""
                }`}
                onInput={async (e) => {
                  await setTeamName(e.target.value);
                  if (e.target.value.length >= 1) await setTeamNameValid(true);
                  else await setTeamNameValid(false);
                }}
              />
            </div>
            <div className="phone__number__container data-container">
              <label htmlFor="phoneNumber">Phone:</label>
              <input
                type="text"
                className={`phone__number--input billing-input ${
                  !phoneNumberValid ? "input-error" : ""
                }`}
                onInput={async (e) => {
                  if (isValidPhoneNumber(e.target.value))
                    await setPhoneNumberValid(true);
                  else await setPhoneNumberValid(false);
                }}
              />
            </div>
            <div className="card__container data-container">
              <label htmlFor="card">Card Number:</label>
              <input
                type="text"
                className={`card__number--input billing-input ${
                  !cardNumberValid ? "input-error" : ""
                }`}
                onInput={async (e) => {
                  if (isValidCardNumber(e.target.value))
                    await setCardNumberValid(true);
                  else await setCardNumberValid(false);
                }}
              />
            </div>
            <div className="card__holders__container data-container">
              <label htmlFor="card">Card Holders:</label>
              <input
                type="text"
                className={`card__holders--input billing-input ${
                  !cardHoldersValid ? "input-error" : ""
                }`}
                onInput={async (e) => {
                  if (e.target.value !== "") await setCardHoldersValid(true);
                  else await setCardHoldersValid(false);
                }}
              />
            </div>
            <div className="card__extrainfo__container">
              <div className="card__expiration__container--month data-container--dropdown">
                <label htmlFor="cardMonth">Month:</label>

                <select
                  className="card__expiration--month billing-dropdown"
                  id="cardMonth"
                >
                  <option value="" disabled defaultValue={true}>
                    Month
                  </option>
                  {months()}
                </select>
              </div>

              <div className="card__expiration__container--cvv data-container--dropdown">
                <label htmlFor="cardCvv">cvv:</label>
                <input
                  type="text"
                  className={`card__cvv--dropdown billing-dropdown ${
                    !cvvValid ? "input-error" : ""
                  }`}
                  maxLength="3"
                  onInput={async (e) => {
                    if (e.target.value.length >= 2) await setCvvValid(true);
                    else await setCvvValid(false);
                  }}
                />
              </div>

              <div className="card__expiration__container--year data-container--dropdown">
                <label htmlFor="cardYear">Year:</label>
                <select
                  className="card__expiration--year billing-dropdown"
                  id="cardYear"
                >
                  <option value="" disabled defaultValue={true}>
                    Year
                  </option>
                  {years()}
                </select>
              </div>
            </div>
            <div className="data-container data-container--submit__button">
              <button
                className="billing-button"
                onClick={() => {
                  if (
                    cardNumberValid &&
                    cardNumberValid &&
                    teamNameValid &&
                    cardHoldersValid &&
                    cvvValid
                  ) {
                    setDataValid(true);
                    dispatch(clearCart());
                  } else setDataValid(false);
                }}
              >
                submit!
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
