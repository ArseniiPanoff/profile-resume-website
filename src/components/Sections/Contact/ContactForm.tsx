import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress, Alert } from '@mui/material';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/email/send';

interface FormState {
  name: string;
  company: string;
  position: string;
  message: string;
}

interface FormErrors {
  name?: string;
  message?: string;
}

const useForm = (initialState: FormState) => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setIsSuccess(false);
      try {
        const response = await fetch(API_BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: formatSubject(formData),
            text: formData.message,
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
          setFormData(initialState);
        } else {
          alert('Failed to send message.');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred while sending the message.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const formatSubject = (data: FormState): string => {
    const { name, company, position } = data;
    return `Message from ${name} - ${position ? position : 'Position not specified'} at ${company ? company : 'Company not specified'}`;
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  };
};

const ContactForm: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  } = useForm({ name: '', company: '', position: '', message: '' });

  return (
    <Box mt={4} width="100%" maxWidth={600}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          error={!!errors.name}
          helperText={errors.name}
          aria-label="Name"
          aria-describedby="name-helper-text"
        />
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          margin="normal"
          aria-label="Company"
          aria-describedby="company-helper-text"
        />
        <TextField
          fullWidth
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          margin="normal"
          aria-label="Position"
          aria-describedby="position-helper-text"
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          margin="normal"
          required
          error={!!errors.message}
          helperText={errors.message}
          aria-label="Message"
          aria-describedby="message-helper-text"
        />
        {isSubmitting ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        )}
        {isSuccess && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Message sent successfully!
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default ContactForm;
