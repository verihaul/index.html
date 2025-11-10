import { useState } from 'react'
import { CarrierVerificationForm, CarrierFormData } from './CarrierVerificationForm'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [verificationResult, setVerificationResult] = useState<string | null>(null)

  const handleVerify = async (data: CarrierFormData) => {
    setIsLoading(true)
    setVerificationResult(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsLoading(false)
    setVerificationResult(`Carrier verification completed for ${data.companyName}!`)

    console.log('Carrier data submitted:', data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Carrier Verification System
          </h1>
          <p className="text-lg text-gray-600">
            Verify carrier information and credentials
          </p>
        </div>

        <CarrierVerificationForm
          onVerify={handleVerify}
          isLoading={isLoading}
        />

        {verificationResult && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center font-medium">
              {verificationResult}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
