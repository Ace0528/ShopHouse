import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../../components/PageSection/PageSection";
import { AppContext } from "../../contexts/AppContextProvider";
import { CartContext } from "../../contexts/CartContextProvider";
import { currencySymbol, priceByCurrency } from "../../utils/currencyHelper";
import "./PaymentPage.css";

export default function PaymentPage() {
  const { currency } = useContext(AppContext);
  const { totalPrice } = useContext(CartContext);
  const [payment, setPayment] = useState("");
  const [user, setUser] = useState({
    contact_name: "",
    contact_lastName: "",
    contact_state: "",
    contact_city: "",
    contact_zipCode: "",
    contact_phoneNumber: "",
    contact_cardName: "",
    contact_cardNumber: "",
    contact_cardExpiry: "",
    contact_cardCVV: "",
  });
  console.log(user);
  const isNavigated = useRef(false);
  const nav = useNavigate();
  const formHasError = useRef(false);
  const initFormErrorMsgs = {
    name: "",
    lastName: "",
    state: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    phoneNumber: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    cardPayment: "",
  };
  const [formError, setFormError] = useState(initFormErrorMsgs);
  const handleInputChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };
  const validate = () => {
    formHasError.current = false;
    const errorMsgs = { ...initFormErrorMsgs };

    if (user.contact_name.trim().length === 0) {
      errorMsgs.name = "Please enter name";
      formHasError.current = true;
    }

    if (user.contact_lastName.trim().length === 0) {
      errorMsgs.lastName = "Please enter last name";
      formHasError.current = true;
    }

    if (user.contact_state.trim().length === 0) {
      errorMsgs.state = "Please enter state";
      formHasError.current = true;
    }
    if (user.contact_city.trim().length === 0) {
      errorMsgs.city = "Please enter city";
      formHasError.current = true;
    }
    if (user.contact_zipCode.trim().length === 0) {
      errorMsgs.zipCode = "Please enter zip code";
      formHasError.current = true;
    }
    if (user.contact_phoneNumber.length === 0) {
      errorMsgs.phoneNumber = "Please enter phone number";
      formHasError.current = true;
    }
    if (user.contact_cardName.trim().length === 0) {
      errorMsgs.cardName = "Please enter card full name";
      formHasError.current = true;
    }
    if (user.contact_cardNumber.trim().length === 0) {
      errorMsgs.cardNumber = "Please enter card number";
      formHasError.current = true;
    }
    if (user.contact_cardExpiry.trim().length === 0) {
      errorMsgs.cardExpiry = "Please enter card expiry";
      formHasError.current = true;
    }
    if (user.contact_cardCVV.trim().length === 0) {
      errorMsgs.cardCVV = "Please enter card CVV";
      formHasError.current = true;
    }
    if (payment.trim().length === 0) {
      errorMsgs.cardPayment = "Please select payment method";
      formHasError.current = true;
    }
    setFormError({ ...errorMsgs });
  };
  const handleFormSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    validate();
    console.log("validate", formHasError.current);
    if (formHasError.current) {
      return;
    }
    nav("/success");
    isNavigated.current = true;
  };
  return (
    <div>
      <PageSection>
        <div className="page-container">
          <div>
            <div className="address-form border-form ">
              <div className="productPage-title mt "> Address </div>
              <hr className="addres-line" />
              <div className="form-container">
                <div>
                  <label className="product-description">First Name</label>
                  <span className="inp-error">{formError.name}</span>
                  <br />
                  <input
                    className="text-form"
                    type="text"
                    placeholder="John"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_name"
                    value={user.contact_name}
                  />
                  <br />
                  <label className="product-description">State</label>
                  <span className="inp-error">{formError.state}</span>
                  <br />
                  <input
                    className="text-form"
                    type="text"
                    placeholder="Macedonia"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_state"
                    value={user.contact_state}
                  />
                  <br />
                  <label className="product-description">Zip Code</label>
                  <span className="inp-error">{formError.zipCode}</span>
                  <br />
                  <input
                    className="text-form"
                    type="tel"
                    placeholder="1000"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_zipCode"
                    value={user.contact_zipCode}
                  />
                </div>
                <div>
                  <label className="product-description">Last Name</label>
                  <span className="inp-error">{formError.lastName}</span>
                  <br />
                  <input
                    className="text-form"
                    type="text"
                    placeholder="Smith"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_lastName"
                    value={user.contact_lastName}
                  />
                  <br />
                  <label className="product-description"> City </label>
                  <span className="inp-error">{formError.city}</span>
                  <br />
                  <input
                    className="text-form"
                    type="text"
                    placeholder="Skopje"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_city"
                    value={user.contact_city}
                  />
                  <br />
                  <label className="product-description"> Mobile Phone </label>
                  <span className="inp-error">{formError.phoneNumber}</span>
                  <br />
                  <input
                    className="text-form"
                    type="tel"
                    placeholder="123-45-678"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_phoneNumber"
                    value={user.contact_phoneNumber}
                  />
                </div>
              </div>
            </div>
            <div className="border-form payment-form">
              <div className="productPage-title mt ">
                {" "}
                Select Method of Payment{" "}
              </div>
              <hr className=" payment-line" />
              <div className="payment-choise">
                {" "}
                <img
                  className="img-width"
                  src={require("../../assets/icons/credit-card.png")}
                />
                <input
                  type="radio"
                  name="radio"
                  value="credit-card"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-choise">
                {" "}
                <img
                  className="img-width"
                  src={require("../../assets/icons/Paypal.png")}
                />
                <input
                  type="radio"
                  name="radio"
                  value="paypal"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-choise">
                {" "}
                <img
                  className="img-width"
                  src={require("../../assets/icons/bank.png")}
                />
                <input
                  type="radio"
                  name="radio"
                  value="bank"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <span className="inp-error">{formError.cardPayment}</span>
            </div>
          </div>
          <div>
            <div className="border-form order-container">
              <div className="productPage-title mt ">Order Summary</div>
              <hr className="price-line" />
              <div className="checkout-page-total">
                <div className="productPage-category"> Subtotal</div>
                <div className="productPage-category">
                  {currencySymbol(currency)}{" "}
                  {parseFloat(priceByCurrency(totalPrice, currency))
                    // .toFixed(2)
                    .toLocaleString("en-US")}
                </div>
              </div>
              <div className="checkout-page-total">
                <div className="productPage-category">Shipping</div>
                <div className="productPage-category"> Free </div>
              </div>
              <div className="checkout-page-total">
                <div className=" productPage-title">TOTAL</div>
                <div className=" productPage-title total-price">
                  {currencySymbol(currency)}
                  {parseFloat(priceByCurrency(totalPrice, currency))
                    // .toFixed(2)
                    .toLocaleString("en-US")}
                </div>
              </div>
            </div>
            <div>
              <div className="border-form payment-container">
                <div className="productPage-title mt ">Payment Data</div>
                <hr className="price-line" />
                <div>
                  <label className="product-description text">
                    Cardholder Name
                    <span className="inp-error">{formError.cardName}</span>
                  </label>
                </div>
                <br />
                <input
                  className="text-form-payment"
                  type="text"
                  placeholder="John Doe"
                  onChange={(e) => handleInputChange(e)}
                  name="contact_cardName"
                  value={user.contact_cardName}
                />
                <label className="product-description text">
                  Card Number
                  <span className="inp-error">{formError.cardNumber}</span>
                </label>
                <br />
                <input
                  className="text-form-payment"
                  type="text"
                  placeholder="1234 5678 9123 4567"
                  onChange={(e) => handleInputChange(e)}
                  name="contact_cardNumber"
                  value={user.contact_cardNumber}
                />
                <br />
                <div className="flex">
                  <label className="product-description ">
                    Expiry
                    <span className="inp-error">{formError.cardExpiry}</span>
                  </label>
                  <label className="product-description ">
                    CVV
                    <span className="inp-error">{formError.cardCVV}</span>
                  </label>
                </div>
                <div className="flex">
                  <input
                    className="text-form-payment expiry"
                    type="text"
                    placeholder="02/25"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_cardExpiry"
                    value={user.contact_cardExpiry}
                  />
                  <input
                    className="text-form-payment expiry"
                    type="text"
                    placeholder="123"
                    onChange={(e) => handleInputChange(e)}
                    name="contact_cardCVV"
                    value={user.contact_cardCVV}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-center">
          <button
            className="productPage-price checkOut-btn"
            onClick={(e) => handleFormSubmit(e)}
          >
            Confirm
          </button>
        </div>
      </PageSection>
    </div>
  );
}
