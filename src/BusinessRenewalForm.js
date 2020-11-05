import React, { useRef, useState } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import { Formik, useFormik, useFormikContext } from "formik";
import * as yup from "yup";
import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import classnames from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
import moment_tz from "moment-timezone";

const schema = yup.object({
  permit_number: yup.string().required("Permit Number is Required"),
  ban: yup.string().required("Business Account Number is Required"),
  business_name: yup.string().required("Business Name Required"),
  business_address: yup.string().required("Business Address Required"),
  barangay: yup.string().required("Barangay is Required"),
  email_address: yup
    .string()
    .required("Email is Required")
    .email("Email Format is Required"),
  time_of_day: yup.string().required("Time of Day is Required"),
  appointment_date: yup.date().required("Appointment Date is required"),
});

const getUnavailableDays = ({ setUnavailableDates }) => {
  axios
    .get("/unavailable-business-dates-renewal")
    .then((response) => {
      if (response.data) {
        setUnavailableDates(response.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function BusinessRenewalForm() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: {
      permit_number: "",
      ban: "",
      business_name: "",
      business_address: "",
      barangay: "",
      email_address: "",
      time_of_day: "",
      appointment_date: "",
      appointment_date_focused: false,
    },

    validationSchema: schema,
    onSubmit: (values, { setValues, resetForm }) => {
      if (!recaptcha) {
        setRecaptchaError("Check the checkbox");
        return;
      }

      axios
        .put("/renewal", values)
        .then((response) => {
          if (response.data) {
            recaptchaRef.current.reset();
            setRecaptchaError("");
            setRecaptcha(null);
            resetForm();
            setShow(true);
            getUnavailableDays({ setUnavailableDates });
          }
        })
        .catch((err) => console.log(err));
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [unavailable_dates, setUnavailableDates] = useState([]);
  const [unavailable_time_of_day, setUnavailableTimeOfDay] = useState([]);
  const [time_of_days, setTimeOfDays] = useState(["AM", "PM"]);

  const [recaptcha, setRecaptcha] = useState(null);
  const [recaptcha_error, setRecaptchaError] = useState(null);

  const recaptchaRef = useRef(null);

  useEffect(() => {
    getUnavailableDays({ setUnavailableDates });
    return () => {};
  }, []);

  useEffect(() => {
    axios
      .post("/unavailable-time-of-day-renewal", {
        date: values.appointment_date,
      })
      .then((response) => {
        if (response.data) {
          setUnavailableTimeOfDay(response.data);
        }
      })
      .catch((err) => console.log(err));
    return () => {};
  }, [values.appointment_date]);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <div className="form-header">Application For Renewal of Business</div>

      <Form.Group controlId="permit_number">
        <Form.Label>Permit Number</Form.Label>
        <Form.Control
          type="text"
          name="permit_number"
          placeholder="Permit Number"
          isValid={!errors.permit_number && touched.permit_number}
          value={values.permit_number}
          onChange={handleChange}
          isInvalid={!!errors.permit_number}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.permit_number}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="ban">
        <Form.Label>B.A.N. (Business Account Number)</Form.Label>
        <Form.Control
          type="text"
          name="ban"
          placeholder="Business Account Number"
          isValid={!errors.ban && touched.ban}
          value={values.ban}
          onChange={handleChange}
          isInvalid={!!errors.ban}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.ban}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="business_name_form">
        <Form.Label>Name of Business</Form.Label>
        <Form.Control
          type="text"
          name="business_name"
          placeholder="Business Name"
          value={values.business_name}
          onChange={handleChange}
          isValid={!errors.business_name && touched.business_name}
          isInvalid={!!errors.business_name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.business_name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="business_address_form">
          <Form.Label>Business Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="House#/BLDG#, Street, Subdivision/Purok, City"
            name="business_address"
            isValid={!errors.business_address && touched.business_address}
            value={values.business_address}
            onChange={handleChange}
            isInvalid={!!errors.business_address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.business_address}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Barangay</Form.Label>
          <Form.Control
            as="select"
            name="barangay"
            isValid={!errors.barangay && touched.barangay}
            value={values.barangay}
            onChange={handleChange}
            isInvalid={!!errors.barangay}
          >
            <option value="">Select Barangay</option>
            <option>Barangay 1</option>
            <option>Barangay 2</option>
            <option>Barangay 3</option>
            <option>Barangay 4</option>
            <option>Barangay 5</option>
            <option>Barangay 6</option>
            <option>Barangay 7</option>
            <option>Barangay 8</option>
            <option>Barangay 9</option>
            <option>Barangay 10</option>
            <option>Barangay 11</option>
            <option>Barangay 12</option>
            <option>Barangay 13</option>
            <option>Barangay 14</option>
            <option>Barangay 15</option>
            <option>Barangay 16</option>
            <option>Barangay 17</option>
            <option>Barangay 18</option>
            <option>Barangay 19</option>
            <option>Barangay 20</option>
            <option>Barangay 21</option>
            <option>Barangay 22</option>
            <option>Barangay 23</option>
            <option>Barangay 24</option>
            <option>Barangay 25</option>
            <option>Barangay 26</option>
            <option>Barangay 27</option>
            <option>Barangay 28</option>
            <option>Barangay 29</option>
            <option>Barangay 30</option>
            <option>Barangay 31</option>
            <option>Barangay 32</option>
            <option>Barangay 33</option>
            <option>Barangay 34</option>
            <option>Barangay 35</option>
            <option>Barangay 36</option>
            <option>Barangay 37</option>
            <option>Barangay 38</option>
            <option>Barangay 39</option>
            <option>Barangay 40</option>
            <option>Barangay 41</option>
            <option>Alangilan</option>
            <option>Alijis</option>
            <option>Banago</option>
            <option>Bata</option>
            <option>Cabug</option>
            <option>Estefania</option>
            <option>Felisa</option>
            <option>Granada</option>
            <option>Handumanan</option>
            <option>Mandalagan</option>
            <option>Mansilingan</option>
            <option>Montevista</option>
            <option>Pahanocoy</option>
            <option>Punta Taytay</option>
            <option>Singcang-Airport</option>
            <option>Sum-ag</option>
            <option>Taculing</option>
            <option>Tangub</option>
            <option>Villamonte</option>
            <option>Vista Alegre</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.barangay}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="text"
          name="email_address"
          onChange={handleChange}
          value={values.email_address}
          isValid={!errors.email_address && touched.email_address}
          isInvalid={!!errors.email_address}
          placeholder="Email Address"
        />
        <Form.Control.Feedback type="invalid">
          {errors.email_address}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group
        className={classnames({
          "has-error": errors.appointment_date,
        })}
      >
        <Form.Label>Appointment Date</Form.Label> <br />
        <SingleDatePicker
          date={
            values.appointment_date ? moment(values.appointment_date) : null
          } // momentPropTypes.momentObj or null
          onDateChange={(date) => setFieldValue("appointment_date", date)} // PropTypes.func.isRequired
          focused={values.appointment_date_focused} // PropTypes.bool
          onFocusChange={({ focused }) =>
            setFieldValue("appointment_date_focused", focused)
          } // PropTypes.func.isRequired
          id="appointment-date" // PropTypes.string.isRequired,
          minDate={moment_tz().tz("Asia/Manila").add({ days: 2 })}
          isDayBlocked={(moment_date) => {
            const has_same =
              unavailable_dates.filter((o) => {
                return moment_date.isSame(o.date, "day");
              }).length > 0;

            return (
              has_same ||
              moment_date.weekday() === 0 ||
              moment_date.weekday() === 6 ||
              moment_date.isBefore(
                moment_tz().tz("Asia/Manila").add({ days: 1 })
              ) ||
              moment_date.isBefore(moment_tz("2021-01-01").tz("Asia/Manila")) ||
              moment_date.isAfter(moment_tz("2021-02-28").tz("Asia/Manila"))
            );
          }}
        />
        {errors.appointment_date && (
          <div className="is-error">{errors.appointment_date}</div>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Time of Day</Form.Label>
        <Form.Control
          as="select"
          name="time_of_day"
          disabled={!values.appointment_date}
          isValid={!errors.time_of_day && touched.time_of_day}
          value={values.time_of_day}
          onChange={handleChange}
          isInvalid={!!errors.time_of_day}
        >
          <option value="">Select Time of Day</option>
          {time_of_days
            .filter((o) => {
              return !unavailable_time_of_day.includes(o);
            })
            .map((o) => (
              <option key={o}>{o}</option>
            ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.time_of_day}
        </Form.Control.Feedback>
      </Form.Group>

      <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITEKEY}
        ref={recaptchaRef}
        onChange={(o) => setRecaptcha(o)}
      />
      {recaptcha_error && <div className="is-error">{recaptcha_error}</div>}

      <Button variant="primary" type="submit" block className="m-t-1">
        Submit
      </Button>

      <br></br>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successfuly submitted application.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please verify your application by clicking the link sent to your email
          address.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} block>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}
