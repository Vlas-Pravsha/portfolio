import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
} from '@react-email/components';

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  email,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from your website</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans">
        <Container className="mx-auto p-4 max-w-xl">
          <Heading className="text-2xl font-bold text-gray-800 mb-4">
            New Contact Form Submission
          </Heading>
          <Container className="bg-white p-6 rounded-lg shadow-md">
            <Text className="text-gray-700 mb-4">
              You have received a new message from your website's contact form:
            </Text>
            <Container className="mb-4">
              <Text className="font-semibold text-gray-800">From:</Text>
              <Text className="text-gray-600">{email}</Text>
            </Container>
            <Container className="mb-4">
              <Text className="font-semibold text-gray-800">Subject:</Text>
              <Text className="text-gray-600">{subject}</Text>
            </Container>
            <Container className="mb-4">
              <Text className="font-semibold text-gray-800">Message:</Text>
              <Text className="text-gray-600 whitespace-pre-wrap">{message}</Text>
            </Container>
          </Container>
          <Text className="text-sm text-gray-500 mt-4 text-center">
            This email was sent from your website's contact form.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;