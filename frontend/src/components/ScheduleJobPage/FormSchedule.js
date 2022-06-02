import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Form, Col, Button, Alert } from 'react-bootstrap'
import axios from 'axios'
import { useAuth0 } from "../../react-auth0-spa"
import Autocomplete from "react-google-autocomplete";

const schema = yup.object({
  senderFirstName: yup.string().required('Required'),
  senderLastName: yup.string().required('Required'),
  senderContact: yup.string().matches(/^[7][0-9]{10}$/, 'Invalid number, must be 8 digits').required('Required'),
  pickUpAddress: yup.string().required('Required'),

  recipientFirstName: yup.string().required('Required'),
  recipientLastName: yup.string().required('Required'),
  recipientContact: yup.string().matches(/^[7][0-9]{10}$/, 'Invalid number, must be 8 digits').required('Required'),
  destinationAddress: yup.string().required('Required'),


  parcelSize: yup.string()
    .oneOf(
      ['Small', 'Medium', 'Large', 'ExtraLarge'],
      'Invalid Parcel Size'
    )
    .required('Required')
})

function SuccessAlert() {
  return (
    <Alert variant="success" style={{ marginTop: "10px", textAlign: "left" }} >
      <Alert.Heading>Ваш заказ был выставлен!</Alert.Heading>
      <p>
        Ваша работа была успешно запланирована, курьер скоро примет вашу работу.
        Вы можете просмотреть свою вакансию на странице списков вакансий или на странице размещенных вакансий.
      </p>
      <hr />
      Перейти в{' '}
      <Alert.Link href="/joblistings">Список заказов</Alert.Link>, или{' '}
      <Alert.Link href="/jobsposted">Ваши заказы</Alert.Link>
    </Alert>
  )
}

function FormSchedule() {
  return (
    <div className="container" style={{ justifyContent: "center" }}>
      <FormInformation />
    </div>
  )
}

function FormInformation() {
  const { user, getTokenSilently } = useAuth0();

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        senderFirstName: '',
        senderLastName: '',
        senderContact: '',
        pickUpAddress: '',
        recipientFirstName: '',
        recipientLastName: '',
        recipientContact: '',
        destinationAddress: '',
        fragile: false,
        parcelSize: '',
        comments: ''
      }}
      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
        const token = await getTokenSilently();
        values["senderEmail"] = user.email;
        console.log(values)
        await axios.post('http://localhost:5000/api/jobs', {
          values
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => {
            console.log(response)
            resetForm()
            setStatus({ success: true })
          })
          .catch(error => {
            console.log(error)
          })
        setSubmitting(false)
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
        status
      }) => (
        <Form onSubmit={handleSubmit}>
          <h4 style={{ paddingTop: '20px' }}>Информация об отправителе</h4>
          <hr />
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 2 }} controlId="senderFirstName">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="senderFirstName"
                placeholder="Имя"
                value={values.senderFirstName}
                onChange={handleChange}
                isValid={touched.senderFirstName && !errors.senderFirstName}
                isInvalid={touched.senderFirstName && errors.senderFirstName}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="senderLastName">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="senderLastName"
                placeholder="Фамилия"
                value={values.senderLastName}
                onChange={handleChange}
                isValid={touched.senderLastName && !errors.senderLastName}
                isInvalid={touched.senderLastName && errors.senderLastName}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 2 }}>
              <Form.Label>Адрес</Form.Label>
              <Autocomplete
                className='autocomplete'
                id="pickUpAddress"
                placeholder="Адрес"
                label='Адрес'
                value={values.pickUpAddress}
                apiKey={"AIzaSyDKBCNm5Z33yiPSrW7mO81zrXySKNp9ffI"}
                onPlaceSelected={(place) =>
                  setFieldValue("pickUpAddress", place.formatted_address)
                }
                options={{
                  componentRestrictions: { country: "kz" },
                  types: ['locality']
                }}
                onChange={handleChange}
              />
            </Form.Group>


            <Form.Group as={Col} md="4" controlId="senderContact">
              <Form.Label>Контактный номер</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="senderContact"
                placeholder="Контактный номер"
                value={values.senderContact}
                onChange={handleChange}
                isValid={touched.senderContact && !errors.senderContact}
                isInvalid={touched.senderContact && errors.senderContact}
              />
              <Form.Control.Feedback type="invalid">
                {errors.senderContact}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <h4 style={{ paddingTop: '20px' }}>Информация о получателе</h4>
          <hr />

          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 2 }} controlId="recipientFirstName">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="recipientFirstName"
                placeholder="Имя"
                value={values.recipientFirstName}
                onChange={handleChange}
                isValid={touched.recipientFirstName && !errors.recipientFirstName}
                isInvalid={touched.recipientFirstName && errors.recipientFirstName}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="recipientLastName">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="recipientLastName"
                placeholder="Фамилия"
                value={values.recipientLastName}
                onChange={handleChange}
                isValid={touched.recipientLastName && !errors.recipientLastName}
                isInvalid={touched.recipientLastName && errors.recipientLastName}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 2 }}>
              <Form.Label>Адрес</Form.Label>
              <Autocomplete
                className='autocomplete'
                id="destinationAddress"
                placeholder="Адрес"
                label='Адрес'
                value={values.destinationAddress}
                apiKey={"AIzaSyDKBCNm5Z33yiPSrW7mO81zrXySKNp9ffI"}
                onPlaceSelected={(place) =>
                  setFieldValue("destinationAddress", place.formatted_address)
                }
                options={{
                  componentRestrictions: { country: "kz" },
                  types: ['locality']
                }}
                onChange={handleChange}
              />
            </Form.Group>


            <Form.Group as={Col} md="4" controlId="recipientContact">
              <Form.Label>Контактный номер</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="recipientContact"
                placeholder="Контактный номер"
                value={values.recipientContact}
                onChange={handleChange}
                isValid={touched.recipientContact && !errors.recipientContact}
                isInvalid={touched.recipientContact && errors.recipientContact}
              />
              <Form.Control.Feedback type="invalid">
                {errors.recipientContact}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <h4 style={{ paddingTop: '20px' }}>Дополнительная информация</h4>
          <hr />
          <Form.Row>
            <Form.Group controlId="parcelSize" as={Col} md={{ offset: 2, span: 3 }}>
              <Form.Label>Выберите размер посылки</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                name="parcelSize"
                value={values.parcelSize}
                onChange={handleChange}
                isValid={touched.parcelSize && !errors.parcelSize}
                isInvalid={touched.parcelSize && errors.parcelSize}
                custom>
                <option value="" label="Select a size">Размер</option>
                <option value="Small" label="Small" >Маленькая</option>
                <option value="Medium" label="Medium" >Средняя</option>
                <option value="Large" label="Large" >Большая</option>
                <option value="ExtraLarge" label="Extra Large">Огромная</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.parcelSize}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={{ span: 3, offset: 2 }} controlId="fragile">
              <Form.Check
                name="fragile"
                label="Да, моя посылка хрупкая"
                value={values.fragile}
                onChange={handleChange}
                id="checkbox"
                checked={values.fragile}
              />
              <Form.Text className="text-muted">
                Если ваша посылка хрупкая, отметьте галочку
              </Form.Text></Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="comments" md={{ span: 8, offset: 2 }}>
              <Form.Label>Комментарий</Form.Label>
              <Form.Control
                as="textarea"
                rows="6"
                name="comments"
                style={{resize: 'none'}}
                value={values.comments}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Button disabled={isSubmitting} type="submit">Отправить</Button>
          {status ? <SuccessAlert /> : <div></div>}

        </Form>
      )}
    </Formik>
  )
}

export default FormSchedule;