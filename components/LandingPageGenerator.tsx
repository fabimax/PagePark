"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Github } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

// Preview component for the landing page
const Preview = ({ formData, enabledFields, currency }) => (
  <div className="max-w-3xl mx-auto p-4 bg-gray-50">
    <div className="bg-white p-8 rounded-xl shadow-sm">
      {enabledFields.domainName && (
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          {formData.domainName || 'example.com'}
        </h1>
      )}
      {enabledFields.askingPrice && (
        <p className="text-2xl text-gray-700 mb-6">
          Asking Price: {currency === 'USD' ? '$' : ''}{formData.askingPrice || '0'}
        </p>
      )}
      {enabledFields.description && (
        <p className="text-gray-600 mb-8">
          {formData.description || 'Add any additional information...'}
        </p>
      )}
      {enabledFields.contactEmail && (
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium">
          Contact Owner
        </button>
      )}
    </div>
  </div>
);

const LandingPageGenerator = () => {
  const [formData, setFormData] = useState({
    domainName: '',
    contactEmail: '',
    askingPrice: '',
    description: '',
  });

  const [enabledFields, setEnabledFields] = useState({
    domainName: true,
    contactEmail: true,
    askingPrice: true,
    description: true,
  });

  const [currency, setCurrency] = useState('USD');

  const generateHtml = () => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${enabledFields.domainName ? formData.domainName : 'Domain'} - For Sale</title>
    <style>
        body {
            font-family: system-ui, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background: #f8f9fa;
            line-height: 1.6;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .domain-name { font-size: 2.5em; margin-bottom: 20px; }
        .price { font-size: 1.5em; margin-bottom: 30px; }
        .description { margin: 30px 0; }
        .contact-button {
            display: inline-block;
            background: #4299e1;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="container">
        ${enabledFields.domainName ? `<h1 class="domain-name">${formData.domainName}</h1>` : ''}
        ${enabledFields.askingPrice ? `<p class="price">Asking Price: ${currency === 'USD' ? '$' : ''}${formData.askingPrice}</p>` : ''}
        ${enabledFields.description ? `<p class="description">${formData.description}</p>` : ''}
        ${enabledFields.contactEmail ? `<a href="mailto:${formData.contactEmail}?subject=Inquiry about ${formData.domainName}" class="contact-button">
            Contact Owner
        </a>` : ''}
    </div>
</body>
</html>`;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFieldToggle = (field) => {
    setEnabledFields(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const deployToGitHub = () => {
    const html = generateHtml();
    const blob = new Blob([html], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    window.open('https://pages.github.com', '_blank');
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Create Your Domain Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="domain-toggle" 
              checked={enabledFields.domainName}
              onChange={() => handleFieldToggle('domainName')}
            />
            <label htmlFor="domain-toggle" className="text-sm font-medium">Domain Name</label>
          </div>
          
          {enabledFields.domainName && (
            <div>
              <Input
                name="domainName"
                value={formData.domainName}
                onChange={handleInputChange}
                placeholder="example.com"
              />
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="email-toggle" 
              checked={enabledFields.contactEmail}
              onChange={() => handleFieldToggle('contactEmail')}
            />
            <label htmlFor="email-toggle" className="text-sm font-medium">Contact Email</label>
          </div>
          
          {enabledFields.contactEmail && (
            <div>
              <Input
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                type="email"
                placeholder="your@email.com"
              />
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="price-toggle" 
              checked={enabledFields.askingPrice}
              onChange={() => handleFieldToggle('askingPrice')}
            />
            <label htmlFor="price-toggle" className="text-sm font-medium">Asking Price</label>
          </div>
          
          {enabledFields.askingPrice && (
  <div className="flex gap-2">
    <div className="flex-1">
      <Input
        name="askingPrice"
        value={formData.askingPrice}
        onChange={handleInputChange}
        placeholder="100"
      />
    </div>
    <div className="w-32">
      <Select value={currency} onValueChange={setCurrency}>
        <SelectTrigger>
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USD">USD ($)</SelectItem>
          <SelectItem value="custom">Custom</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
)}
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="description-toggle" 
              checked={enabledFields.description}
              onChange={() => handleFieldToggle('description')}
            />
            <label htmlFor="description-toggle" className="text-sm font-medium">Anything Else</label>
          </div>
          
          {enabledFields.description && (
            <div>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Add any additional information..."
                className="h-24"
              />
            </div>
          )}

<Tabs defaultValue="preview" className="w-full">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">HTML Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">
    <Preview formData={formData} enabledFields={enabledFields} currency={currency} />
  </TabsContent>
  <TabsContent value="code">
    <Textarea
      value={generateHtml()}
      readOnly
      className="h-48 font-mono text-sm"
    />
  </TabsContent>
</Tabs>

          <div className="mt-6 flex flex-col items-center">
  <Button 
    onClick={deployToGitHub}
    className="w-64 bg-gray-900 hover:bg-gray-800"
  >
    <Github className="w-4 h-4 mr-2" />
    Download & Deploy to GitHub Pages
  </Button>
  <div className="mt-4 text-sm text-gray-600 space-y-1 text-center max-w-md">
    <p>1. On GitHub Pages, select "Project site" and "Start from scratch".</p>
    <p>2. Then just follow the four short steps in the instructions to upload your index.html</p>
    <br />
    <p className="italic">N.B.: you will need to create a GitHub account if you don't have one.</p>
  </div>
</div>

          
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPageGenerator;