<h1 align="center">Cosmetic E-Commerce Platform Clone</h1>

<h2>📜 Project Overview</h2>
<p>This project is a full-featured clone of a cosmetic e-commerce platform, built using modern technologies like <strong>Chakra-UI</strong>, <strong>ReactJS</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Twilio</strong>, and <strong>MongoDB</strong>. The platform allows users to browse, search, and purchase beauty products with secure mobile OTP login and real-time features.</p>
<p>I managed the entire project lifecycle from <strong>conception</strong> to <strong>implementation</strong>, taking full responsibility for architecture, development, and deployment, while optimizing performance for a smooth user experience.</p>

<h2>✨ Key Features</h2>
<ul>
  <li><strong>🛒 Smooth Shopping Experience</strong>: Users can browse products and add items to their cart or wishlist.</li>
  <li><strong>🔍 Efficient Search Functionality</strong>: Search for products easily based on various categories and filters.</li>
  <li><strong>🔑 Secure Mobile OTP Login</strong>: Authentication via OTP using <strong>Twilio</strong> ensures a secure login process.</li>
  <li><strong>📜 Wishlist Management</strong>: Users can manage their wishlist and add/remove products from the list.</li>
  <li><strong>📦 Address Management</strong>: Save and manage shipping addresses for easy checkout.</li>
  <li><strong>🌐 Multi-Language Support</strong>: The platform is globally accessible, with multi-language options.</li>
  <li><strong>📞 Real-Time Communication</strong>: Integrated real-time notifications for order status and updates.</li>
  <li><strong>📱 Cross-Platform Compatibility</strong>: The app is optimized for both web and mobile experiences.</li>
</ul>

<h2>🛠 Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: ReactJS, Chakra-UI</li>
  <li><strong>Backend</strong>: Node.js, Express.js</li>
  <li><strong>Database</strong>: MongoDB</li>
  <li><strong>Authentication</strong>: Twilio (OTP-based login)</li>
  <li><strong>Real-Time Communication</strong>: Socket.io for real-time functionality</li>
</ul>

<h2>🚀 Installation and Setup</h2>

<h3>Prerequisites</h3>
<p>Ensure that you have the following installed:</p>
<ul>
  <li><strong>Node.js</strong></li>
  <li><strong>npm</strong> or <strong>yarn</strong></li>
  <li><strong>MongoDB</strong></li>
  <li><strong>Twilio account</strong> for OTP authentication</li>
</ul>

<h3>Steps to Install and Run</h3>
<ol>
  <li><strong>Clone the repository</strong>:
    <pre><code>git clone https://github.com/yourusername/cosmetic-ecommerce-clone.git
cd cosmetic-ecommerce-clone
</code></pre>
  </li>

  <li><strong>Install frontend dependencies</strong>:
    <pre><code>cd frontend
npm install
</code></pre>
  </li>

  <li><strong>Install backend dependencies</strong>:
    <pre><code>cd backend
npm install
</code></pre>
  </li>

  <li><strong>Set up environment variables</strong>:
    <p>Create a <code>.env</code> file in the <strong>backend</strong> folder and add the following:</p>
    <pre><code>MONGO_URI=&lt;your_mongodb_uri&gt;
TWILIO_ACCOUNT_SID=&lt;your_twilio_account_sid&gt;
TWILIO_AUTH_TOKEN=&lt;your_twilio_auth_token&gt;
TWILIO_PHONE_NUMBER=&lt;your_twilio_phone_number&gt;
</code></pre>
  </li>

  <li><strong>Run the backend server</strong>:
    <pre><code>cd backend
npm run start
</code></pre>
  </li>

  <li><strong>Run the frontend app</strong>:
    <pre><code>cd frontend
npm run start
</code></pre>
  </li>
</ol>

<h2>📝 Usage</h2>
<ol>
  <li><strong>Secure Login</strong>: Users log in using secure OTP-based authentication (via Twilio).</li>
  <li><strong>Search & Filter Products</strong>: Users can search for products by categories, concerns, or conditions.</li>
  <li><strong>Manage Wishlist</strong>: Add/remove items to/from the wishlist and view them on the wishlist page.</li>
  <li><strong>Real-Time Notifications</strong>: Users receive real-time notifications about order status and updates.</li>
</ol>

<h2>📂 File Structure</h2>
<pre><code>.
├── backend/
│   ├── server.js              # Main server entry point
│   ├── routes/                # API routes for backend services
│   ├── models/                # Mongoose models for MongoDB
│   ├── controllers/           # Business logic for each route
│   └── .env                   # Environment variables for backend
├── frontend/
│   ├── src/
│   │   ├── components/        # React components for the UI
│   │   ├── redux/             # Redux setup for state management
│   │   ├── screens/           # Screens for different app views
│   │   ├── utils/             # Helper utilities and functions
│   └── .env                   # Environment variables for frontend
└── README.md                  # Project readme file
</code></pre>

<h2>📈 Future Enhancements</h2>
<ul>
  <li><strong>Push Notifications</strong>: Adding notifications for new promotions and order updates.</li>
  <li><strong>Improved Product Filtering</strong>: Implementing more advanced filtering options based on user preferences.</li>
  <li><strong>Payment Gateway Integration</strong>: Adding support for multiple payment gateways for user convenience.</li>
</ul>

<h2>🤝 Contributing</h2>
<p>Contributions are welcome! To contribute:</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch for your feature: <code>git checkout -b feature/your-feature-name</code></li>
  <li>Commit your changes: <code>git commit -m 'Add new feature'</code></li>
  <li>Push to the branch: <code>git push origin feature/your-feature-name</code></li>
  <li>Open a pull request and describe your changes.</li>
</ol>

<h2>📜 License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
