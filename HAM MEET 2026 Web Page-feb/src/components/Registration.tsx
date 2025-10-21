import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { CreditCard, CheckCircle2, Radio } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface FormData {
  name: string;
  address: string;
  callSign: string;
  mobile: string;
}

export function Registration() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    callSign: '',
    mobile: '',
  });
  
  const [showPayment, setShowPayment] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.callSign.trim()) {
      newErrors.callSign = 'Call sign is required';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = () => {
    if (validateForm()) {
      setShowPayment(true);
    }
  };

  const handleConfirmPayment = () => {
    // Simulate payment confirmation
    setTimeout(() => {
      setPaymentConfirmed(true);
    }, 1500);
  };

  const handleSubmit = () => {
    if (paymentConfirmed) {
      setSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-green-200">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl mb-4">Registration Successful!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for registering for HAM MEET - VADAKARA 2026.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2"><span className="text-gray-600">Name:</span> {formData.name}</p>
                <p className="mb-2"><span className="text-gray-600">Call Sign:</span> {formData.callSign}</p>
                <p className="mb-2"><span className="text-gray-600">Mobile:</span> {formData.mobile}</p>
              </div>
              <p className="text-gray-600">
                A confirmation has been sent to your mobile number. We look forward to seeing you at the event!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Radio className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-4xl mb-4">Register Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure your spot at HAM MEET - VADAKARA 2026. Registration fee: ₹500
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Registration Details</CardTitle>
              <CardDescription>Please fill in your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={showPayment}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  disabled={showPayment}
                  className={errors.address ? 'border-red-500' : ''}
                  rows={3}
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="callSign">Call Sign *</Label>
                <Input
                  id="callSign"
                  placeholder="e.g., VU2ABC"
                  value={formData.callSign}
                  onChange={(e) => handleInputChange('callSign', e.target.value.toUpperCase())}
                  disabled={showPayment}
                  className={errors.callSign ? 'border-red-500' : ''}
                />
                {errors.callSign && <p className="text-red-500 text-sm">{errors.callSign}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  disabled={showPayment}
                  className={errors.mobile ? 'border-red-500' : ''}
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>

              {!showPayment && (
                <Button 
                  onClick={handleProceedToPayment} 
                  className="w-full"
                >
                  Proceed to Payment
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Payment Section */}
          <Card className={!showPayment ? 'opacity-50' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment
              </CardTitle>
              <CardDescription>
                {!showPayment 
                  ? 'Complete registration details to proceed' 
                  : 'Complete payment to confirm registration'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!showPayment ? (
                <div className="py-12 text-center text-gray-400">
                  <CreditCard className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Payment details will appear after completing registration form</p>
                </div>
              ) : (
                <>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Registration Fee</span>
                      <span>₹500</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-blue-200">
                      <span>Total Amount</span>
                      <span className="text-xl">₹500</span>
                    </div>
                  </div>

                  {!paymentConfirmed ? (
                    <>
                      <Alert className="bg-yellow-50 border-yellow-200">
                        <AlertDescription>
                          This is a demo payment interface. Click "Confirm Payment" to simulate payment confirmation.
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            defaultValue="4111 1111 1111 1111"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              defaultValue="12/26"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              defaultValue="123"
                            />
                          </div>
                        </div>
                      </div>

                      <Button 
                        onClick={handleConfirmPayment} 
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        Confirm Payment
                      </Button>
                    </>
                  ) : (
                    <>
                      <Alert className="bg-green-50 border-green-200">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          Payment confirmed successfully!
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-2">
                        <div className="flex items-start gap-2 p-4 bg-gray-50 rounded-lg">
                          <Checkbox id="terms" defaultChecked />
                          <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                            I agree to the terms and conditions and confirm that all the information provided is accurate.
                          </label>
                        </div>
                      </div>

                      <Button 
                        onClick={handleSubmit} 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Complete Registration
                      </Button>
                    </>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
