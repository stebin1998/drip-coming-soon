# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Coming Soon Template

A clean, modern "Coming Soon" page built with React. Perfect for temporary landing pages while your main application is in development.

## Features

- ✨ Clean and modern design
- 📱 Fully mobile responsive
- 🚀 Easy deployment on Vercel
- 🎨 Plain black background with centered content
- 🎬 Looping background video support
- ⚡ Fast and lightweight

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your background video:**
   - Place your video file in the `public/` folder
   - Name it `background-video.mp4` (or update the source in `src/App.js`)
   - Recommended: MP4 format, optimized for web (compressed)

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Video Background Setup

The template includes support for a looping background video:

### Adding Your Video
1. Place your video file in the `public/` directory
2. Name it `background-video.mp4` (or update the source path in `src/App.js`)
3. The video will automatically loop every 21 seconds

### Video Specifications
- **Format**: MP4 (recommended for web compatibility)
- **Duration**: 21 seconds (will loop seamlessly)
- **Size**: Optimize for web (compress to reduce file size)
- **Aspect Ratio**: 16:9 or similar (will be cropped to fit)

### Customizing Video Settings
You can modify the video behavior in `src/App.js`:
- Change opacity: Edit the `opacity` value in `src/App.css`
- Disable video: Comment out the `<video>` element
- Change video source: Update the `src` attribute

## Deploy to Vercel

### Option 1: Deploy with Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 2: Deploy via GitHub
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the React app and deploy

### Option 3: Import to Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your repository
4. Deploy

## Customization

The template is designed to be easily swappable with your main app later. To customize:

- **Text**: Edit the content in `src/App.js`
- **Styling**: Modify `src/App.css`
- **Video**: Replace `public/background-video.mp4` with your video
- **Colors**: Update the CSS variables in the stylesheet
- **Fonts**: Change the font-family in the CSS

## File Structure

```
coming-soon/
├── public/
│   ├── index.html          # Main HTML template
│   └── background-video.mp4 # Your background video (add this)
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Styles
│   └── index.js           # App entry point
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies and scripts
```

## Replacing with Your Main App

When you're ready to replace this with your main application:

1. Replace the contents of `src/App.js` with your main app component
2. Update `src/App.css` with your app's styles
3. Add any additional components, pages, or dependencies
4. Update the title and meta description in `public/index.html`

The Vercel configuration will work for most React applications, so no changes needed there.

## License

MIT
