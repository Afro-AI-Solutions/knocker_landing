# Admin Panel Guide

## Accessing the Admin Panel

Navigate to: `http://localhost:5000/admin`

## Login Credentials

- **Password**: `admin123`

## Features

The admin panel allows you to manage content for all pages:

### 1. Home Page
- **Hero Section**: Edit tagline, heading, description, and upload hero image
- **Stats Section**: Update the 4 stat cards (values and labels)
- **Tech Stack Section**: Edit title and manage technology list
- **Features Section**: Add/remove features with titles, descriptions, and images
- **Projects Section**: Add/remove featured projects with images and tags
- **Process Section**: Add/remove process steps with hex codes and descriptions
- **Testimonials Section**: Add/remove client testimonials with quotes and author info
- **CTA Section**: Edit call-to-action title, description, and button texts
- **Newsletter Section**: Edit newsletter signup title, description, and button text

### 2. Services Page
- **Hero Section**: Edit tagline, heading, and description
- **Services**: Manage service titles, descriptions, and features
- **CTA Section**: Edit call-to-action title, description, and button text

### 3. Portfolio Page
- **Hero Section**: Edit heading and description
- **Projects**: Manage project titles, descriptions, upload images, tags, categories, and links
- **CTA Section**: Edit call-to-action title, description, and button text

### 4. About Page
- **Hero Section**: Edit tagline, heading, and description
- **Story Section**: Edit company story paragraphs
- **Mission & Vision**: Edit mission and vision statements
- **Values Section**: Manage core values and descriptions
- **Team Section**: Manage team member information with photo uploads
- **CTA Section**: Edit call-to-action content

### 5. Contact Page
- **Hero Section**: Edit heading and description
- **Contact Information**: Edit email, phone, address, and business hours
- **FAQ Section**: Manage frequently asked questions and answers

## How to Use

1. Navigate to `/admin`
2. Enter the password: `admin123`
3. Select the page tab you want to edit
4. Make your changes in the form fields
5. Click "Save All Changes" button at the top right
6. Changes are saved to localStorage (will persist until browser cache is cleared)

## Current Features

✅ **Complete Content Management**: All pages now have full content management
✅ **Dynamic Content**: Add/remove services, projects, and FAQ items
✅ **Auto-Save**: Changes automatically saved every 5 seconds
✅ **Real-time Status**: Visual indicators for unsaved changes and save status
✅ **Export/Import**: Backup and restore all content as JSON files
✅ **Image Upload**: Upload images directly with file size validation
✅ **Image Previews**: Instant thumbnails of uploaded images
✅ **Toast Notifications**: User-friendly success/error messages
✅ **File Validation**: Prevents oversized files and invalid formats
✅ **Last Saved Tracking**: Shows when content was last saved

## Enhanced Features

### Auto-Save System
- **Smart Auto-Save**: Automatically saves changes every 5 seconds
- **Change Detection**: Only saves when actual changes are made
- **Visual Indicators**: Shows "Unsaved Changes" and "Saving..." status
- **Manual Save**: Option to save immediately with "Save All" button

### Dynamic Content Management
- **Add Items**: Easily add new services, projects, and FAQ items
- **Remove Items**: Delete unwanted content with one click
- **Reorder Support**: Drag and drop functionality (coming soon)

### Data Management
- **Export**: Download all content as JSON backup file
- **Import**: Upload and restore content from backup files
- **Validation**: Prevents invalid data imports
- **Timestamps**: Track when content was last modified

### Image Upload System
- **File Upload**: Select images directly from computer
- **Size Validation**: Prevents files larger than 5MB
- **Instant Preview**: See uploaded images immediately
- **Base64 Storage**: Images stored securely in localStorage
- **Clear Function**: Remove images with one click
- **Format Support**: JPG, PNG, GIF, WebP, and more

## Future Enhancements

- Database integration for persistent storage
- Contact form submissions view
- User authentication with multiple admin accounts
- Content preview before saving
- Revision history and version control
- Drag and drop reordering
- Image compression and optimization
- Cloud storage integration (AWS S3, Cloudinary)
- Content scheduling and publishing
- SEO optimization tools
- Analytics integration
- Multi-language support
