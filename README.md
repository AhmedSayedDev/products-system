
# Products System

This is a simple Angular project that allows users to log in, explore products, search, filter by category, paginate, and add products to a cart. The application was developed using Angular 18.2.0.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Testing Credentials](#testing-credentials)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Project Structure](#project-structure)


## Features

- **User Authentication**: Users can log in using the Authentication API.
- **Product Listings**: View products in a paginated manner.
- **Search**: Search for products by title.
- **Category Filtering**: Filter products by category.
- **Cart**: Add products to the cart and view the number of items in the cart.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AhmedSayedDev/products-system.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd products-system
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200/`.

## Testing Credentials

Use the following credentials to test the application:

- **Username:** `emilys`
- **Password:** `emilyspass`

## Usage

### Running the Application

- After setting up the project, you can access the application by navigating to `http://localhost:4200/`.
- Use the login page to authenticate (use dummy credentials as the backend is mocked).
- Explore products, use the search bar, filter by categories, and add products to your cart.

### APIs Used

This project uses the following APIs:

- **Authentication API**: [https://dummyjson.com/docs/auth#login](https://dummyjson.com/docs/auth#login)
- **Products API**: [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)

### Project Structure

```plaintext
src/
│
├── app/
│   ├── login/
│   │   ├── login.component.ts
│   │   ├── login.component.html
│   │   └── login.component.css
│   ├── products/
│   │   ├── products.component.ts
│   │   ├── products.component.html
│   │   └── products.component.css
│   ├── cart.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.routes.ts
│
├── assets/
│   ├── images/
│   └── styles/
│       ├── main.css
│       └── login-style.css
│
└── index.html
```
