import React, { FC, useState, ChangeEvent, MouseEvent } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
// Define the type for the form data
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

// Define the type for the form errors
interface FormErrors {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

// Define the type for the event handler functions
interface InputChangeHandler {
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

interface SubmitHandler {
  (e: MouseEvent<HTMLButtonElement>): void
}

const HomeNewsLetter: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  // State to manage form errors
  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  // Function to handle input changes
  const handleInputChange: InputChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    // Clear the error when the user starts typing in the field
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
  }

  // Function to validate email format
  const validateEmail = (email: string): boolean => {
    // You can use a more sophisticated email validation regex here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Function to validate phone number format
  const validatePhoneNumber = (phone: string): boolean => {
    // You can use a more sophisticated phone number validation logic here
    const phoneRegex = /^\d{10}$/ // Assumes a 10-digit phone number
    return phoneRegex.test(phone)
  }

  const handleSubmit: SubmitHandler = async () => {
    // Validate the form data
    const errors: FormErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }
    if (formData.firstName.trim() === '') {
      errors.firstName = 'First Name is required'
    }

    if (formData.lastName.trim() === '') {
      errors.lastName = 'Last Name is required'
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format'
    }
    if (formData.phone.trim() === '') {
      errors.phone = 'phone is required'
    } else if (!validatePhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number format'
    }

    // Display errors and prevent submission if there are any
    if (Object.values(errors).some((error) => error !== '')) {
      setFormErrors(errors)
      return
    }

    // Gather all the information and send a POST request
    const postData: FormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }
    console.log('🚀 ~ file: newsletter.tsx:58 ~ postData:', postData)
    // You may want to reset the form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
    // Clear any previous errors
    setFormErrors({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })

    // try {
    //   const response = await fetch('your_api_endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(postData),
    //   })

    //   if (!response.ok) {
    //     // If the response status is not OK (e.g., 4xx or 5xx error), throw an error
    //     throw new Error(`HTTP error! Status: ${response.status}`)
    //   }

    //   const data = await response.json()

    //   // Handle the response from the server
    //   console.log('Post request successful:', data)

    //   // Reset the form after successful submission
    //   setFormData({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    //   })

    //   // Clear any previous errors
    //   setFormErrors({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    //   })
    // } catch (error) {
    //   // Handle errors
    //   console.error('Error submitting for')
    // }
  }

  return (
    <Box id="newsletter" sx={{ backgroundColor: '#ecf3f3', py: { xs: 8, md: 2 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: '#ecf3f3',
            borderRadius: 10,
            py: { xs: 4, md: 7 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: { xs: 2, md: 4 }, fontSize: { xs: 32, md: 42 } }}>
            <Typography
              component="mark"
              sx={{
                position: 'relative',
                // color: 'primary.main',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                backgroundColor: 'unset',
              }}
            >
              Get in touch with us <br />
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 20, md: 28 },
                  transform: 'rotate(3deg)',
                  left: 2,
                  '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/headline-curve.svg" alt="Headline curve" />
              </Box>
            </Typography>
          </Typography>
          <Typography sx={{ mb: 6, fontSize: { xs: 16, md: 28 }, width: { xs: '100%', md: 640 }, mx: 'auto' }}>
            Say hello to Chaimae, your mentor on this exciting educational journey. Discover the difference personalized
            mentorship can make.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 2,
              width: { xs: '100%', md: 700 },
              mx: 'auto',
            }}
          >
            <FormControl>
              <InputBase
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  height: 48,
                  px: 2,
                  mb: 2,
                }}
                placeholder="First Name *"
              />
              <FormHelperText error>{formErrors.firstName}</FormHelperText>
            </FormControl>

            <FormControl>
              <InputBase
                value={formData.lastName}
                onChange={handleInputChange}
                name="lastName"
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  height: 48,
                  px: 2,
                  mb: 2,
                }}
                placeholder="Last Name *"
              />
              <FormHelperText error>{formErrors.lastName}</FormHelperText>
            </FormControl>

            <FormControl>
              <InputBase
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  height: 48,
                  px: 2,
                  mb: 2,
                }}
                placeholder="Email Address *"
              />
              <FormHelperText error>{formErrors.email}</FormHelperText>
            </FormControl>

            <FormControl>
              <InputBase
                value={formData.phone}
                onChange={handleInputChange}
                name="phone"
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  height: 48,
                  px: 2,
                  mb: 2,
                }}
                placeholder="Phone Number *"
              />
              <FormHelperText error>{formErrors.phone}</FormHelperText>
            </FormControl>

            <FormControl sx={{ gridColumn: { xs: 'span 1', md: 'span 2' } }}>
              <InputBase
                value={formData.message}
                onChange={handleInputChange}
                name="message"
                multiline
                rows={4}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  height: 'auto',
                  px: 2,
                  py: 2,
                  mb: 2,
                }}
                placeholder="Enter your Message"
              />
              <FormHelperText error>{formErrors.message}</FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ mt: 4 }}>
            <StyledButton disableHoverEffect size="large" onClick={handleSubmit}>
              Contact us
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
