'use client'

import { useState } from 'react'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  'Website Development',
  'Social Media Marketing',
  'Google Ads Management',
  'Graphic Designing',
  'SEO Services',
  'Other'
]

export default function ContactPage() {
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
    setErrors({})
  }

  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-blue-navy text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-roboto font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let's Talk Growth
            </motion.h1>
            <motion.p 
              className="text-lg text-white/80 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you're ready for a free audit or want to book a call, we're here to make scaling simple.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-primary-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary-navy" />
                </div>
                <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-6 text-primary-navy">
                  Thank You!
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
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-8">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-roboto font-bold text-primary-navy mb-6">
                        Get Your Free Audit
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Fill out the form and we'll get back to you within 24 hours with your personalized business audit.
                      </p>
                      
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
                              placeholder="000 0000000"
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
                        
                        <div className="text-center">
                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full bg-primary-blue text-white hover:bg-primary-blue/90"
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
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-2xl font-roboto font-bold text-primary-navy mb-6">
                      Get in Touch
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Ready to scale your business? Let's discuss how we can help you achieve your goals.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">Contact@thecreativehorse.ca</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600">000 0000000</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Location</h4>
                        <p className="text-gray-600">6725 Millcreek Drive, Mississauga, Ontario</p>
                      </div>
                    </div>
                  </div>

                  {/* Book a Call Button */}
                  <div className="pt-8">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary-lime text-primary-navy hover:bg-primary-lime/90"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Book a Call
                    </Button>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

