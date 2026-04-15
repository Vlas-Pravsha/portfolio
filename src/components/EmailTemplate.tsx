import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import React from 'react'

interface EmailTemplateProps {
  email: string
  subject: string
  message: string
}

export function EmailTemplate({
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from the portfolio website</Preview>
      <Body
        style={{
          backgroundColor: '#f8fafc',
          fontFamily:
            'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          margin: 0,
          padding: '32px 16px',
        }}
      >
        <Container
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            margin: '0 auto',
            maxWidth: '620px',
            overflow: 'hidden',
          }}
        >
          <Section
            style={{
              background:
                'linear-gradient(135deg, rgba(132, 204, 255, 0.18), rgba(247, 178, 103, 0.18))',
              padding: '32px',
            }}
          >
            <Text
              style={{
                color: '#0f172a',
                fontSize: '12px',
                letterSpacing: '0.28em',
                margin: '0 0 12px',
                textTransform: 'uppercase',
              }}
            >
              Portfolio Contact
            </Text>
            <Heading
              style={{
                color: '#020617',
                fontSize: '28px',
                lineHeight: '32px',
                margin: 0,
              }}
            >
              New inquiry received
            </Heading>
          </Section>
          <Section style={{ padding: '28px 32px' }}>
            <Text style={{ color: '#334155', fontSize: '15px', lineHeight: '24px' }}>
              A new message was submitted from your portfolio contact form.
            </Text>
            <Section
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '18px',
                marginTop: '24px',
                padding: '20px',
              }}
            >
              <Text style={{ color: '#64748b', fontSize: '13px', margin: '0 0 8px' }}>
                From
              </Text>
              <Text style={{ color: '#0f172a', fontSize: '16px', margin: 0 }}>
                {email}
              </Text>
            </Section>
            <Section
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '18px',
                marginTop: '12px',
                padding: '20px',
              }}
            >
              <Text style={{ color: '#64748b', fontSize: '13px', margin: '0 0 8px' }}>
                Subject
              </Text>
              <Text style={{ color: '#0f172a', fontSize: '16px', margin: 0 }}>
                {subject}
              </Text>
            </Section>
            <Section
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '18px',
                marginTop: '12px',
                padding: '20px',
              }}
            >
              <Text style={{ color: '#64748b', fontSize: '13px', margin: '0 0 8px' }}>
                Message
              </Text>
              <Text
                style={{
                  color: '#0f172a',
                  fontSize: '16px',
                  lineHeight: '28px',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {message}
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default EmailTemplate
