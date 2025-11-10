import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Loader2 } from 'lucide-react';

interface CarrierVerificationFormProps {
  onVerify?: (data: CarrierFormData) => void;
  isLoading?: boolean;
}

export interface CarrierFormData {
  mcNumber: string;
  dotNumber: string;
  companyName: string;
  email: string;
  phone: string;
  notes: string;
}

export function CarrierVerificationForm({ onVerify, isLoading }: CarrierVerificationFormProps) {
  const [formData, setFormData] = useState<CarrierFormData>({
    mcNumber: '',
    dotNumber: '',
    companyName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verify carrier triggered', formData);
    onVerify?.(formData);
  };

  const handleChange = (field: keyof CarrierFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Carrier Information</CardTitle>
        <CardDescription>Enter carrier details to begin verification</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mcNumber">MC Number</Label>
              <Input
                id="mcNumber"
                placeholder="123456"
                value={formData.mcNumber}
                onChange={(e) => handleChange('mcNumber', e.target.value)}
                data-testid="input-mc-number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dotNumber">DOT Number</Label>
              <Input
                id="dotNumber"
                placeholder="789012"
                value={formData.dotNumber}
                onChange={(e) => handleChange('dotNumber', e.target.value)}
                data-testid="input-dot-number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              placeholder="ABC Logistics LLC"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              required
              data-testid="input-company-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="contact@carrier.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              data-testid="input-phone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Additional notes..."
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              rows={3}
              data-testid="input-notes"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
            data-testid="button-verify-carrier"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              'Verify Carrier'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
