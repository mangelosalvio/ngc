import React, { useState } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import { Formik, useFormik, useFormikContext } from "formik";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup.object({
  type_of_business: yup.string().required("Type of Business is Required"),
  business_name: yup.string().required("Business Name Required"),
  business_address: yup.string().required("Business Address Required"),
  telephone_number: yup.string().required("Telephone Number Required"),
  mobile_number: yup.string().required("Mobile Number Required"),
  dti_sec: yup.string().required("DTI/SEC Required"),
  date_of_registration: yup.string().required("Date Required"),
  last_name: yup.string().required("Lastname Required"),
  first_name: yup.string().required("Firstname Required"),
  middle_name: yup.string().required("Middlename Required"),
  taxpayer_address: yup.string().required("Address Required"),
  taxpayer_telephone: yup.string().required("Telephone Required"),
  taxpayer_mobile: yup.string().required("Mobile Number Required"),
  email_address: yup
    .string()
    .required("Email Required")
    .email("Email Format Required"),
  contact_person: yup.string().required("Contact Person Required"),
  contact_person_number: yup.string().required("Contact Person Required"),
  type_of_property: yup.string().required("Lease type required"),
  barangay: yup.string().required("Barangay Required"),
});

export default function BusinessForm() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: {
      type_of_business: "",
      business_name: "",
      business_address: "",
      mobile_number: "",
      barangay: "",
      telephone_number: "",
      mobile_number: "",
      dti_sec: "",
      date_of_registration: "",
      last_name: "",
      first_name: "",
      middle_name: "",
      taxpayer_address: "",
      taxpayer_telephone: "",
      taxpayer_mobile: "",
      email_address: "",
      contact_person: "",
      contact_person_number: "",
      type_of_lease: "",
    },
    //validationSchema: schema,
    onSubmit: (values, { setValues, resetForm }) => {
      console.log(values);
      axios
        .put("/", values)
        .then((response) => {
          if (response.data) {
            resetForm();
            setShow(true);
            // setValues((prevState) => ({
            //   ...prevState,
            //   ...response.data,
            // }));
          }
        })
        .catch((err) => console.log(err));
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <div className="form-header">APPLICATION FORM FOR NEW BUSINESS</div>

      <Form.Group controlId="type_of_business_form">
        <Form.Label>Type of Business</Form.Label>
        <Form.Control
          as="select"
          name="type_of_business"
          isValid={!errors.type_of_business && touched.type_of_business}
          value={values.type_of_business}
          onChange={handleChange}
          isInvalid={!!errors.type_of_business}
        >
          <option value="">Select Type of Business</option>
          <option>Single</option>
          <option>Partnership</option>
          <option>Corporation</option>
          <option>Cooperative</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.type_of_business}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter your type of business
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="business_name_form">
        <Form.Label>Name of Business</Form.Label>
        <Form.Control
          type="text"
          name="business_name"
          placeholder="Enter Name"
          isValid={!errors.business_name && touched.business_name}
          value={values.business_name}
          onChange={handleChange}
          isInvalid={!!errors.business_name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.business_name}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter the name of your business
        </Form.Text>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="business_address_form">
          <Form.Label>Business Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            name="business_address"
            isValid={!errors.business_address && touched.business_address}
            value={values.business_address}
            onChange={handleChange}
            isInvalid={!!errors.business_address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.business_address}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Enter your business address in the following format: House#, Street,
            Subdivision or Purok, City
          </Form.Text>
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

          <Form.Text className="text-muted">Choose your barangay</Form.Text>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            type="text"
            name="telephone_number"
            onChange={handleChange}
            value={values.telephone_number}
            isValid={!errors.telephone_number && touched.telephone_number}
            isInvalid={!!errors.telephone_number}
            placeholder="Enter Phone"
          />
          <Form.Control.Feedback type="invalid">
            {errors.telephone_number}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Enter business phone number in the following fornat: e.g. 4441234
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile_number"
            onChange={handleChange}
            value={values.mobile_number}
            isValid={!errors.mobile_number && touched.mobile_number}
            isInvalid={!!errors.mobile_number}
            placeholder="mobile_number"
          />
          <Form.Control.Feedback type="invalid">
            {errors.mobile_number}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Enter mobile number in the following format: 09097770000
          </Form.Text>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>DTI/SEC/CDA Registration No.#:</Form.Label>
        <Form.Control
          type="text"
          name="dti_sec"
          onChange={handleChange}
          value={values.dti_sec}
          isValid={!errors.dti_sec && touched.dti_sec}
          isInvalid={!!errors.dti_sec}
          placeholder="DTI/SEC"
        />
        <Form.Control.Feedback type="invalid">
          {errors.dti_sec}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter your DTI/SEC/CDA Reg. No.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>DTI Date of Registration</Form.Label>
        <Form.Control
          type="date"
          name="date_of_registration"
          onChange={handleChange}
          value={values.date_of_registration}
          isValid={!errors.date_of_registration && touched.date_of_registration}
          isInvalid={!!errors.date_of_registration}
          placeholder="date_of_registration"
        />
        <Form.Control.Feedback type="invalid">
          {errors.date_of_registration}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter the date of registration
        </Form.Text>
      </Form.Group>

      <hr></hr>
      <div className="title">Taxpayers Information</div>

      <Form.Group>
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          name="last_name"
          onChange={handleChange}
          value={values.last_name}
          isValid={!errors.last_name && touched.last_name}
          isInvalid={!!errors.last_name}
          placeholder="last_name"
        />
        <Form.Control.Feedback type="invalid">
          {errors.last_name}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">Enter your Lastname</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          type="text"
          name="first_name"
          onChange={handleChange}
          value={values.first_name}
          isValid={!errors.first_name && touched.first_name}
          isInvalid={!!errors.first_name}
          placeholder="first_name"
        />
        <Form.Control.Feedback type="invalid">
          {errors.first_name}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">Enter your Firstname</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Middlename</Form.Label>
        <Form.Control
          type="text"
          name="middle_name"
          onChange={handleChange}
          value={values.middle_name}
          isValid={!errors.middle_name && touched.middle_name}
          isInvalid={!!errors.middle_name}
          placeholder="middle_name"
        />
        <Form.Control.Feedback type="invalid">
          {errors.middle_name}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">Enter your Middlename</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Taxpayers Address</Form.Label>
        <Form.Control
          type="text"
          name="taxpayer_address"
          onChange={handleChange}
          value={values.taxpayer_address}
          isValid={!errors.taxpayer_address && touched.taxpayer_address}
          isInvalid={!!errors.taxpayer_address}
          placeholder="taxpayer_address"
        />
        <Form.Control.Feedback type="invalid">
          {errors.taxpayer_address}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">Enter your address</Form.Text>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            type="text"
            name="taxpayer_telephone"
            onChange={handleChange}
            value={values.taxpayer_telephone}
            isValid={!errors.taxpayer_telephone && touched.taxpayer_telephone}
            isInvalid={!!errors.taxpayer_telephone}
            placeholder="taxpayer_telephone"
          />
          <Form.Control.Feedback type="invalid">
            {errors.taxpayer_telephone}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Enter phone number in the following fornat: e.g. 4441234
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="taxpayer_mobile"
            onChange={handleChange}
            value={values.taxpayer_mobile}
            isValid={!errors.taxpayer_mobile && touched.taxpayer_mobile}
            isInvalid={!!errors.taxpayer_mobile}
            placeholder="taxpayer_mobile"
          />
          <Form.Control.Feedback type="invalid">
            {errors.taxpayer_mobile}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Enter mobile number in the following format: 09097770000
          </Form.Text>
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
          placeholder="email_address"
        />
        <Form.Control.Feedback type="invalid">
          {errors.email_address}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">Enter your email address</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Contact Person In Case of Emergency</Form.Label>
        <Form.Control
          type="text"
          name="contact_person"
          onChange={handleChange}
          value={values.contact_person}
          isValid={!errors.contact_person && touched.contact_person}
          isInvalid={!!errors.contact_person}
          placeholder="contact_person"
        />
        <Form.Control.Feedback type="invalid">
          {errors.contact_person}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">Enter name</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Contact Number of Contact Person</Form.Label>
        <Form.Control
          type="text"
          name="contact_person_number"
          onChange={handleChange}
          value={values.contact_person_number}
          isValid={
            !errors.contact_person_number && touched.contact_person_number
          }
          isInvalid={!!errors.contact_person_number}
          placeholder="contact_person_number"
        />
        <Form.Control.Feedback type="invalid">
          {errors.contact_person_number}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter your name in the following format ; e.g. Dela, Cruz Juan
        </Form.Text>
      </Form.Group>

      <div className="title">Business Property</div>

      <Form.Group>
        <Form.Label>Type of Property</Form.Label>
        <Form.Control
          as="select"
          name="type_of_lease"
          isValid={!errors.type_of_property && touched.type_of_property}
          value={values.type_of_property}
          onChange={handleChange}
          isInvalid={!!errors.type_of_property}
        >
          <option value="">Select Type of Lease</option>
          <option>Owned</option>
          <option>Rented</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.type_of_property}
        </Form.Control.Feedback>

        <Form.Text className="text-muted">
          If Owned: Please present a photocopy of any "Legal Proof of Ownership"
          upon submission of documents to the Business Permits and Licensing
          Office.<br></br>
          If Rented: Please Present a photocopy of Contract of Lease upon
          submission of documents to the Business Permits and Licensing Office.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Submit
      </Button>

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
