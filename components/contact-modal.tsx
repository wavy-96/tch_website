'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RotatingText } from '@/components/ui/rotating-text'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Modal, ModalTrigger, ModalBody, ModalContent } from '@/components/ui/animated-modal'

const services = [
  'Website Development',
  'Social Media Marketing',
  'Google Ads Management',
  'Graphic Designing',
  'SEO Services',
  'Other'
]

export function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
    
    if (!validateForm()) {
      console.log('Form validation failed')
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      console.log('Sending request to /api/contact...')
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      console.log('Response received:', response.status, response.statusText)

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData.error)
        setErrors({ submit: 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error:', error)
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <Modal>
      <ModalTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-button text-cta font-roboto font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-blue text-white hover:bg-opacity-90 hover:shadow-lg h-12 px-8 py-4 relative overflow-hidden group">
        <motion.span
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          Contact
        </motion.span>
        <motion.div
          className="absolute right-4 opacity-0 group-hover:opacity-100"
          initial={{ x: 20, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Mail className="w-4 h-4" />
        </motion.div>
      </ModalTrigger>
      
      <ModalBody className="max-w-2xl max-h-[80vh] overflow-y-auto w-full">
        <ModalContent className="p-0">
          {isSubmitted ? (
            <div className="text-center py-12 px-8">
              <div className="w-20 h-20 bg-primary-lime rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-navy" />
              </div>
              <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-6 text-primary-navy">
                <RotatingText
                  texts={[
                    'Thank You!',
                    'Message Sent!',
                    'We Got It!',
                    'Success!'
                  ]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-primary-lime text-primary-navy overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg backdrop-blur-sm"
                  staggerFrom="last"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  rotationInterval={2000}
                  splitBy="characters"
                />
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Thanks for reaching out! Our team will review your business and get back to you within 24 hours with your personalized audit or next steps.
              </p>
              <Button 
                size="lg" 
                className="bg-primary-lime text-primary-navy hover:bg-primary-lime/90"
                onClick={resetForm}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <>
              {/* Hero Section */}
              <div className="bg-gradient-blue-navy text-white p-6 text-center">
                <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-4 flex flex-wrap items-center justify-center gap-2">
                  <span>Let's Talk</span>
                  <RotatingText
                    texts={[
                      'Growth',
                      'Success',
                      'Innovation',
                      'Results',
                      'Strategy',
                      'Excellence'
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-primary-lime text-primary-navy overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg inline-block"
                    staggerFrom="last"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%", opacity: 0 }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    rotationInterval={2500}
                    splitBy="characters"
                  />
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Whether you're ready for a free audit or want to book a call, we're here to make scaling simple.
                </p>
              </div>

              <div className="p-6">
                <div className="max-w-lg mx-auto">
                  {/* Book Call Button */}
                  <div className="text-center mb-8">
                    <Button 
                      size="sm" 
                      className="w-1/2 bg-primary-blue text-white hover:bg-primary-blue/90"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Book a Call
                    </Button>
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center my-8">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 font-medium">OR</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name *
                              </label>
                              <Input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Your full name"
                              />
                              {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                              )}
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                              </label>
                              <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="your@email.com"
                              />
                              {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone
                              </label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="w-full"
                                placeholder="+1 (647) 917-8641"
                              />
                            </div>
                            <div>
                              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                Service Interest
                              </label>
                              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service} value={service}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                              Message *
                            </label>
                            <Textarea
                              id="message"
                              required
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              className={`w-full min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                              placeholder="Tell us about your project, goals, or any questions you have..."
                            />
                            {errors.message && (
                              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                          </div>
                          
                          {errors.submit && (
                            <div className="text-center">
                              <p className="text-red-500 text-sm">{errors.submit}</p>
                            </div>
                          )}
                          
                          <div className="text-center mb-8">
                            <Button 
                              type="submit" 
                              size="sm" 
                              className="w-1/2 bg-primary-blue text-white hover:bg-primary-blue/90"
                              disabled={isSubmitting}
                            >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                              </>
                            )}
                            </Button>
                          </div>
                  </form>

                </div>
              </div>
            </>
          )}
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
